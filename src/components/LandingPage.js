import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { OrbitControls, softShadows, Stats } from "@react-three/drei";
import img_floor from "../images/uvgrid.png";

softShadows();

const Monolith = () => {
  const mesh = useRef(null);
  return (
    <mesh castShadow ref={mesh} position={[0, 2, 0]}>
      <boxBufferGeometry attach="geometry" args={[0.25, 4, 2.25]} />
      <meshStandardMaterial attach="material" color="yellow" />
    </mesh>
  );
};

const Floor = () => {
  const texture = useLoader(THREE.TextureLoader, img_floor);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  const repeatValue = 25;
  texture.repeat.x = repeatValue;
  texture.repeat.y = repeatValue;
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[150, 150]} />
      <shadowMaterial attach="material" opacity={0.3} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};

const ShadowFloor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[150, 150]} />
      <shadowMaterial attach="material" opacity={0.7} />
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
        <Stats />
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
        <Monolith />
        <Suspense fallback={null}>
          <Floor />
          <ShadowFloor />
        </Suspense>
        <axesHelper args={[10]} />
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={0.5}
          rotateSpeed={0.2}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.5}
        />
        <fog attach="fog" args={["white", 5, 20]} />
      </Canvas>
    </>
  );
};

export default LandingPage;
