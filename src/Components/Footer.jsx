import React from "react";
import styled from "styled-components";
import styleConstants from "../Common/StyleConstants";

const Footer = () => {
  const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${styleConstants.light.greenColor};
    margin-top: 1rem;
  `;
  const FooterWrapper = styled.div`
    width: 70vw;
    height: 3rem;
    font-size: 1rem;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${styleConstants.light.whiteColor};
  `;
  const FooterTitle = styled.div``;
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTitle>All right reserved | Ariz</FooterTitle>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
