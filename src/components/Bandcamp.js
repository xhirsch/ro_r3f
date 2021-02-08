import { Html, OrbitControls } from "@react-three/drei";
import React from "react";
import { Canvas, useLoader } from "react-three-fiber";
import styled from "styled-components";
import { TextureLoader } from "three/src/loaders/TextureLoader";

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
  const cover = useLoader(TextureLoader, "textures/cover_diffuse.jpg");
  return (
    <Wrapper>
      <StyledCanvas>
        <mesh>
          <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
          <meshStandardMaterial map={cover} attach="material" />
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
