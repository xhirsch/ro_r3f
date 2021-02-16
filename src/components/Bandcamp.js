import * as THREE from "three";
import { Html, OrbitControls } from "@react-three/drei";
import React from "react";
import { Canvas, useLoader } from "react-three-fiber";
import styled from "styled-components";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import img from "../images/cover_diffuse.jpg";

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  border: 2px solid red;
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
  border: 2px solid black;
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
          <planeBufferGeometry attach="geometry" args={[5, 5]} />
          <meshBasicMaterial attach="material" map={texture} />
          <Html>
            <IFrameOuter>
              <IFrameInner>
                <Iframe iframe={embeddedCode["bandcamp"]} allow="autoplay" />
              </IFrameInner>
            </IFrameOuter>
          </Html>
        </mesh>
        <OrbitControls enableZoom={false} />
      </StyledCanvas>
    </Wrapper>
  );
};

export default Bandcamp;
