import styled, { keyframes } from "styled-components";
import { DefaultTheme } from "../../../theme/themes";
import image from "../../../assets/imgs/trees.jpg";
import { fadeIn } from 'react-animations';

const fadeAnimation = keyframes`${fadeIn}`;

export const ContainerMain = styled.div`
  height: 100vh;
  width: 100%;
  z-index: 10;
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(13, 13, 13, 1) 5%,
    transparent 85%,
    rgba(13, 13, 13, 1) 100%
  ),  url(${image});
`;

ContainerMain.defaultProps = {
  theme: DefaultTheme,
};

export const ImgContainer = styled.div`
  animation: 2s ${fadeAnimation};
  position: absolute;
  left: 32%;
  top: 40%;
  @media (max-width: 700px) {
    left: 15%;
    width: 300px;
  }
`
