import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import PortfolioLogo from "../assets/logo.png";
import styleConstants from "../Common/StyleConstants";
import StyleConstants from "../Common/StyleConstants";

const Header = () => {
  const Container = styled.div`
    background-color: ${StyleConstants.light.whiteColor};
    background-image: linear-gradient(
      to right,
      ${StyleConstants.light.whiteColor},
      ${StyleConstants.light.greenColor}
    );
    position: sticky;
    top: 0;
    display: flex;
    box-shadow: 0px 0px 10px;
    z-index: 1;
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
    @media only screen and (max-width: 400px) {
      display: none;
    }
  `;
  const SingleLink = styled.a`
    text-decoration: none;
    font-weight: bold;
    color: ${styleConstants.light.whiteColor};
    &:hover {
      color: ${styleConstants.light.yellowColor};
    }
  `;
  const HamburgerMenu = styled.div`
    text-align: right;
    @media only screen and (min-width: 401px) {
      display: none;
    }
  `;
  const MenuContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: ${styleConstants.light.greenColor};
    z-index: 1;
    top:68px;
  `;
  const MenuList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${styleConstants.light.blackColor};
  `;
  const MenuListItem = styled.a`
    margin: 1rem;
    text-decoration: none;
    cursor: pointer;
    color: ${styleConstants.light.whiteColor};
    font-size: 1rem;
    font-weight: 900;
    width: 100%;
    text-align: center;
  `;

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
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
            <HamburgerMenu>
              <>
                {open ? (
                  <FontAwesomeIcon icon={faX} onClick={handleClick} inverse />
                ) : (
                  <FontAwesomeIcon
                    icon={faBars}
                    onClick={handleClick}
                    inverse
                  />
                )}
              </>
            </HamburgerMenu>
          </LinkWrapper>
        </Wrapper>
      </Container>
      <>
        {open && (
          <MenuContainer>
            <MenuList>
              <MenuListItem href="#home" onClick={handleClick}>Home</MenuListItem>
              <MenuListItem href="#about" onClick={handleClick}>About</MenuListItem>
              <MenuListItem href="#skills" onClick={handleClick}>Skills</MenuListItem>
              <MenuListItem href="#resume" onClick={handleClick}>Resume</MenuListItem>
              <MenuListItem href="#contact" onClick={handleClick}>Contact</MenuListItem>
            </MenuList>
          </MenuContainer>
        )}
      </>
    </>
  );
};

export default Header;
