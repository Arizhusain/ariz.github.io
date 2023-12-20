import React from "react";
import styled from "styled-components";
import PortfolioLogo from "../assets/logo.png";
import styleConstants from "../Common/StyleConstants";
import StyleConstants from "../Common/StyleConstants";

const Header = () => {
  const Container = styled.div`
    background-color: ${StyleConstants.light.whiteColor};
    background-image: linear-gradient(to right, ${StyleConstants.light.whiteColor}, ${StyleConstants.light.greenColor});
    position: sticky;
    top: 0;
    display: flex;
    box-shadow: 0px 0px 10px;
  `;
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 4rem;
    width: 100%;
  `;
  const LogoWrapper = styled.div`
    width: 30%;
  `;
  const Logo = styled.img`
    height: 2rem;
  `;
  const LinkWrapper = styled.div`
    width: 30%;
  `;
  const AnchorLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;
  const SingleLink = styled.a`
    text-decoration: none;
    font-weight: bold;
    color: ${styleConstants.light.whiteColor};
    &:hover {
      color: ${styleConstants.light.yellowColor};
    }
  `;
  return (
    <>
      <Container>
        <Wrapper>
          <LogoWrapper>
            <SingleLink href="/">
              <Logo src={PortfolioLogo} />
            </SingleLink>
          </LogoWrapper>
          <LinkWrapper>
            <AnchorLinks>
              <SingleLink href="#home">Home</SingleLink>
              <SingleLink href="#about">About</SingleLink>
              <SingleLink href="#skills">Skills</SingleLink>
              <SingleLink href="#resume">Resume</SingleLink>
              <SingleLink href="#contact">Contact</SingleLink>
            </AnchorLinks>
          </LinkWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Header;
