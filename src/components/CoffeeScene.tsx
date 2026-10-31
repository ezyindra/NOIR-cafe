import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Text, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Coffee Cup 3D Component
function CoffeeCup({ color = '#8B4513' }: { color?: string }) {
  const cupRef = useRef<THREE.Mesh>(null);
  const saucerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (cupRef.current && saucerRef.current) {
      cupRef.current.rotation.y = Math.sin(t * 0.3) * 0.3;
      saucerRef.current.rotation.y = Math.sin(t * 0.2) * 0.2;
    }
  });

  return (
    <group>
      <mesh ref={saucerRef} position={[0, -1.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[4, 4.5, 0.5, 32]} />
        <meshStandardMaterial color="#F5F5DC" roughness={0.3} metalness={0.1} />
      </mesh>

      <mesh ref={cupRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[3, 3.5, 5, 32]} />
        <meshStandardMaterial color={color} roughness={0.5} metalness={0.2} />
      </mesh>

      <mesh position={[0, 2.5, 0]}>
        <cylinderGeometry args={[3.2, 3.2, 0.3, 32]} />
        <meshStandardMaterial color="#E8D5B8" roughness={0.3} metalness={0.1} />
      </mesh>

      <mesh position={[3.5, 0, 0]}>
        <torusGeometry args={[2.5, 0.4, 16, 32, Math.PI]} />
        <meshStandardMaterial color={color} roughness={0.5} metalness={0.2} />
      </mesh>

      <mesh position={[0, 2.35, 0]}>
        <cylinderGeometry args={[2.8, 2.8, 0.5, 32]} />
        <meshStandardMaterial color="#3E2723" roughness={0.8} metalness={0} />
      </mesh>

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[Math.sin(i) * 1.5, 4.5, Math.cos(i) * 1.5]}>
            <cylinderGeometry args={[0.2, 0.1, 2, 8]} />
            <meshStandardMaterial color="#FFF" transparent opacity={0.3} />
          </mesh>
        ))}
      </Float>
    </group>
  );
}

function CoffeeParticles() {
  const particleRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particleRef.current) {
      particleRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      particleRef.current.rotation.z = state.clock.getElapsedTime() * 0.01;
    }
  });

  const particles = Array.from({ length: 500 }).map(() => ({
    position: [
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ],
    size: Math.random() * 0.2,
    color: Math.random() > 0.5 ? '#D4AF37' : '#8B4513',
  }));

  return (
    <points ref={particleRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={new Float32Array(particles.flatMap(p => p.position))}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#D4AF37"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function CoffeeScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 2, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['#0a0a0a']} />
      <ambientLight intensity={0.5} />
      <spotLight position={[5, 10, 7]} angle={0.5} penumbra={1} intensity={1000} castShadow />
      <spotLight position={[-5, 5, -5]} angle={0.3} penumbra={0.5} intensity={500} color="#D4AF37" />
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <CoffeeCup color="#5D4037" />
      </Float>
      <CoffeeParticles />
      <OrbitControls enableZoom={false} enablePan={false} minDistance={5} maxDistance={12} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
