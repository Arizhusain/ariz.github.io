import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import styleConstants from "../Common/StyleConstants";
import {
  faTwitter,
  faFacebook,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  const SocialContainer = styled.div`
    position: fixed;
    box-shadow: 0px 0px 5px;
    width: 3rem;
    right: 0;
    top: 40vh;
  `;
  const SocialWrapper = styled.div`
    background-color: ${styleConstants.light.yellowColor};
  `;
  const SocialList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem 0;
  `;
  const SocialListItem = styled.div`
    padding: 10px;
    cursor: pointer;
  `;
  return (
    <>
      <SocialContainer>
        <SocialWrapper>
          <SocialList>
            <SocialListItem>
              <FontAwesomeIcon icon={faTwitter} />
            </SocialListItem>
            <SocialListItem>
              <FontAwesomeIcon icon={faFacebook} />
            </SocialListItem>
            <SocialListItem>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </SocialListItem>
            <SocialListItem>
              <FontAwesomeIcon icon={faYoutube} />
            </SocialListItem>
          </SocialList>
        </SocialWrapper>
      </SocialContainer>
    </>
  );
};

export default Social;
