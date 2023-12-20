import React from "react";
import styled from "styled-components";
import resume from "../assets/resume.png";
import StyleConstants from "../Common/StyleConstants";

const Resume = () => {
  const ResumeContainer = styled.div`
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${StyleConstants.light.greenColor};
    flex-direction: column;
    @media only screen and (max-width: 400px) {
      height: 60vh;
    }
  `;
  const ResumeWrapper = styled.div`
    display: flex;
    width: 70%;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    @media only screen and (max-width: 400px) {
      padding: 0;
      width: 100%;
    }
  `;
  const TextWrapper = styled.section`
    padding: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media only screen and (max-width: 400px) {
      flex-direction: column;
    }
  `;
  const TextTitle = styled.h1`
    font-weight: 900;
    font-size: 3rem;
    color: white;
    @media only screen and (max-width: 400px) {
      font-size: 2rem;
    }
  `;
  const ResumeImage = styled.img`
    height: 10rem;
    width: 10rem;
    cursor: pointer;
  `;
  return (
    <>
      <ResumeContainer id="resume">
        <ResumeWrapper>
          <TextWrapper>
            <TextTitle>Download Resume</TextTitle>
            <ResumeImage src={resume} />
          </TextWrapper>
        </ResumeWrapper>
      </ResumeContainer>
    </>
  );
};

export default Resume;
