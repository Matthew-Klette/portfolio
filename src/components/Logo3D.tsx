"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Centerline points approximating the MK monogram: a zigzag M on the
// left sharing its final downstroke with K's vertical, then two
// diagonal arms branching off the shared vertex for the K.
const M_PATH = [
  [-1.6, 1.1, 0],
  [-1.6, -1.1, 0],
  [-0.75, 0.35, 0],
  [-0.75, -1.1, 0],
];
const K_UPPER_ARM = [
  [-0.75, 0.0, 0],
  [1.0, 1.1, 0],
];
const K_LOWER_ARM = [
  [-0.75, -0.35, 0],
  [1.0, -1.1, 0],
];

function buildStroke(points: number[][]) {
  const curve = new THREE.CatmullRomCurve3(
    points.map(([x, y, z]) => new THREE.Vector3(x, y, z))
  );
  return new THREE.TubeGeometry(curve, 32, 0.16, 12, false);
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
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
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
      roughness: 0.28,
    });

    [M_PATH, K_UPPER_ARM, K_LOWER_ARM].forEach((path) => {
      const mesh = new THREE.Mesh(buildStroke(path), material);
      group.add(mesh);
    });
    group.position.x = -0.05;
    scene.add(group);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.2);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    const fillLight = new THREE.AmbientLight(0xffffff, 0.35);
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
        group.rotation.x = Math.sin(Date.now() * 0.0004) * 0.15;
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
