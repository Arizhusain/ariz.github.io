import {
  faMailBulk,
  faMap,
  faMapLocationDot,
  faMapPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import PortfolioLogo from "../assets/logo.png";
import styleConstants from "../Common/StyleConstants";
import StyleConstants from "../Common/StyleConstants";

const Contact = () => {
  const ContactContainer = styled.div`
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f0f0;
    flex-direction: column;
  `;
  const ContactWrapper = styled.div`
    display: flex;
    width: 70%;
    height: 70%;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
  `;
  const SupportContainer = styled.div`
    width: 50%;
  `;
  const ContactList = styled.div`
    width: 100%;
  `;
  const ContactListItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 10px;
  `;
  const ItemIcon = styled.div`
    background-color: #c8c35347;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const ItemIconDesc = styled.p`
    margin-left: 2rem;
    font-size: 1rem;
    font-weight: 900;
  `;
  const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 50%;
    width: 50%;
  `;
  const AboutInput = styled.input`
    border: none;
    height: 2rem;
    width: 25rem;
    border-radius: 2rem;
    padding: 1rem;
    margin-bottom: 2rem;
  `;
  const Button = styled.button`
    border: none;
    background: ${styleConstants.light.blackColor};
    color: white;
    min-height: 3rem;
    width: 10rem;
    border-radius: 1rem;
    font-size: large;
    font-weight: 900;
  `;
  const TextWrapper = styled.section`
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;
  const TextTitle = styled.h1`
    font-weight: 900;
    font-size: 3rem;
  `;
  const TextDesc = styled.p``;

  return (
    <>
      <ContactContainer id="contact">
        <TextWrapper>
          <TextTitle>Lets discuss your project</TextTitle>
          <TextDesc>
            Get in touch always available for freelancing if the right project
            comes along with me.
          </TextDesc>
        </TextWrapper>
        <ContactWrapper>
          <SupportContainer>
            <ContactList>
              <ContactListItem>
                <ItemIcon>
                  <FontAwesomeIcon icon={faMap} />
                </ItemIcon>
                <ItemIconDesc>Dharwad, Karnataka, India</ItemIconDesc>
              </ContactListItem>
              <ContactListItem>
                <ItemIcon>
                  <FontAwesomeIcon icon={faMailBulk} />
                </ItemIcon>
                <ItemIconDesc>arifhusainsoudagar01@gmail.com</ItemIconDesc>
              </ContactListItem>
              <ContactListItem>
                <ItemIcon>
                  <FontAwesomeIcon icon={faPhone} />
                </ItemIcon>
                <ItemIconDesc>+91-7358236715</ItemIconDesc>
              </ContactListItem>
            </ContactList>
          </SupportContainer>
          <AboutContainer>
            <AboutInput type="text" placeholder="Name" />
            <AboutInput type="email" placeholder="Email" />
            <AboutInput type="number" placeholder="Phone" />
            <Button>Submit</Button>
          </AboutContainer>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
