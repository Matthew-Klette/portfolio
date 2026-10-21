import * as THREE from "three";
import { FIELD, cardCount, depthFade, place } from "./field";

const FOV = 50;
const CARD_W = 1.15;
const CARD_H = 0.72;
const SWAP_MS = 900;
const SWAP_STAGGER_MS = 700;
const EXIT_NDC = 1.25; // a card respawns once it has fully left the view
const PORTRAIT_SCALE = 0.78;

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Rounded-rect mask, crossfade between two shots, brightness from depth.
// Drawn opaque with depth testing: on the black canvas, fading to black reads as
// transparency, and depth keeps overlapping cards in a stable order (no popping).
const fragment = /* glsl */ `
  uniform sampler2D tA;
  uniform sampler2D tB;
  uniform float mixv;
  uniform float fade;
  varying vec2 vUv;
  float roundedBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
  }
  void main() {
    vec2 p = (vUv - 0.5) * vec2(${CARD_W.toFixed(2)}, ${CARD_H.toFixed(2)});
    float d = roundedBox(p, vec2(${(CARD_W / 2).toFixed(2)}, ${(CARD_H / 2).toFixed(2)}), 0.08);
    if (d > 0.0) discard;
    float mask = 1.0 - smoothstep(-0.012, 0.0, d); // soften the corner edge toward black
    vec3 col = mix(texture2D(tA, vUv).rgb, texture2D(tB, vUv).rgb, mixv);
    // hairline inner edge, like the 1px translucent borders on the page
    float edge = 1.0 - smoothstep(0.0, 0.012, abs(d + 0.006));
    col = mix(col, vec3(1.0), edge * 0.12);
    gl_FragColor = vec4(col * fade * mask, 1.0);
  }
`;

type Card = {
  mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  spin: THREE.Vector3;
  swapStart: number; // ms, -1 when idle
};

export type Tunnel = {
  setTheme: (shotIndexes: readonly number[]) => void;
  start: () => void;
  stop: () => void;
  dispose: () => void;
};

