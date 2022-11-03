import styled from "styled-components";

export const SectionContainer = styled.section`
  width: ${({screenWidth}) => screenWidth}px;
  background-color: ${({theme}) => theme.lightBackground}80;
  justify-content: space-evenly;
  padding: ${({screenWidth}) => screenWidth * 0.01}px;
  margin-left: -30px;
`