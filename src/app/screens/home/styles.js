import styled, { keyframes } from "styled-components";
import { DefaultTheme } from "../../../theme/themes";
import image from "../../../assets/imgs/trees.jpg";
import bonos from "../../../assets/imgs/bonos.jpeg";
import { fadeIn, fadeInRight, fadeInLeft, fadeInDown } from "react-animations";
import { device } from "../../../theme/themes/DefaultTheme/screenSizes";

const fadeAnimation = keyframes`${fadeIn}`;
const animationsObj = {
  right: keyframes`${fadeInRight}`,
  left: keyframes`${fadeInLeft}`,
  down: keyframes`${fadeInDown},`,
};

export const ContainerMain = styled.div`
  height: 100vh;
  width: 100%;
  z-index: 10;
  background: linear-gradient(
      180deg,
      rgba(13, 13, 13, 1) 5%,
      transparent 85%,
      rgba(13, 13, 13, 1) 100%
    ),
    url(${image});
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
`;

export const ContainerAbout = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;

export const ContainerHowTo = styled.div`
  height: 100vh;
  background: linear-gradient(
      180deg,
      rgba(13, 13, 13, 1) 5%,
      transparent 85%,
      rgba(13, 13, 13, 1) 100%
    ),
    url(${bonos});
`;

export const BtnContainer = styled.div`
  top: ${({ posY }) => posY}%;
  left: ${({ posX }) => posX}%;
  position: absolute;
  animation: 2.5s ${({ animation }) => animationsObj[animation]};
  @media ${device.mobileS} {
    top: ${({ posY }) => posY - 10}%;
    left: ${({ posX }) => posX - 10}%;
  }
  @media (${device.tablet}) {
    top: ${({ posY }) => posY}%;
    left: ${({ posX }) => posX}%;
  }
`;
