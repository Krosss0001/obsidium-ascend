"use client";

import { Edges, Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";
import { MathUtils } from "three";

function ObsidianMonolith() {
  const group = useRef<Group>(null);
  const monolith = useRef<Mesh>(null);
  const halo = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!group.current) {
      return;
    }

    const desktopOffset = state.viewport.width > 7 ? 1.34 : 0.08;
    group.current.rotation.y += delta * 0.032;
    group.current.rotation.x = MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.08,
      0.035,
    );
    group.current.position.x = MathUtils.lerp(
      group.current.position.x,
      desktopOffset + state.pointer.x * 0.12,
      0.04,
    );
    group.current.position.y = MathUtils.lerp(
      group.current.position.y,
      state.pointer.y * 0.055,
      0.04,
    );

    if (monolith.current) {
      monolith.current.rotation.z = MathUtils.lerp(
        monolith.current.rotation.z,
        state.pointer.x * 0.025,
        0.04,
      );
    }

    if (halo.current) {
      halo.current.rotation.z -= delta * 0.08;
    }
  });

  return (
    <Float floatIntensity={0.45} rotationIntensity={0.08} speed={0.65}>
      <group ref={group}>
        <mesh position={[0, -1.68, -0.22]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.42, 0.008, 10, 144]} />
          <meshStandardMaterial
            color="#6f42d8"
            emissive="#6f42d8"
            emissiveIntensity={0.3}
            metalness={0.65}
            roughness={0.22}
          />
        </mesh>

        <mesh
          ref={halo}
          position={[0.08, -1.68, -0.24]}
          rotation={[Math.PI / 2, 0.06, 0.12]}
        >
          <torusGeometry args={[1.94, 0.005, 8, 168]} />
          <meshStandardMaterial
            color="#c4c5cb"
            emissive="#737989"
            emissiveIntensity={0.08}
            metalness={0.86}
            roughness={0.18}
          />
        </mesh>

        <mesh
          ref={monolith}
          castShadow
          position={[0, 0.04, 0]}
          rotation={[0.04, 0.2, -0.015]}
          scale={[1.08, 3.52, 0.56]}
        >
          <boxGeometry args={[1, 1, 1, 4, 10, 4]} />
          <meshPhysicalMaterial
            clearcoat={0.72}
            clearcoatRoughness={0.28}
            color="#040407"
            emissive="#090713"
            emissiveIntensity={0.36}
            metalness={0.82}
            roughness={0.34}
          />
          <Edges color="#a4a0b5" scale={1.006} threshold={18} />
        </mesh>

        <mesh position={[0.18, 0.12, 0.04]} scale={[0.94, 3.12, 0.61]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial
            color="#7c4dff"
            depthWrite={false}
            opacity={0.032}
            transparent
          />
        </mesh>

        <mesh position={[-0.12, 0.1, -0.08]} scale={[1.28, 3.72, 0.72]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial
            color="#0fb8d4"
            depthWrite={false}
            opacity={0.012}
            transparent
          />
        </mesh>
      </group>
    </Float>
  );
}

export function AscendScene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      <div className="monolith-fallback" />
      <Canvas
        camera={{ fov: 38, position: [0, 0.04, 7.4] }}
        dpr={[1, 1.65]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <fog attach="fog" args={["#030304", 6.5, 15]} />
        <ambientLight intensity={0.24} />
        <directionalLight color="#eff0f4" intensity={1.38} position={[-3, 4, 5]} />
        <pointLight color="#6f42d8" intensity={11} position={[2.9, 1.4, 4.2]} />
        <pointLight color="#7bc8d7" intensity={2.2} position={[-3.6, -0.8, 3.4]} />
        <pointLight color="#ffffff" intensity={2.4} position={[0, 3.8, 2.2]} />
        <ObsidianMonolith />
      </Canvas>
    </div>
  );
}
