import * as THREE from "three";
import React, { Suspense, useRef, useEffect, useCallback } from "react";
import { Canvas, useLoader, useFrame, useThree } from "react-three-fiber";
import {
  FlyControls,
  OrbitControls,
  PointerLockControls,
  softShadows,
  Text,
} from "@react-three/drei";
import { a } from "@react-spring/three";
import Scroll from "./Scroll";

import img_floor from "../images/CalibrationFloorDiffuse.jpg";

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

function Camera(props) {
  const [y] = Scroll([-100, 150], { domTarget: window });
  const [x] = Scroll([-100, 2000], { domTarget: window });
  const ref = useRef();
  const { setDefaultCamera } = useThree();
  useEffect(() => void setDefaultCamera(ref.current), []);
  useFrame(() => ref.current.updateMatrixWorld());
  return (
    <a.perspectiveCamera
      ref={ref}
      {...props}
      position-y={y.to((y) => (y / 500) * 25)}
      // position-x={x.to((x) => (x / 500) * 25)}
      rotation-y={x.to((x) => (x / 1000) * Math.PI * 5)}
    />
  );
}

const Floor = () => {
  const texture = useLoader(THREE.TextureLoader, img_floor);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  const repeatValue = 10;
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
        camera={{ position: [-15, 10, 0], fov: 50 }}
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
        <Monolith />
        <Text
          position={[2, 4, 0]}
          color="black"
          rotation={[0, Math.PI / -2, 0]}
          fontSize={0.5}
          maxWidth={10}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={"left"}
        >
          Random Orchestra is the vision of media artist Xaver Hirsch and music
          producer Oliver Gehrmann, that unites atmospherical electronic music
          with sophisticated visualization. They blend organic textures with
          melancholic melodies, dreamy pads with distorted percussions and dark
          pop layers to create a cinematic utopia, both visual and auditory.
          Influenced by artists like Shlohmo, Bonobo, Moderat and Mount Kimbie
          they search for their own place within the genre-bending twilight of
          abstract hip-hop, ambient, electronic music and organic visual
          weirdness.
        </Text>
        <Suspense fallback={null}>
          <Floor />
          <ShadowFloor />
        </Suspense>
        <axesHelper args={[10]} />
        {/* <FlyControls />
        <PointerLockControls /> */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          minDistance={3}
          maxDistance={25}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2 - 0.1}
        />
        <fog attach="fog" args={["white", 5, 80]} />
      </Canvas>
    </>
  );
};

export default LandingPage;
