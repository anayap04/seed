import styled, { keyframes } from "styled-components";
import { DefaultTheme } from "../../../theme/themes";
import bonos from "../../../assets/imgs/bonos.jpeg";
import bonosLight from "../../../assets/imgs/bonos_light.jpg";
import { fadeIn, fadeInRight, fadeInLeft, fadeInDown } from "react-animations";
import { device } from "../../../theme/themes/DefaultTheme/screenSizes";
import { Col } from "react-bootstrap";

const fadeAnimation = keyframes`${fadeIn}`;
const animationsObj = {
  right: keyframes`${fadeInRight}`,
  left: keyframes`${fadeInLeft}`,
  down: keyframes`${fadeInDown},`,
};

export const VideoContainer = styled.video`
  z-index: -10;
  ${device.mobileAll} , (pointer:none), (pointer:coarse) {
    height: 100vh;
  }
  ${device.tablet} {
    height: 90vh;
  }
  width: 100%;
  max-height: 100%;
`;

export const ContainerMain = styled.div`
  width: 100vw;
  z-index: 10;
  ${device.laptopLess} {
    height: 12vh;
  }
  ${device.tablet} {
    height: 2vh;
  }
`;

ContainerMain.defaultProps = {
  theme: DefaultTheme,
};

export const Back = styled.div`
  height: 120vh;
  @media (${device.laptopLess}) {
    height: 45vh;
  }
  @media (${device.mobileAll}), (pointer:none), (pointer:coarse) {
    height: 38vh;
  }
  @media (${device.biggerScreens}) {
    height: 100vh;
  }
  width: 100vw;
  background-color: ${({ theme }) => theme.background};
  opacity: 60%;
  position: absolute;
  top: 0;
  z-index: 0;
`;

export const ImgContainer = styled.div`
  animation: 2s ${fadeAnimation};
  position: absolute;
  left: 29%;
  top: 40%;
  padding: 40px;
  @media (${device.laptopLess}) {
    left: 9%;
    top: 27%;
  }
  @media (max-width: 700px) {
    left: 15%;
    width: 300px;
    top: -10%;
  }
`;

export const ContainerAbout = styled.div`
  height: 100vh;
  width: 100vw !important;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  padding-top: ${({ responsiveHeight }) => responsiveHeight * 0.03}px;
  @media (${device.mobileAll}), (pointer:none), (pointer:coarse) {
    padding-top: ${({ responsiveHeight }) => responsiveHeight * 0.03}px;
  }
  @media (${device.tablet} and ${device.laptopLess}) {
    padding-top: ${({ responsiveHeight }) => responsiveHeight * 0.06}px;
  }
`;

export const Content = styled.div`
  height: ${({ responsiveHeight }) => responsiveHeight * 0.2}px;
  display: flex;
  flex-direction: row;
  @media (${device.mobileAll}), (pointer:none), (pointer:coarse) {
    flex-direction: column;
    padding-top: ${({ responsiveHeight }) => responsiveHeight * 0.07}px;
    height: ${({ responsiveHeight }) => responsiveHeight * 0.1}px;
    padding-left: -10px;
    margin-bottom: 380px;
  }
  @media (${device.tablet} and ${device.laptopLess}), (pointer:none), (pointer:coarse) {
    margin-bottom: 390px;
    flex-direction: column;
    padding-top: ${({ responsiveHeight }) => responsiveHeight * 0.1}px;
  }
  align-content: center;
  padding-top: ${({ responsiveHeight }) => responsiveHeight * 0.1}px;
  margin-bottom: 200px;
`;

export const DescriptionBody = styled.div`
  width: ${({ responsiveWidth }) => responsiveWidth * 0.4}px;
  border-left: ${({ theme }) => theme.primaryColor} 2px solid;
  padding-left: ${({ responsiveWidth }) => responsiveWidth * 0.03}px;
  margin-left: ${({ responsiveWidth }) => responsiveWidth * 0.2}px;
  @media (${device.mobileAll}), (pointer:none), (pointer:coarse) {
    width: ${({ responsiveWidth }) => responsiveWidth * 0.7}px;
    padding-left: ${({ responsiveWidth }) => responsiveWidth * 0.03}px;
    margin-left: ${({ responsiveWidth }) => responsiveWidth * 0.05}px;
    margin-top: 10px;
  }
  @media (${device.tablet} and ${device.laptopLess}) {
    padding-left: ${({ responsiveWidth }) => responsiveWidth * 0.01}px;
    width: ${({ responsiveWidth }) => responsiveWidth * 0.75}px;
    margin-top: 100px;
  }
`;
export const DescriptionText = styled.div`
  font-family: Montserrat-Regular;
  animation: 2s ${animationsObj.left};
  margin-bottom: 20px;
  color: ${({ theme }) => theme.fonts};
  text-align: left;
`;

