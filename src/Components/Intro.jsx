import styled from "styled-components";
import variableConstants from "./common/constants";
import profile from "../assets/image.png";
import { Container, Wrapper } from "./common/Styles";

const Intro = () => {
  const Section = styled.section`
    border-radius: 10px;
    margin-top: 2rem;
    background-color: ${variableConstants.greyColor};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const TextContainer = styled.section``;
  const Greet = styled.h1`
    font-size: 1.5rem;
    color: ${variableConstants.redColor};
    letter-spacing: 1px;
    width: 20ch;
  `;
  const Introduction = styled.h1`
    font-size: 1.5rem;
    color: ${variableConstants.whiteColor};
    width: 20ch;
    animation: typing 4s steps(20) infinite alternate,
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
  const Image = styled.img`
    width: 35vw;
  `;
  const Profession = styled.h2`
    color: ${variableConstants.greenColor};
  `;

  return (
    <Container>
      <Wrapper>
        <Section>
          <TextContainer>
            <Greet>Hi I'm</Greet>
            <Introduction>Arifhusain Soudagar</Introduction>
            <Profession>FE Developer</Profession>
            <Profession>Photographer</Profession>
            <Profession>UI Designer</Profession>
          </TextContainer>
          <Image src={profile}></Image>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Intro;
