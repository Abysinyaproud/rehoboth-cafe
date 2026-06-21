"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type EthiopianCoffeeSceneProps = {
  className?: string;
  presentation?: "ambient" | "showcase";
};

const GOLD = 0xc9a96e;
const FOREST = 0x0f4d46;
const ACCENT = 0x0f4d46;
const ESPRESSO = 0x1b1714;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function EthiopianCoffeeScene({
  className = "",
  presentation = "ambient"
}: EthiopianCoffeeSceneProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;

    if (!host) {
      return;
    }

    let frameId = 0;
    let disposed = false;
    const pointer = new THREE.Vector2(0, 0);
    const pointerTarget = new THREE.Vector2(0, 0);
    const reducedMotion = prefersReducedMotion();
    const scene = new THREE.Scene();
    const isShowcase = presentation === "showcase";
    scene.fog = new THREE.FogExp2(FOREST, isShowcase ? 0.028 : 0.042);

    const camera = new THREE.PerspectiveCamera(isShowcase ? 28 : 34, 1, 0.1, 120);
    camera.position.set(0, isShowcase ? 0.7 : 1.2, isShowcase ? 8.2 : 12);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
      preserveDrawingBuffer: true
    });
    renderer.setClearColor(FOREST, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    host.appendChild(renderer.domElement);

    const root = new THREE.Group();
    const beanGroup = new THREE.Group();
    const orbitGroup = new THREE.Group();
    scene.add(root);
    root.add(beanGroup, orbitGroup);

    const ambient = new THREE.AmbientLight(0xf4e9d8, isShowcase ? 0.72 : 0.42);
    const key = new THREE.DirectionalLight(0xf4e9d8, isShowcase ? 2.4 : 1.4);
    key.position.set(-4, 6, 7);
    const goldGlow = new THREE.PointLight(GOLD, isShowcase ? 6.2 : 3.2, 18);
    goldGlow.position.set(4, 1.2, 4);
    const greenGlow = new THREE.PointLight(ACCENT, isShowcase ? 3.4 : 2.1, 18);
    greenGlow.position.set(-5, -2, 3);
    scene.add(ambient, key, goldGlow, greenGlow);

    const beanGeometry = new THREE.SphereGeometry(0.72, 40, 24);
    beanGeometry.scale(0.58, 0.88, 0.26);

    const grooveGeometry = new THREE.TorusGeometry(0.29, 0.012, 8, 36, Math.PI * 1.72);
    const beanMaterial = new THREE.MeshStandardMaterial({
      color: isShowcase ? 0x341c11 : ESPRESSO,
      roughness: isShowcase ? 0.5 : 0.64,
      metalness: isShowcase ? 0.16 : 0.08,
      emissive: 0x2b170f,
      emissiveIntensity: isShowcase ? 0.18 : 0.08
    });
    const grooveMaterial = new THREE.MeshStandardMaterial({
      color: GOLD,
      roughness: 0.38,
      metalness: 0.58,
      transparent: true,
      opacity: isShowcase ? 0.95 : 0.72
    });

    const positions: ReadonlyArray<readonly [number, number, number, number]> = isShowcase
      ? [
          [-2.6, 0.35, -0.4, 0.6],
          [-1.1, -0.8, 0.8, -0.4],
          [0.45, 0.55, 0.1, 0.2],
          [1.95, -0.45, -0.2, -0.7],
          [2.8, 0.85, 0.75, 0.8],
          [0.9, 1.55, -1.4, 0.1]
        ]
      : [
          [-4.4, 0.6, -0.8, 0.6],
          [-2.4, -1.1, 1.2, -0.4],
          [-0.2, 1.1, 0.1, 0.2],
          [2.1, -0.7, -0.4, -0.7],
          [4.2, 0.9, 0.9, 0.8],
          [1.2, 2.2, -1.8, 0.1],
          [-3.1, 2.2, -2.2, -0.2]
        ];

    positions.forEach(([x, y, z, rotation], index) => {
      const bean = new THREE.Group();
      const body = new THREE.Mesh(beanGeometry, beanMaterial);
      const groove = new THREE.Mesh(grooveGeometry, grooveMaterial);
      groove.rotation.set(Math.PI / 2, 0.18, 0);
      groove.position.z = 0.16;
      bean.add(body, groove);
      bean.position.set(x, y, z);
      bean.rotation.set(0.4 + index * 0.11, rotation, 0.28);
      bean.scale.setScalar((isShowcase ? 1.24 : 0.82) + index * 0.035);
      bean.userData.speed = (isShowcase ? 0.0026 : 0.0018) + index * 0.00022;
      beanGroup.add(bean);
    });

    const orbitMaterial = new THREE.LineBasicMaterial({
      color: GOLD,
      transparent: true,
      opacity: isShowcase ? 0.72 : 0.42
    });

    for (let i = 0; i < 3; i += 1) {
      const points: THREE.Vector3[] = [];

      for (let step = 0; step <= 160; step += 1) {
        const angle = (step / 160) * Math.PI * 2;
        points.push(
          new THREE.Vector3(
            Math.cos(angle) * ((isShowcase ? 3.3 : 4.7) + i * 0.36),
            Math.sin(angle) * ((isShowcase ? 0.94 : 1.24) + i * 0.16),
            Math.sin(angle * 0.7) * (isShowcase ? 0.62 : 0.42)
          )
        );
      }

      const orbit = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), orbitMaterial);
      orbit.rotation.set(0.74 + i * 0.18, 0.18, -0.18 + i * 0.12);
      orbitGroup.add(orbit);
    }

    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(120 * 3);

    for (let i = 0; i < particlePositions.length; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 11;
      particlePositions[i + 1] = (Math.random() - 0.5) * 6;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4 - 1.4;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: GOLD,
        size: isShowcase ? 0.028 : 0.018,
        transparent: true,
        opacity: isShowcase ? 0.72 : 0.5
      })
    );
    scene.add(particles);

    const resize = () => {
      if (disposed) {
        return;
      }

      const width = host.clientWidth;
      const height = host.clientHeight;
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      pointerTarget.x = THREE.MathUtils.clamp(
        ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2,
        -1,
        1
      );
      pointerTarget.y = THREE.MathUtils.clamp(
        ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2,
        -1,
        1
      );
    };

    const handlePointerLeave = () => {
      pointerTarget.set(0, 0);
    };

    const render = () => {
      const elapsed = performance.now() * 0.001;
      pointer.lerp(pointerTarget, 0.035);
      root.rotation.y = Math.sin(elapsed * 0.08) * 0.1 + pointer.x * 0.08;
      root.rotation.x = Math.sin(elapsed * 0.06) * 0.035 - pointer.y * 0.035;
      camera.position.x = pointer.x * 0.28;
      camera.position.y = 1.2 - pointer.y * 0.16;
      camera.lookAt(0, 0, 0);
      orbitGroup.rotation.z += reducedMotion ? 0 : 0.00055;

      beanGroup.children.forEach((bean) => {
        bean.rotation.y += reducedMotion ? 0 : bean.userData.speed;
        bean.rotation.z += reducedMotion ? 0 : bean.userData.speed * 0.42;
      });

      particles.rotation.y += reducedMotion ? 0 : 0.00036;
      renderer.render(scene, camera);

      if (!reducedMotion && !disposed) {
        frameId = requestAnimationFrame(render);
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    resize();
    render();

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      beanGeometry.dispose();
      grooveGeometry.dispose();
      beanMaterial.dispose();
      grooveMaterial.dispose();
      orbitMaterial.dispose();
      particleGeometry.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [presentation]);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    />
  );
}
