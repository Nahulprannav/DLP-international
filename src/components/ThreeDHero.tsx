import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import { motion } from 'motion/react';

function AnimatedSphere() {
    const sphereRef = useRef<any>(null);

    useFrame(({ clock }) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
            sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
            <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                    color="#4f46e5"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <AnimatedSphere />
        </>
    );
}

export function ThreeDHero() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 -z-10"
        >
            <Canvas camera={{ position: [0, 0, 5] }}>
                <Scene />
            </Canvas>
        </motion.div>
    );
}
