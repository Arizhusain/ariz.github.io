import React from "react";
import styled from "styled-components";
import { Container, Wrapper } from "./common/Styles";
import logo from "../assets/logo.png";
import variableConstants from "./common/constants";

const Header = () => {
  const Header = styled.header`
    position: fixed;
    width: 70vw;
    height: 4rem;
    background: ${variableConstants.whiteColor};
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #00000038;
  `;
  const Logo = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    transform: rotate(-45deg);
  `;
  const Navbar = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
  `;
  const AnchorNav = styled.a`
    text-decoration: none;
    font-size: 13px;
    color: ${variableConstants.greyColor};
    cursor: pointer;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  `;
  return (
    <Container>
      <Wrapper>
        <Header>
          <AnchorNav href="/">
            <Logo src={logo} />
          </AnchorNav>
          <Navbar>
            <AnchorNav href="#">HOME</AnchorNav>
            <AnchorNav href="#">ABOUT</AnchorNav>
            <AnchorNav href="#">EXPERIENCE</AnchorNav>
            <AnchorNav href="#">CONTACT</AnchorNav>
            <AnchorNav href="#">RESUME</AnchorNav>
          </Navbar>
        </Header>
      </Wrapper>
    </Container>
  );
};

export default Header;
