"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Straight-edge outlines traced directly from public/logo-full.png
// (OpenCV contour extraction + polygon simplification), not hand-drawn
// approximations. Three separate flat pieces: the M's outer ribbon, the
// M's shorter inner leg, and the K.
const M_OUTER: [number, number][] = [
  [-1.274, 1.052],
  [-1.274, -1.095],
  [-1.003, -1.126],
  [-0.997, 0.48],
  [-0.228, -0.098],
  [-0.025, 0.092],
];
const M_INNER_LEG: [number, number][] = [
  [-0.634, -0.043],
  [-0.634, -1.126],
  [-0.369, -1.126],
  [-0.363, -0.24],
];
const K_SHAPE: [number, number][] = [
  [1.058, 0.942],
  [-0.24, -0.338],
  [-0.24, -0.665],
  [0.148, -0.363],
  [0.978, -1.126],
  [1.366, -1.126],
  [0.338, -0.172],
  [1.391, 0.905],
];

function buildFlatShape(points: [number, number][]) {
  const shape = new THREE.Shape();
  shape.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    shape.lineTo(points[i][0], points[i][1]);
  }
  shape.closePath();
  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.32,
    bevelEnabled: false,
    curveSegments: 1,
  });
}

export default function Logo3D({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0, 6.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({
      color: 0xc9c9c9,
      metalness: 1,
      roughness: 0.3,
      flatShading: true,
    });

    [M_OUTER, M_INNER_LEG, K_SHAPE].forEach((points) => {
      const mesh = new THREE.Mesh(buildFlatShape(points), material);
      group.add(mesh);
    });

    // center the group on its own bounding box, then flatten depth axis
    const box = new THREE.Box3().setFromObject(group);
    const center = box.getCenter(new THREE.Vector3());
    group.children.forEach((child) => {
      child.position.sub(new THREE.Vector3(center.x, center.y, 0));
    });
    group.position.z = -0.16;
    scene.add(group);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.4);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    const fillLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(fillLight);

    let frameId: number;
    let isVisible = true;

    function resize() {
      if (!container) return;
      const size = container.clientWidth;
      renderer.setSize(size, size);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    }
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    function animate() {
      frameId = requestAnimationFrame(animate);
      if (!isVisible) return;
      if (!prefersReducedMotion) {
        group.rotation.y += 0.008;
        group.rotation.x = Math.sin(Date.now() * 0.0004) * 0.12;
      }
      renderer.render(scene, camera);
    }
    animate();

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(container);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      group.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
        }
      });
      material.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="Matthew Klette logo mark, rotating 3D render"
      className={className}
    />
  );
}