export const CarouselContainer = styled.div`
  heigth: 180px;
  display: flex;
  flex-direction: row;
  margin-top: -10px;
  width: 90%;
  @media (${device.laptopLess}) {
    margin-top: -5px;
    padding-left: 40px;
    width: 95%;
  }
`;

export const ImageDiv = styled(Col)`
  margin: 20px;
  @media (${device.laptopLess}) {
    margin-left: 6px;
  }
`;

export const ContainerHowTo = styled.div`
  height: 100vh;
  background: linear-gradient(
      180deg,
      ${({ theme }) =>
        theme.background === "#FFFFFF"
          ? theme.background + "60"
          : "rgba(13, 13, 13, 1) 5%"},
      transparent
        ${({ theme }) => (theme.background === "#FFFFFF" ? "65%" : "85%")},
      ${({ theme }) => theme.background}
    ),
    url(${({ theme }) => (theme.background === "#FFFFFF" ? bonosLight : bonos)});
`;

export const BtnContainer = styled.div`
  top: ${({ posY }) => posY}%;
  left: ${({ posX }) => posX}%;
  position: absolute;
  animation: 2.5s ${({ animation }) => animationsObj[animation]};
  @media (${device.mobileS}), (pointer:none), (pointer:coarse) {
    top: ${({ posY }) => posY - 10}%;
    left: ${({ posX }) => posX - 10}%;
  }
  @media (${device.tablet}) , (pointer:none), (pointer:coarse) {
    top: ${({ posY }) => posY}%;
    left: ${({ posX }) => posX}%;
  }
`;

export const HeadContainer = styled.div`
  position: absolute;
  z-index: 10;
  margin-top: ${({ responsiveHeight }) => responsiveHeight * 0.35}px;
  left: ${({ responsiveWidth }) => responsiveWidth * 0.35}px;
  @media (${device.laptopLess}) {
    margin-top: ${({ responsiveHeight }) => responsiveHeight * 0.35}px;
    left: ${({ responsiveWidth }) => responsiveWidth * 0.35}px;
  }
  @media (${device.mobileAll}), (pointer:none), (pointer:coarse) {
    left: 15px;
    margin-top: ${({ responsiveWidth }) => responsiveWidth * 0.05}px;
  }
  @media (${device.tablet} and ${device.laptopLess}) {
    margin-top: 30px;
    left: 15px;
    margin-top: ${({ responsiveWidth }) => responsiveWidth * 0.15}px;
  }
`;
export const HeadTitle = styled.div`
  font-family: BebasNeue-Regular;
  width: fit-content;
  text-align-center;
  border-bottom: ${({ theme }) => theme.primaryColor} 3px solid;
  color: ${({ theme }) => theme.fonts};
  font-size: ${({ responsiveWidth }) => responsiveWidth * 0.07}px;
  @media (${device.laptop}) {
    font-size: ${({ responsiveWidth }) => responsiveWidth * 0.04}px;
  }
  @media (${device.laptopL}) {
    font-size: ${({ responsiveWidth }) => responsiveWidth * 0.05}px;
  }
  @media (${device.mobileS} and ${device.mobileAll}), (pointer:none), (pointer:coarse) {
    font-size: ${({ responsiveWidth }) => responsiveWidth * 0.1}px;
    margin-left: ${({ responsiveWidth }) => responsiveWidth * 0.15}px;
  }
  @media (${device.tablet} and ${device.laptopLess}) {
    font-size: ${({ responsiveWidth }) => responsiveWidth * 0.08}px;
    margin-left: ${({ responsiveWidth }) => responsiveWidth * 0.25}px;
  }
`;

