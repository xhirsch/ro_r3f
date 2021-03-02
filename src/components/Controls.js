import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  height: 50px;
  width: 100%;
  background: gold;
  position: fixed;
  left: 0;
  bottom: 50px;

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
          <List>One finger for zoom</List>
        </ContentLeft>
        <ContentRight></ContentRight>
      </Content>
    </Wrapper>
  );
};

export default Footer;
