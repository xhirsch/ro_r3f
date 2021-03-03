import * as THREE from "three";
import { Html, OrbitControls, Environment } from "@react-three/drei";
import React, { Suspense, useEffect } from "react";
import { Canvas, useLoader, useThree } from "react-three-fiber";
import styled from "styled-components";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { HDRCubeTextureLoader } from "three/examples/jsm/loaders/HDRCubeTextureLoader";
import img from "../images/cover_inhale.jpg";

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledCanvas = styled(Canvas)`
  position: absolute;
  left: 0;
  top: 0;
`;

const IFrameOuter = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IFrameInner = styled.div`
  position: absolute;
  // border: 2px solid black;
`;

const embeddedCode = {
  bandcamp:
    '<iframe style="border: 0; width: 350px; height: 575px;" src="https://bandcamp.com/EmbeddedPlayer/album=1607202185/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/" seamless><a href="https://ouerlive.bandcamp.com/album/final-days-ep">Final Days EP by OUER</a></iframe>',
};

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

const Bandcamp = () => {
  const texture = useLoader(THREE.TextureLoader, img);
  return (
    <Wrapper>
      <StyledCanvas>
        <mesh>
          <planeBufferGeometry attach="geometry" args={[10, 10]} />
          <meshBasicMaterial attach="material" map={texture} />
          {/* <Html>
            <IFrameOuter>
              <IFrameInner>
                <Iframe iframe={embeddedCode["bandcamp"]} allow="autoplay" />
              </IFrameInner>
            </IFrameOuter>
          </Html> */}
        </mesh>
        <Suspense fallback={null}>
          <Environment
            background={true}
            files={[
              "negx.jpg",
              "negyjpg",
              "negz.jpg",
              "posx.jpg",
              "posy.jpg",
              "posz.jpg",
            ]}
            path={"/hdr/"}
          />
          <mesh>
            <torusKnotBufferGeometry args={[1, 0.5, 128, 32]} />
            <meshStandardMaterial metalness={1} roughness={0} />
          </mesh>
        </Suspense>
        <OrbitControls enableZoom={false} />
      </StyledCanvas>
    </Wrapper>
  );
};

export default Bandcamp;