export const HowContainer = styled.div`
  position: sticky;
`;
export const StepsShapes = styled.div`
  margin-top: ${({ responsiveHeight }) => 0.1 * responsiveHeight}px;
  margin-left: ${({ responsiveWidth }) => 0.3 * responsiveWidth}px;
  width: ${({ responsiveWidth }) => 0.5 * responsiveWidth}px;
  height: ${({ responsiveHeight }) => 0.5 * responsiveHeight}px;
  border-radius: 50%;
  border: ${({ theme }) => theme.fonts} 3px solid;
  @media (${device.laptop}) {
    width: ${({ responsiveWidth }) => 0.35 * responsiveWidth}px;
    height: ${({ responsiveWidth }) => 0.35 * responsiveWidth}px;
    margin-left: ${({ responsiveWidth }) => 0.3 * responsiveWidth}px;
  }
  @media (${device.laptopL}) {
    width: ${({ responsiveWidth }) => 0.35 * responsiveWidth}px;
    height: ${({ responsiveWidth }) => 0.35 * responsiveWidth}px;
    margin-left: ${({ responsiveWidth }) => 0.32 * responsiveWidth}px;
  }
  @media (${device.mobileS} and ${device.laptopLess}), (pointer:none), (pointer:coarse) {
    height: ${({ responsiveHeight }) => 0.65 * responsiveHeight}px;
    margin-top: ${({ responsiveHeight }) => 0.15 * responsiveHeight}px;
    margin-left: ${({ responsiveWidth }) => 0.05 * responsiveWidth}px;
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
      ${({ responsiveWidth }) => -(responsiveWidth - 0.34 * responsiveWidth)}px,
      ${({ responsiveWidth }) => -(responsiveWidth - 0.63 * responsiveWidth)}px
    );
    @media (${device.mobileS} and ${device.mobileAll}), (pointer:none), (pointer:coarse) {
      width: ${({ responsiveWidth }) => responsiveWidth * 0.8}px;
      flex-direction: row;
      transform: translate(
        ${({ responsiveWidth }) => responsiveWidth * 0.03}px,
        ${({ responsiveHeight }) => responsiveHeight * -0.55}px
      );
    }
    @media (${device.tablet} and ${device.laptopLess}), (pointer:none), (pointer:coarse) {
      margin-bottom: ${({ responsiveHeight }) => responsiveHeight * 0.09}px;
    }
    @media (${device.laptop}) {
      flex-direction: row-reverse;
      transform: translate(
        ${({ responsiveWidth }) =>
          -(responsiveWidth - 0.436 * responsiveWidth)}px,
        ${({ responsiveWidth }) =>
          -(responsiveWidth - 0.73 * responsiveWidth)}px
      );
      width: ${({ responsiveWidth }) => responsiveWidth * 0.9}px;
    }
    @media (${device.laptopL}) {
      flex-direction: row-reverse;
      transform: translate(
        ${({ responsiveWidth }) =>
          -(responsiveWidth - 0.45 * responsiveWidth)}px,
        ${({ responsiveWidth }) =>
          -(responsiveWidth - 0.73 * responsiveWidth)}px
      );
      width: ${({ responsiveWidth }) => responsiveWidth * 0.9}px;
    }
  }
  &:nth-child(3) {
    flex-direction: row-reverse;
    transform: translate(
      ${({ responsiveWidth }) =>
        -(responsiveWidth - 0.355 * responsiveWidth)}px,
      ${({ responsiveWidth }) => -(responsiveWidth - 0.75 * responsiveWidth)}px
    );
    @media (${device.mobileS} and ${device.mobileAll}), (pointer:none), (pointer:coarse) {
      width: ${({ responsiveWidth }) => responsiveWidth * 0.9}px;
      flex-direction: row;
      transform: translate(
        ${({ responsiveWidth }) => responsiveWidth * 0.03}px,
        ${({ responsiveHeight }) => responsiveHeight * -0.6}px
      );
    }
    @media (${device.tablet} and ${device.laptopLess}), (pointer:none), (pointer:coarse) {
      margin-bottom: ${({ responsiveHeight }) => responsiveHeight * 0.09}px;
    }
    @media (${device.laptop}) {
      flex-direction: row-reverse;
      transform: translate(
        ${({ responsiveWidth }) =>
          -(responsiveWidth - 0.36 * responsiveWidth)}px,
        ${({ responsiveHeight }) =>
          -(responsiveHeight - 0.68 * responsiveHeight)}px
      );
    }
    @media (${device.laptopL}) {
      flex-direction: row-reverse;
      transform: translate(
        ${({ responsiveWidth }) =>
          -(responsiveWidth - 0.4 * responsiveWidth)}px,
        ${({ responsiveHeight }) =>
          -(responsiveHeight - 0.61 * responsiveHeight)}px
      );
    }
  }
  &:nth-child(4) {
    flex-direction: row;
    transform: translate(
      ${({ responsiveWidth }) => responsiveWidth - 0.26 * responsiveWidth}px,
      ${({ responsiveWidth }) => -(responsiveWidth - 0.65 * responsiveWidth)}px
    );
    width: ${({ responsiveWidth }) => 0.26 * responsiveWidth}px;
    @media (${device.mobileS} and ${device.laptopLess}), (pointer:none), (pointer:coarse) {
      width: ${({ responsiveWidth }) => responsiveWidth * 0.8}px;
      flex-direction: row;
      transform: translate(
        ${({ responsiveWidth }) => responsiveWidth * 0.03}px,
        ${({ responsiveHeight }) => responsiveHeight * -0.62}px
      );
    }
    @media (${device.laptop}) {
      flex-direction: row;
      transform: translate(
        ${({ responsiveWidth }) => responsiveWidth - 0.39 * responsiveWidth}px,
        ${({ responsiveHeight }) =>
          -(responsiveHeight - 0.25 * responsiveHeight)}px
      );
    }
    @media (${device.laptopL}) {
      flex-direction: row;
      transform: translate(
        ${({ responsiveWidth }) => responsiveWidth - 0.38 * responsiveWidth}px,
        ${({ responsiveHeight }) =>
          -(responsiveHeight - 0.29 * responsiveHeight)}px
      );
    }
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignment }) =>
    alignment === "left" ? "flex-start" : "flex-end"};
  margin-left: ${({ responsiveWidth }) => responsiveWidth * 0.01}px;
  margin-right: ${({ responsiveWidth }) => responsiveWidth * 0.032}px;
  text-align: ${({ alignment }) => alignment};
  width: ${({ responsiveWidth }) => responsiveWidth * 0.25}px;
  @media (${device.mobileS} and ${device.laptopLess}), (pointer:none), (pointer:coarse) {
    width: ${({ responsiveWidth }) => responsiveWidth * 0.9}px;
    text-align: left;
    align-items: flex-start;
    margin-right: 0px;
  }
`;

