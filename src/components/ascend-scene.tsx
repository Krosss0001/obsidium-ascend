"use client";

import { Float, Html, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";
import { MathUtils } from "three";

type AscendSceneProps = {
  labels: readonly string[];
};

const labelPositions: Array<[number, number, number]> = [
  [0.08, 1.42, 0.2],
  [2.5, 1.14, 0.28],
  [0.04, -0.18, 0.24],
  [2.58, -0.3, 0.28],
  [0.6, -1.64, 0.34],
  [2.42, -1.52, 0.34],
];

function ReactorLabels({ labels }: AscendSceneProps) {
  return (
    <>
      {labels.map((label, index) => (
        <Html
          center
          className="reactor-label"
          distanceFactor={7.5}
          key={label}
          position={labelPositions[index] ?? [0, 0, 0]}
        >
          <span>{label}</span>
        </Html>
      ))}
    </>
  );
}

function ObsidianCore({ labels }: AscendSceneProps) {
  const group = useRef<Group>(null);
  const crystal = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!group.current) {
      return;
    }

    const baseX = state.viewport.width > 7 ? 1.02 : 0;

    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x = MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.22,
      0.045,
    );
    group.current.position.x = MathUtils.lerp(
      group.current.position.x,
      baseX + state.pointer.x * 0.22,
      0.04,
    );
    group.current.position.y = MathUtils.lerp(
      group.current.position.y,
      state.pointer.y * 0.1,
      0.04,
    );

    if (crystal.current) {
      crystal.current.rotation.z -= delta * 0.08;
    }
  });

  return (
    <Float floatIntensity={1.1} rotationIntensity={0.18} speed={1.05}>
      <group ref={group}>
        <mesh scale={1.85}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial
            color="#8f4dff"
            depthWrite={false}
            opacity={0.08}
            transparent
          />
        </mesh>

        <mesh ref={crystal}>
          <icosahedronGeometry args={[1.08, 2]} />
          <meshStandardMaterial
            color="#07070a"
            emissive="#141025"
            emissiveIntensity={0.8}
            metalness={0.94}
            roughness={0.18}
          />
        </mesh>

        <mesh scale={1.14}>
          <icosahedronGeometry args={[1.08, 2]} />
          <meshStandardMaterial
            color="#c9d5df"
            emissive="#22d3ee"
            emissiveIntensity={0.16}
            metalness={0.8}
            roughness={0.24}
            wireframe
          />
        </mesh>

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.78, 0.014, 12, 160]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={0.85}
            metalness={0.7}
            roughness={0.16}
          />
        </mesh>

        <mesh rotation={[0.54, 0.1, -0.38]}>
          <torusGeometry args={[2.28, 0.012, 12, 160]} />
          <meshStandardMaterial
            color="#8f4dff"
            emissive="#8f4dff"
            emissiveIntensity={0.72}
            metalness={0.68}
            roughness={0.18}
          />
        </mesh>

        <mesh rotation={[1.05, -0.26, 0.62]}>
          <torusGeometry args={[2.86, 0.007, 12, 160]} />
          <meshStandardMaterial
            color="#66ff99"
            emissive="#66ff99"
            emissiveIntensity={0.28}
            metalness={0.55}
            roughness={0.28}
          />
        </mesh>

        <mesh rotation={[0.1, -0.2, 0.86]}>
          <torusGeometry args={[3.22, 0.0045, 8, 192]} />
          <meshStandardMaterial
            color="#d9e2ea"
            emissive="#9aa8b4"
            emissiveIntensity={0.18}
            metalness={0.92}
            roughness={0.12}
          />
        </mesh>

        <ReactorLabels labels={labels} />
      </group>
    </Float>
  );
}

export function AscendScene({ labels }: AscendSceneProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      <Canvas
        camera={{ fov: 42, position: [0, 0.18, 7.25] }}
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <fog attach="fog" args={["#050507", 7, 18]} />
        <ambientLight intensity={0.42} />
        <directionalLight color="#e6edf4" intensity={1.24} position={[3, 4, 5]} />
        <pointLight color="#22d3ee" intensity={24} position={[-3.4, 1.8, 3]} />
        <pointLight color="#8f4dff" intensity={18} position={[3.4, 1.4, 4]} />
        <pointLight color="#66ff99" intensity={7} position={[0, -3.2, 2.6]} />
        <Stars
          count={900}
          depth={19}
          factor={2.45}
          fade
          radius={35}
          saturation={0.4}
          speed={0.16}
        />
        <ObsidianCore labels={labels} />
      </Canvas>
    </div>
  );
}
