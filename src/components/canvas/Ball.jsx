import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef();

  // Add continuous slow rotation animation
  useFrame((state) => {
    if (meshRef.current) {
      // Simple left-right rotation on Y-axis only
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.8}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Front */}
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={0.8}
          map={decal}
          flatShading
        />
        {/* Back */}
        <Decal
          position={[0, 0, -1]}
          rotation={[Math.PI, 0, 0]}
          scale={0.8}
          map={decal}
          flatShading
        />
        {/* Top */}
        <Decal
          position={[0, 1, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.8}
          map={decal}
          flatShading
        />
        {/* Bottom */}
        <Decal
          position={[0, -1, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.8}
          map={decal}
          flatShading
        />
        {/* Left */}
        <Decal
          position={[-1, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.8}
          map={decal}
          flatShading
        />
        {/* Right */}
        <Decal
          position={[1, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.8}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          autoRotate={false}
          enablePan={false}
          enableRotate={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
