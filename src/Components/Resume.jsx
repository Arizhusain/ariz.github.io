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
  `;
  const ResumeWrapper = styled.div`
    display: flex;
    width: 70%;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
  `;
  const TextWrapper = styled.section`
    padding: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;
  const TextTitle = styled.h1`
    font-weight: 900;
    font-size: 3rem;
    color: white;
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
