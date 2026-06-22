"use client";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import React from "react";

function FloatingShape() {
  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.8}>
      <mesh>
        <torusKnotGeometry args={[1, 0.25, 128, 32]} />
        <MeshDistortMaterial 
          color="#dcdcdc" 
          speed={3} 
          distort={0.2} 
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none opacity-20">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <FloatingShape />
      </Canvas>
    </div>
  );
}