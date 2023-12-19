import React from "react";
import styled from "styled-components";
import styleConstants from "../Common/StyleConstants";
import Avatar from "../assets/avatar.jpg";

const Home = () => {
  const Container = styled.div`
    background-color: ${styleConstants.light.whiteColor};
  `;
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${styleConstants.light.greenColor};
  `;
  const TextContainer = styled.div`
    padding-left: 10rem;
    display: flex;
    flex-direction: column;
  `;
  const Greet = styled.h1`
    color: ${styleConstants.light.yellowColor};
    font-size: 1.5rem;
  `;
  const DisplayName = styled.h1`
    color: ${styleConstants.light.whiteColor};
    font-size: 3rem;
    width: 20ch;
    animation: typing 2s steps(20) infinite alternate,
      blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    @keyframes typing {
      from {
        width: 0;
      }
    }

    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }
  `;
  const SkillsContainer = styled.div`
    height: 50px;
    overflow: hidden;
  `;
  const SkillList = styled.ul`
    animation: move 3s cubic-bezier(1, -0.27, 0, 1.51) infinite alternate;
    @keyframes move {
      0% {
        transform: translateY(-10px);
      }
      25% {
        transform: translateY(-65px);
      }
      100% {
        transform: translateY(-110px);
      }
    }
  `;
  const Skill = styled.li`
    color: ${styleConstants.light.yellowColor};
    font-size: 2rem;
    margin: 1rem;
  `;
  const ImageContainer = styled.img`
  width: 50%;
  height: auto;
  `;
  return (
    <>
      <Container>
        <Wrapper>
          <TextContainer>
            <Greet>Hey, I'm</Greet>
            <DisplayName>Arifhusain Soudagar</DisplayName>
            <SkillsContainer>
              <SkillList>
                <Skill>Photographer</Skill>
                <Skill>React Developer</Skill>
                <Skill>UI Developer</Skill>
              </SkillList>
            </SkillsContainer>
          </TextContainer>
          <ImageContainer src={Avatar} />
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
