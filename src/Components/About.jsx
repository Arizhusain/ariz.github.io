import React from "react";
import styled from "styled-components";
import styleConstants from "../Common/StyleConstants";

const About = () => {
  const AboutContainer = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f0f0;
  `;
  const AboutWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
  `;
  const AboutHeading = styled.h1`
    font-size: 3rem;
    font-weight: 900;
    color: ${styleConstants.light.greenColor};
  `;
  const AboutParagraph = styled.p`
    font-size: 1.2rem;
    text-align: center;
    color: ${styleConstants.light.blackColor};
  `;
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <AboutHeading>About Me</AboutHeading>
          <AboutParagraph>
            I'm a React developer, responsible for developing and implementing
            user interfaces (UIs) and components using React, a front-end
            JavaScript library.
          </AboutParagraph>
          <AboutParagraph>
            Having high-level of expertise using React in maintaining UIs for
            web and mobile apps. Deep understanding of all stages of the
            software development life cycle.
          </AboutParagraph>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