export function createTunnel(canvas: HTMLCanvasElement, shotUrls: readonly string[], reducedMotion: boolean): Tunnel {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  renderer.setClearColor(0x000000, 1);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 50);
  resize(); // cards are placed against the real aspect ratio
  const loader = new THREE.TextureLoader();
  const textures = shotUrls.map((url) => {
    const t = loader.load(url, () => (reducedMotion ? renderOnce() : undefined));
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  });

  const geometry = new THREE.PlaneGeometry(CARD_W, CARD_H);
  let theme: readonly number[] = textures.map((_, i) => i);
  const pick = () => textures[theme[Math.floor(Math.random() * theme.length)]];

  const cards: Card[] = Array.from({ length: FIELD.count }, (_, i) => {
    const material = new THREE.ShaderMaterial({
      uniforms: { tA: { value: pick() }, tB: { value: pick() }, mixv: { value: 0 }, fade: { value: 0 } },
      vertexShader: vertex,
      fragmentShader: fragment,
    });
    const mesh = new THREE.Mesh(geometry, material);
    const z = FIELD.farZ + ((i + 0.5) / FIELD.count) * (FIELD.startZ - FIELD.farZ);
    respawn(mesh, z);
    scene.add(mesh);
    return {
      mesh,
      spin: new THREE.Vector3((Math.random() - 0.5) * 0.12, (Math.random() - 0.5) * 0.16, (Math.random() - 0.5) * 0.1),
      swapStart: -1,
    };
  });
  applyLayout();

  // Portrait screens show a smaller share of the field, with slightly smaller cards.
  function applyLayout() {
    const visible = cardCount(camera.aspect);
    const scale = camera.aspect >= 1 ? 1 : PORTRAIT_SCALE;
    cards.forEach((c, i) => {
      c.mesh.visible = i < visible;
      c.mesh.scale.setScalar(scale);
    });
  }

  const projected = new THREE.Vector3();
  const offscreen = (mesh: THREE.Mesh) => {
    projected.copy(mesh.position).project(camera);
    return Math.abs(projected.x) > EXIT_NDC || Math.abs(projected.y) > EXIT_NDC || mesh.position.z > FIELD.nearZ;
  };

  function respawn(mesh: THREE.Mesh, z: number) {
    const p = place(z, FOV, camera.aspect, Math.random);
    mesh.position.set(p.x, p.y, p.z);
    mesh.rotation.set((Math.random() - 0.5) * 0.7, (Math.random() - 0.5) * 0.7, (Math.random() - 0.5) * 0.8);
  }

  const pointer = new THREE.Vector2();
  const onPointer = (e: PointerEvent) => {
    pointer.set((e.clientX / window.innerWidth) * 2 - 1, -((e.clientY / window.innerHeight) * 2 - 1));
  };
  window.addEventListener("pointermove", onPointer, { passive: true });

  function resize() {
    const { clientWidth: w, clientHeight: h } = canvas;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(() => {
    resize();
    applyLayout();
    renderOnce(); // resizing clears the canvas; redraw in the same frame so it never flashes
  });
  ro.observe(canvas);
  resize();

  let raf = 0;
  let last = 0;

  function step(now: number, dt: number) {
    camera.position.x += (pointer.x * 0.35 - camera.position.x) * Math.min(1, dt * 2);
    camera.position.y += (pointer.y * 0.22 - camera.position.y) * Math.min(1, dt * 2);
    camera.lookAt(0, 0, -10);
    for (const c of cards) {
      const m = c.mesh;
      m.position.z += FIELD.speed * dt;
      if (offscreen(m)) {
        respawn(m, FIELD.farZ);
        m.material.uniforms.tA.value = pick();
        m.material.uniforms.mixv.value = 0;
        c.swapStart = -1;
      }
      m.rotation.x += c.spin.x * dt;
      m.rotation.y += c.spin.y * dt;
      m.rotation.z += c.spin.z * dt;
      m.material.uniforms.fade.value = depthFade(m.position.z);
      if (c.swapStart >= 0 && now >= c.swapStart) {
        const t = Math.min(1, (now - c.swapStart) / SWAP_MS);
        m.material.uniforms.mixv.value = t * t * (3 - 2 * t);
        if (t === 1) {
          m.material.uniforms.tA.value = m.material.uniforms.tB.value;
          m.material.uniforms.mixv.value = 0;
          c.swapStart = -1;
        }
      }
    }
    renderer.render(scene, camera);
  }

  function loop(now: number) {
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
    last = now;
    step(now, dt);
    raf = requestAnimationFrame(loop);
  }

  function renderOnce() {
    for (const c of cards) c.mesh.material.uniforms.fade.value = depthFade(c.mesh.position.z);
    camera.lookAt(0, 0, -10);
    renderer.render(scene, camera);
  }

  return {
    setTheme(shotIndexes) {
      theme = shotIndexes.length ? shotIndexes : theme;
      const now = performance.now();
      for (const c of cards) {
        // finish any swap still running before starting the next one
        if (c.swapStart >= 0) c.mesh.material.uniforms.tA.value = c.mesh.material.uniforms.tB.value;
        c.mesh.material.uniforms.mixv.value = 0;
        c.mesh.material.uniforms.tB.value = pick();
        c.swapStart = reducedMotion ? 0 : now + Math.random() * SWAP_STAGGER_MS;
        if (reducedMotion) {
          c.mesh.material.uniforms.tA.value = c.mesh.material.uniforms.tB.value;
          c.swapStart = -1;
        }
      }
      if (reducedMotion) renderOnce();
    },
    start() {
      if (reducedMotion || raf) return renderOnce();
      last = 0;
      raf = requestAnimationFrame(loop);
    },
    stop() {
      cancelAnimationFrame(raf);
      raf = 0;
    },
    dispose() {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointer);
      for (const c of cards) c.mesh.material.dispose();
      geometry.dispose();
      textures.forEach((t) => t.dispose());
      renderer.dispose();
    },
  };
}
