import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Environment, ContactShadows, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Loading fallback
function Loader() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#d4af37" wireframe />
    </mesh>
  );
}

// Professional Coffee Cup with realistic shape
function CoffeeCup() {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, -0.5, 0]}>
        {/* Cup outer body - tapered shape */}
        <mesh position={[0, 1.5, 0]} castShadow>
          <cylinderGeometry args={[1.4, 1.1, 3, 32, 1, false]} />
          <meshStandardMaterial
            color="#FFFFFF"
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>

        {/* Cup rim - slightly flared */}
        <mesh position={[0, 3.1, 0]} castShadow>
          <torusGeometry args={[1.42, 0.12, 16, 32]} />
          <meshStandardMaterial color="#F5F5F5" roughness={0.2} metalness={0.15} />
        </mesh>

        {/* Cup inner wall */}
        <mesh position={[0, 1.6, 0]}>
          <cylinderGeometry args={[1.3, 1.0, 2.9, 32, 1, false]} />
          <meshStandardMaterial
            color="#D2B48C"
            roughness={0.7}
            metalness={0}
            side={THREE.BackSide}
          />
        </mesh>

        {/* Coffee liquid surface */}
        <mesh position={[0, 2.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[1.25, 32]} />
          <meshStandardMaterial
            color="#3E2723"
            roughness={0.1}
            metalness={0.2}
          />
        </mesh>

        {/* Coffee liquid foam pattern - latte art */}
        <mesh position={[0, 2.82, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.8, 32]} />
          <meshStandardMaterial
            color="#D4A574"
            roughness={0.3}
            metalness={0.1}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Cup handle - proper curved shape */}
        <mesh position={[1.65, 1.5, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]} castShadow>
          <torusGeometry args={[0.8, 0.18, 16, 32, Math.PI * 1.1]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.3} metalness={0.1} />
        </mesh>

        {/* Handle connector top */}
        <mesh position={[1.35, 2.3, 0]} castShadow>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.3} metalness={0.1} />
        </mesh>

        {/* Handle connector bottom */}
        <mesh position={[1.35, 0.7, 0]} castShadow>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.3} metalness={0.1} />
        </mesh>

        {/* Cup base plate / saucer */}
        <mesh position={[0, -0.3, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <cylinderGeometry args={[2.2, 2.2, 0.15, 32]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.25} metalness={0.15} />
        </mesh>

        {/* Saucer top surface */}
        <mesh position={[0, -0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[2.2, 32]} />
          <meshStandardMaterial color="#FAFAFA" roughness={0.2} metalness={0.1} />
        </mesh>

        {/* Saucer rim */}
        <mesh position={[0, -0.15, 0]}>
          <torusGeometry args={[2.1, 0.1, 16, 32]} />
          <meshStandardMaterial color="#E8E8E8" roughness={0.2} metalness={0.1} />
        </mesh>

        {/* Saucer center depression */}
        <mesh position={[0, -0.12, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[1.5, 32]} />
          <meshStandardMaterial color="#F0F0F0" roughness={0.3} metalness={0.1} />
        </mesh>

        {/* Coffee beans decoration on saucer */}
        {[0, 1, 2].map((i) => {
          const angle = (i / 3) * Math.PI * 2 + 0.5;
          const x = Math.cos(angle) * 1.7;
          const z = Math.sin(angle) * 1.7;
          return (
            <mesh key={i} position={[x, -0.05, z]} rotation={[Math.PI / 2, angle, 0.3]}>
              <capsuleGeometry args={[0.08, 0.18, 4, 8]} />
              <meshStandardMaterial color="#3E2723" roughness={0.8} metalness={0} />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}

// Animated steam
function Steam() {
  const steamRef = useRef<THREE.Points>(null);
  const particleCount = 50;

  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 0.8;
    positions[i * 3 + 1] = Math.random() * 2 + 3;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.8;
    velocities[i] = 0.01 + Math.random() * 0.02;
  }

  useFrame(() => {
    if (steamRef.current) {
      const posArray = steamRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3 + 1] += velocities[i];
        if (posArray[i * 3 + 1] > 6) {
          posArray[i * 3 + 1] = 3;
          posArray[i * 3] = (Math.random() - 0.5) * 0.8;
          posArray[i * 3 + 2] = (Math.random() - 0.5) * 0.8;
        }
      }
      steamRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={steamRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#FFFFFF"
        transparent
        opacity={0.3}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Floating coffee beans in background
function FloatingBeans() {
  const beansRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (beansRef.current) {
      beansRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={beansRef}>
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 4 + Math.random() * 3;
        const y = (Math.random() - 0.5) * 6;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              y,
              Math.sin(angle) * radius
            ]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          >
            <capsuleGeometry args={[0.12, 0.25, 4, 8]} />
            <meshStandardMaterial color="#5D4037" roughness={0.9} metalness={0} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function CoffeeScene() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '500px', background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)' }}>
      <Canvas
        shadows
        camera={{ position: [0, 3, 10], fov: 40 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<Loader />}>
          {/* Background color */}
          <color attach="background" args={['#0a0a0a']} />

          {/* Fog for depth */}
          <fog attach="fog" args={['#0a0a0a', 10, 25]} />

          {/* Main lighting */}
          <ambientLight intensity={0.4} color="#FFFFFF" />

          <directionalLight
            position={[5, 10, 5]}
            intensity={1.5}
            color="#FFFFFF"
            castShadow
            shadow-mapSize={[1024, 1024]}
          />

          {/* Warm accent lights */}
          <spotLight
            position={[-8, 8, 4]}
            angle={0.5}
            penumbra={0.8}
            intensity={200}
            color="#FFD700"
          />

          <spotLight
            position={[8, 6, -4]}
            angle={0.4}
            penumbra={0.6}
            intensity={150}
            color="#D4AF37"
          />

          {/* Fill lights */}
          <pointLight position={[4, 2, 6]} intensity={80} color="#FFECB3" />
          <pointLight position={[-4, 3, 4]} intensity={60} color="#8B4513" />

          {/* 3D Elements */}
          <CoffeeCup />
          <Steam />
          <FloatingBeans />

          {/* Contact shadows for grounding */}
          <ContactShadows
            position={[0, -0.5, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={4}
          />

          {/* Environment for reflections */}
          <Environment preset="studio" />

          {/* Camera controls */}
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={6}
            maxDistance={16}
            autoRotate
            autoRotateSpeed={0.6}
            target={[0, 1, 0]}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
