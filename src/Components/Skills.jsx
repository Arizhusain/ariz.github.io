import React from "react";
import styled from "styled-components";
import styleConstants from "../Common/StyleConstants";
import HTML5 from "../assets/html.png";
import CSS3 from "../assets/css3.png";
import JavaScript from "../assets/js.png";
import ReactLogo from "../assets/react.png";
import Redux from "../assets/redux.png";
import RestApi from "../assets/restapi.png";

const Skills = () => {
  const SkillContainer = styled.div`
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 400px) {
      height: 70vh;
    }
  `;
  const SkillWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 70%;
  `;
  const SkillHeading = styled.h1`
    font-size: 3rem;
    font-weight: 900;
    color: ${styleConstants.light.greenColor};
  `;
  const SkillListWrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @media only screen and (max-width: 400px) {
      flex-wrap: wrap;
      padding: 1rem;
    }
  `;
  const SkillList = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    list-style: none;
    @media only screen and (max-width: 400px) {
      flex-wrap: wrap;
      margin-bottom: 1rem;
    }
  `;
  const SlillImage = styled.img`
    height: 100px;
    width: 100px;
  `;
  const SkillDescription = styled.p`
    display: none;
  `;
  return (
    <>
      <SkillContainer id="skills">
        <SkillWrapper>
          <SkillHeading>Skills</SkillHeading>
          <SkillListWrapper>
            <SkillList>
              <SlillImage src={HTML5} />
              <SkillDescription>HTML</SkillDescription>
            </SkillList>
            <SkillList>
              <SlillImage src={CSS3} />
              <SkillDescription>CSS</SkillDescription>
            </SkillList>
            <SkillList>
              <SlillImage src={JavaScript} />
              <SkillDescription>JavaScript</SkillDescription>
            </SkillList>
            <SkillList>
              <SlillImage src={ReactLogo} />
              <SkillDescription>React</SkillDescription>
            </SkillList>
            <SkillList>
              <SlillImage src={Redux} />
              <SkillDescription>Redux</SkillDescription>
            </SkillList>
            <SkillList>
              <SlillImage src={RestApi} />
              <SkillDescription>REST API</SkillDescription>
            </SkillList>
          </SkillListWrapper>
        </SkillWrapper>
      </SkillContainer>
    </>
  );
};

export default Skills;
