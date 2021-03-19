import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  height: 50px;
  width: 100%;
  background: #ffee7d;
  position: fixed;
  left: 0;
  bottom: 0;

  @media (max-width: 850px) {
    position: relative;
    height: 100vh;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  font-size: 0.85rem;
  text-transform: uppercase;

  @media (max-width: 850px) {
    height: 100%;
    flex-direction: column;
    flex-flow: space-between;
    font-size: 2rem;
  }
`;

const List = styled.li`
  list-style: none;
  margin-left: 1rem;
`;

const ContentLeft = styled.div`
  width: 75%;
  display: flex;

  @media (max-width: 850px) {
    font-size: 2.5rem;
    width: 100%;
    flex-direction: column;
  }
`;
const ContentRight = styled.div`
  @media (max-width: 850px) {
    padding-left: 1rem;
    font-size: 1rem;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <ContentLeft>
          <List>&#8595;</List>
          <List>
            <a
              href="https://www.instagram.com/random_orchestra/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </List>
          <List>
            <a
              href="https://www.youtube.com/channel/UCWJH-zDBrnO95iQqASi6h9A"
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>
          </List>
          <List>
            <a
              href="https://soundcloud.com/random-orchestra"
              target="_blank"
              rel="noreferrer"
            >
              Soundcloud
            </a>
          </List>
          <List>
            <a
              href="https://randomorchestra.bandcamp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Bandcamp
            </a>
          </List>
          <List>&#8595;</List>
          <List>
            <a
              href="https://www.dropbox.com/s/yekax4xxky42yce/PressKit.zip?dl=0"
              target="_blank"
              rel="noreferrer"
            >
              PressKit
            </a>
          </List>
        </ContentLeft>
        <ContentRight>&copy;2021 Random Orchestra</ContentRight>
      </Content>
    </Wrapper>
  );
};

export default Footer;
