import React from "react";
import BandcampPlayer from "react-bandcamp";
import styled from "styled-components";

const Wrapper = styled.section`
  // background-color: yellow;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bandcamp = () => {
  return (
    <Wrapper>
      {/* <h1>Bandcamp</h1> */}
      <BandcampPlayer
        album="1607202185"
        // width="100%"
        height="300px"
        title="1" // Must be unique in DOM. Default Bandcamp player
        size="large" // Either small or large. Default: large
        bgcol="ffffff" // The hexcode of the background colour. Default: ffffff
        linkcol="0687f5" // The hexcode of the link text colour. Default: 0687f5
        merch="null" // ID of merch to link to. Ignored if size is not large. Default: null
        tracklist="true" // Whether to show tracklist under the player. Default: true
        artwork="small" // Size of artwork to show. big or small. Default big
      />
    </Wrapper>
  );
};

export default Bandcamp;
