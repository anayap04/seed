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

export const HowContainer = styled.div`
  position: sticky;
`;
export const StepsShapes = styled.div`
  margin-top: ${({ responsiveWidth }) => 0.1 * responsiveWidth}px;
  margin-left: ${({ responsiveWidth }) => 0.25 * responsiveWidth}px;
  width: ${({ responsiveWidth }) => 0.5 * responsiveWidth}px;
  height: ${({ responsiveWidth }) => 0.5 * responsiveWidth}px;
  border-radius: 50%;
  border: ${({ theme }) => theme.fonts} 3px solid;
  @media (${device.laptopL}) {
    width: ${({ responsiveWidth }) => 0.4 * responsiveWidth}px;
    height: ${({ responsiveWidth }) => 0.4 * responsiveWidth}px;
  }
  @media (${device.mobileS} and ${device.mobileAll}) {
    height: ${({ responsiveHeight }) => 0.7 * responsiveHeight}px;
    margin-top: ${({ responsiveHeight }) => 0.01 * responsiveHeight}px;
    margin-left: ${({ responsiveWidth }) => 0.07 * responsiveWidth}px;
    width: 0;
    border-radius: 0;
    border-left: ${({ theme }) => theme.fonts} 1px solid;
  }
`;
export const Dots = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primaryColor};
`;

export const StepContainer = styled.div`
  display: flex;
  &:nth-child(2) {
    flex-direction: row-reverse;
    transform: translate(
      ${({ responsiveWidth }) => -(responsiveWidth - 0.3 * responsiveWidth)}px,
      ${({ responsiveWidth }) => -(responsiveWidth - 0.6 * responsiveWidth)}px
    );
    width: ${({responsiveWidth}) => responsiveWidth * 0.9};
    @media (${device.mobileS} and ${device.mobileAll}) {
      width: ${({responsiveWidth}) => responsiveWidth * 0.6};
      flex-direction: row;
      transform: translate(
        ${({ responsiveWidth }) => responsiveWidth * 0.04}px,
        ${({ responsiveHeight }) => responsiveHeight * -0.73}px
      );
    }
  }
  &:nth-child(3) {
    flex-direction: row-reverse;
    transform: translate(
      ${({ responsiveWidth }) => -(responsiveWidth - 0.3 * responsiveWidth)}px,
      ${({ responsiveWidth }) => -(responsiveWidth - 0.85 * responsiveWidth)}px
    );
    @media (${device.mobileS} and ${device.mobileAll}) {
      width: ${({responsiveWidth}) => responsiveWidth * 0.6};
      flex-direction: row;
      transform: translate(
        ${({ responsiveWidth }) => responsiveWidth * 0.04}px,
        ${({ responsiveHeight }) => responsiveHeight * -0.425}px
      );
    }

  }
  &:nth-child(4) {
    flex-direction: row;
    transform: translate(
      ${({ responsiveWidth }) => responsiveWidth - 0.275 * responsiveWidth}px,
      ${({ responsiveWidth }) => -(responsiveWidth - 0.6 * responsiveWidth)}px
    );
    width: 300px;
    @media (${device.mobileS} and ${device.mobileAll}) {
      width: ${({responsiveWidth}) => responsiveWidth * 0.65};
      flex-direction: row;
      transform: translate(
        ${({ responsiveWidth }) => responsiveWidth * 0.04}px,
        ${({ responsiveHeight }) => responsiveHeight * -0.1}px
      );
    }
  }
`;
export const TextContainer = styled.div`
  margin-left: 40px;
  margin-right: 30px;
  @media (${device.laptop} and ${device.biggerScreens}) {
    width: 200px;
  }
  @media (${device.laptopL}) {
    width: 10.5vw;
  }
  text-align: left;
`;

export const TitleText = styled.div`
  font-family: BebasNeue-Regular;
  color: ${({ theme }) => theme.fonts};
  font-size: 20px;
`;
