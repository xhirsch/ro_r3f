import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Sky } from "@react-three/drei";

const Monolith = () => {
  return (
    <mesh position={[0, 2, 0]}>
      <boxBufferGeometry args={[0.25, 4, 2.25]} />
      <meshStandardMaterial
        attach="material"
        color="green"
        roughness={0.1}
        metalness={1}
      />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas camera={{ fov: 35 }}>
        <OrbitControls />
        <ambientLight />
        <Sky
          turbidity={20}
          azimuth={0}
          rayleigh={0.7}
          mieCoefficient={0.05}
          mieDirectionalG={0.7}
          inclination={0.5}
        />
        <Monolith />
        <axesHelper args={[10]} />
        <gridHelper />
      </Canvas>
    </>
  );
}

export default App;
