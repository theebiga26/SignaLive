import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, useScroll, Float, Sphere } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

// The Plexus Network that lives INSIDE the Brain Sphere
const InnerNeuralNetwork = ({ particleCount = 150, maxDistance = 2.5, radius = 3.5 }) => {
  const pointsRef = useRef();
  const linesRef = useRef();

  const [positions, lines] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = radius * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }

    const linePositions = [];
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < maxDistance * maxDistance) {
          linePositions.push(
            pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2],
            pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]
          );
        }
      }
    }
    return [pos, new Float32Array(linePositions)];
  }, [particleCount, maxDistance, radius]);

  useFrame((state) => {
    if (pointsRef.current && linesRef.current) {
      const time = state.clock.getElapsedTime();
      pointsRef.current.rotation.y = time * 0.1;
      pointsRef.current.rotation.z = time * 0.05;
      linesRef.current.rotation.y = time * 0.1;
      linesRef.current.rotation.z = time * 0.05;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.1} color="#ffffff" transparent opacity={0.8} sizeAttenuation={true} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={lines.length / 3} array={lines} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#38bdf8" transparent opacity={0.3} />
      </lineSegments>
    </group>
  );
};

// Particles orbiting the Brain Sphere
const OrbitingParticles = () => {
  const pointsRef = useRef();
  
  const positions = useMemo(() => {
    const pos = new Float32Array(400 * 3);
    for (let i = 0; i < 400; i++) {
      // Orbit radius slightly larger than the sphere (4.5 to 8)
      const r = 4.5 + Math.random() * 3.5;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#7dd3fc" transparent opacity={0.6} sizeAttenuation={true} />
    </points>
  );
};

// The Main Holographic Brain Sphere Component
const BrainSphere = () => {
  const groupRef = useRef();
  const scroll = useScroll();

  useFrame((state) => {
    if (groupRef.current) {
      // Gently bob up and down
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
      
      // Rotate slowly based on scroll so the brain reacts to the user
      groupRef.current.rotation.y = scroll.offset * Math.PI * 2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -5]}>
      {/* Outer Holographic Wireframe Shell */}
      <Sphere args={[4, 64, 64]}>
        <meshStandardMaterial 
          color="#0ea5e9"
          emissive="#0369a1"
          emissiveIntensity={0.5}
          wireframe={true}
          transparent={true}
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </Sphere>
      
      {/* Inner Glowing Glass Core */}
      <Sphere args={[3.9, 32, 32]}>
        <meshPhysicalMaterial 
          color="#bae6fd"
          emissive="#0284c7"
          emissiveIntensity={0.2}
          transmission={0.9} // Glass effect
          opacity={1}
          metalness={0.1}
          roughness={0.1}
          ior={1.5}
          thickness={0.5}
          transparent={true}
        />
      </Sphere>

      {/* Internal Neural Network */}
      <InnerNeuralNetwork />
      
      {/* Orbiting Data Particles */}
      <OrbitingParticles />
    </group>
  );
};

const SpaceScene = () => {
  return (
    <>
      {/* Intense Center Light matching the image's "spark" where hands touch */}
      <pointLight position={[0, 0, -1]} intensity={8} color="#ffffff" distance={15} />
      
      {/* General ambient and directional lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#38bdf8" />
      
      {/* Warm orange backlight matching the right side of the user's image */}
      <directionalLight position={[-5, -5, -5]} intensity={1.5} color="#f97316" /> 

      {/* Deep space data field (Background glowing dust) */}
      <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={0.5} />

      {/* The Centerpiece */}
      <BrainSphere />

      {/* Intense Glowing Bloom for the Neural Energy */}
      <EffectComposer>
        <Bloom 
          luminanceThreshold={0.15} 
          luminanceSmoothing={0.9} 
          height={300} 
          intensity={2.5} 
        />
      </EffectComposer>
    </>
  );
};

export default SpaceScene;
