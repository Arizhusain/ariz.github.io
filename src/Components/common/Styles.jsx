import styled from "styled-components";
import variableConstants from "./constants";

export const Container = styled.div`
  font-family: 'Roboto';
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  background-color: ${variableConstants.whiteColor};
  width: 70vw;
  padding: 1rem;
`;
