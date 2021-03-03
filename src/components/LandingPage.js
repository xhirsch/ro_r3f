import * as THREE from "three";
import React, { Suspense } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import styled from "styled-components";

import {
  FlyControls,
  OrbitControls,
  softShadows,
  Text,
} from "@react-three/drei";

import img_floor from "../images/CalibrationFloorDiffuse.jpg";
import Model from "./Figures_for_web";

softShadows();

const Wrapper = styled.div`
  height: 100vh;
  @media (max-width: 850px) {
    height 80vh;
  }
`;

const Floor = () => {
  const texture = useLoader(THREE.TextureLoader, img_floor);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  const repeatValue = 6;
  texture.repeat.x = repeatValue;
  texture.repeat.y = repeatValue;
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[75, 75]} />
      <shadowMaterial attach="material" opacity={0.3} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};

const ShadowFloor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[75, 75]} />
      <shadowMaterial attach="material" opacity={0.7} />
    </mesh>
  );
};

const LandingPage = () => {
  return (
    <Wrapper>
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [-15, 20, 0], fov: 50 }}
      >
        {/* <Camera position={[-10, 3, 0]} /> */}
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
        <Text
          position={[-2, 5.5, 0]}
          color="black"
          rotation={[0, Math.PI / -2, 0]}
          fontSize={0.5}
          maxWidth={8.01}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={"justify"}
        >
          Random Orchestra is the audio- visual vision of media artist Xaver
          Hirsch and music producer Oliver Gehrmann, that unites atmospher- ical
          electronic music with sophis- ticated visualization. Influenced by
          artists like Apparat, Tokimonsta and Alva Noto, they find their home
          in the genre-bending twilight of abstract hip-hop, ambient, elec-
          tronic music and organic visual weirdness. They focus on a close link
          between live visualizations through recordings from the mi- croscope,
          3D renderings and cre- ative coding, and music char- acterised by
          dreamy synthesizers, multi-layered organic beats and field recordings.
        </Text>
        <Suspense fallback={null}>
          <Model rotation={[0, -Math.PI / 2, 0]} scale={[2, 2, 2]}></Model>
          <Floor />
          <ShadowFloor />
        </Suspense>
        <axesHelper args={[10]} />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          minDistance={3}
          maxDistance={35}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2 - 0.1}
          target={[0, 0, 0]}
        />
        <FlyControls movementSpeed={8} />
        <fog attach="fog" args={["white", 20, 50]} />
      </Canvas>
    </Wrapper>
  );
};

export default LandingPage;