export const TitleText = styled.div`
  font-family: BebasNeue-Regular;
  width: fit-content;
  border-bottom: ${({ theme }) => theme.primaryColor} 3px solid;
  color: ${({ theme }) => theme.fonts};
  font-size: 20px;
  @media (${device.laptop}) {
    font-size: 28px;
  }
`;

export const BodyText = styled.div`
  margin-top: 10px;
  font-family: Montserrat-Regular;
  color: ${({ theme }) => theme.fonts};
`;

export const ColProject = styled(Col)`
  margin-top: 30px;
  margin-bottom: 20px;
  @media (${device.laptopL}) {
    padding-left: ${({ responsiveWidth }) => responsiveWidth * 0.05}px;
  }
  @media (${device.mobileAll}), (pointer:none), (pointer:coarse) {
    padding-left: ${({ responsiveWidth }) => responsiveWidth * 0.15}px;
  }
  @media (${device.tablet} and ${device.laptopLess}) {
    padding-right: 0px !important;
    padding-left: ${({ responsiveWidth }) => responsiveWidth * 0.1}px;
  }
`;
export const CardsContainer = styled.div`
  margin-bottom: 40px;
`;

export const ContainerProjects = styled.div`
  height: 130vh;
  padding-left: 40px;
  @media (${device.biggerScreens}) {
    height: 190vh;
    padding-left: 60px;
  }
  @media (${device.mobileAll}), (pointer:none), (pointer:coarse) {
    padding-left: 0px;
    height: 130vh;
  }
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  padding-top: ${({ responsiveHeight }) => responsiveHeight * 0.03}px;
  @media (${device.mobileAll}), (pointer:none), (pointer:coarse) {
    padding-top: ${({ responsiveHeight }) => responsiveHeight * 0.03}px;
  }
`;
