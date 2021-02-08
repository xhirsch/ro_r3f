import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, Sky, softShadows } from "@react-three/drei";

softShadows();

const Monolith = () => {
  const mesh = useRef(null);
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh castShadow ref={mesh} position={[0, 2, 0]}>
      <boxBufferGeometry attach="geometry" args={[0.25, 4, 2.25]} />
      <meshStandardMaterial attach="material" color="yellow" />
    </mesh>
  );
};

const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <shadowMaterial attach="material" opacity={0.3} />
    </mesh>
  );
};

const LandingPage = () => {
  return (
    <>
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [-10, 5, 0], fov: 50 }}
      >
        <OrbitControls autoRotate={true} enablePan={false} enableZoom={false} />
        <directionalLight
          castShadow
          position={[-5, 10, 0]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <ambientLight intensity={0.3} />
        {/* <Sky
          turbidity={20}
          azimuth={0}
          rayleigh={0.7}
          mieCoefficient={0.05}
          mieDirectionalG={0.7}
          inclination={0.5}
        /> */}
        <Monolith />
        <Floor />
        <axesHelper args={[10]} />
        <gridHelper />
      </Canvas>
    </>
  );
};

export default LandingPage;
