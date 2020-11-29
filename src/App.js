import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Sky, PointerLockControls, Stars } from "@react-three/drei";
import { useGLTF } from "@react-three/drei/useGLTF";
import { Physics } from "@react-three/cannon";
import Ground from "./components/Ground";
import Player from "./components/Player";

const Model = () => {
  const gltf = useGLTF("/stage.gltf", true);
  return <primitive object={gltf.scene} dispose={null} />;
};

function App() {
  return (
    <>
      <Canvas shadowMap gl={{ alpha: false }} camera={{ fov: 35 }}>
        {/* <Sky sunPosition={[-100, 0, -10]} /> */}
        <Stars fade={true} />
        <ambientLight intensity={0.05} />
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
        <Physics gravity={[0, -30, 0]}>
          <Suspense fallback={null}>
            <mesh position={[0, 0, 0]}>
              <Model />
            </mesh>
          </Suspense>

          <Ground />
          <Player />
        </Physics>
        <PointerLockControls />
      </Canvas>
    </>
  );
}

export default App;
