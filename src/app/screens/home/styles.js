import styled, { keyframes } from "styled-components";
import { DefaultTheme } from "../../../theme/themes";
import bonos from "../../../assets/imgs/bonos.jpeg";
import bonosLight from "../../../assets/imgs/bonos_light.jpg";
import { fadeIn, fadeInRight, fadeInLeft, fadeInDown } from "react-animations";
import { device } from "../../../theme/themes/DefaultTheme/screenSizes";
import { Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { SecondaryContainer } from "../../components/atoms/buttons/styles";

const fadeAnimation = keyframes`${fadeIn}`;
const animationsObj = {
  right: keyframes`${fadeInRight}`,
  left: keyframes`${fadeInLeft}`,
  down: keyframes`${fadeInDown},`,
};

export const VideoContainer = styled.video`
  z-index: -10;
  width: 100%;
  max-height: 100%;
`;

export const ContainerMain = styled.div`
  width: 100vw;
  z-index: 10;
`;

ContainerMain.defaultProps = {
  theme: DefaultTheme,
};

export const Back = styled.div`
  height: ${({ height }) => height + 80}px;
  width: 100vw;
  background-color: ${({ theme }) => theme.background}bd;
  margin-top: 65px;
  padding-top: ${({ isMobile }) => (isMobile ? "10vh" : "30vh")};
  position: absolute;
  padding-top: ${isMobile ? "5vh" : "10vh"};
  top: 0;
  z-index: 0;
  display: ${({ isMobile }) => !isMobile && "flex"};
`;

export const ImgContainer = styled.div`
  animation: 2s ${fadeAnimation};
  position: absolute;
  padding: 40px;
  margin: 10vw auto auto 30vw;
`;

export const BtnContainer = styled.div`
  margin-left: ${({ index, responsiveWidth }) =>
    isMobile ? parseFloat(index) * 21 + 10 : responsiveWidth * 0.05}px;
  margin-top: ${isMobile ? "10px" : "30px"};
  width: ${({ responsiveWidth }) =>
    isMobile ? responsiveWidth * 0.1 : responsiveWidth * 0.33}px;
  z-index: 100;
  animation: 2.5s ${({ animation }) => animationsObj[animation]};
`;

export const ContainerAbout = styled.div`
  height: 100vh;
  width: 100vw !important;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  padding-top: ${({ responsiveHeight }) => responsiveHeight * 0.03}px;
`;

export const Content = styled.div`
  height: ${({ responsiveHeight }) => responsiveHeight * 0.2}px;
  display: flex;
  flex-direction: row;
  align-content: center;
  padding-top: ${({ responsiveHeight }) => responsiveHeight * 0.1}px;
  margin-bottom: 200px;
`;

export const DescriptionBody = styled.div`
  width: ${({ responsiveWidth, isMobile }) =>
    isMobile ? responsiveWidth * 0.85 : responsiveWidth * 0.4}px;
  border-left: ${({ theme }) => theme.primaryColor} 2px solid;
  padding-left: ${({ responsiveWidth, isMobile }) =>
    isMobile ? responsiveWidth * 0.05 : responsiveWidth * 0.03}px;
  margin-left: ${({ responsiveWidth, isMobile }) =>
    isMobile ? responsiveWidth * 0.03 : responsiveWidth * 0.2}px;
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

export const HeadContainer = styled.div`
  position: absolute;
  z-index: 10;
  padding-top: ${({ responsiveWidth }) => 0.13 * responsiveWidth}px;
  padding-left: ${({ responsiveWidth, isMobile }) =>
    !isMobile ? 0.03 * responsiveWidth : 0.03 * responsiveWidth}px;
  width: ${({ responsiveWidth, isMobile }) =>
    !isMobile ? 0.4 * responsiveWidth : 0.5 * responsiveWidth}px;
  max-width: 750px;
  height: ${({ responsiveWidth }) => 0.4 * responsiveWidth}px;
  max-height: 750px;
  margin-top: ${({ responsiveHeight, isMobile }) =>
    isMobile ? -0.01 * responsiveHeight : 0.09 * responsiveHeight}px;
  margin-left: ${({ responsiveWidth, isMobile }) =>
    isMobile ? 0.03 * responsiveWidth : 0.3 * responsiveWidth}px;
  ${SecondaryContainer} {
    margin: 0px;
    padding: 0px;
  }
`;
export const HeadTitle = styled.p`
  font-family: BebasNeue-Regular;
  width: fit-content;
  border-bottom: ${({ theme }) => theme.primaryColor} 3px solid;
  color: ${({ theme }) => theme.fonts};
  font-size: ${({ responsiveWidth, isMobile }) =>
    isMobile ? responsiveWidth * 0.08 : responsiveWidth * 0.06}px;
`;

export const HowContainer = styled.div``;

export const LineShape = styled.div`
  height: 65vh;
  width: 90vw;
  margin-top: 15vh;
  border-left: ${({ theme }) => theme.fonts} 3px solid;
  margin-left: ${({ responsiveWidth }) => 0.05 * responsiveWidth}px;
  display: block;
  z-index: 3;
`;

export const StepsContainerMobile = styled.div`
  display: flex;
  flow-direction: row;
  height: 32vh;
  margin-left: -15px;
  width: ${({ responsiveWidth }) => 0.8 * responsiveWidth}px;
`;

export const Dots = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primaryColor};
`;

export const StepContainer = styled.div`
  position: absolute;
  width: ${({ responsiveWidth }) => 0.3 * responsiveWidth}px;
  &:nth-child(3) {
    padding-left: 1000px;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ responsiveHeight, alignment }) =>
    alignment === "left" ? -responsiveHeight * 0.6 : responsiveHeight * 0.2}px;
  margin-left: ${({ responsiveWidth, alignment }) =>
    alignment === "left" ? responsiveWidth * 0.73 : responsiveWidth * 0.03}px;
  margin-right: ${({ responsiveWidth }) => responsiveWidth * 0.05}px;
  text-align: ${({ alignment }) => alignment};
  width: ${({ responsiveWidth }) => responsiveWidth * 0.25}px;
  align-items: ${({ alignment }) =>
    alignment === "left" ? "flex-start" : "flex-end"};
  z-index: 100;
  @media (${device.laptopL}) {
    margin-top: ${({ responsiveHeight, alignment }) =>
      alignment === "left"
        ? -responsiveHeight * 0.5
        : responsiveHeight * 0.2}px;
  }
`;

export const TextContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ responsiveWidth }) => responsiveWidth * 0.05}px;
  text-align: left;
  width: ${({ responsiveWidth, isMobile }) =>
    isMobile ? responsiveWidth * 0.7 : responsiveWidth * 0.25}px;

  z-index: 100;
  @media (${device.laptopL}) {
    margin-top: ${({ responsiveHeight, alignment }) =>
      alignment === "left"
        ? -responsiveHeight * 0.3
        : responsiveHeight * 0.2}px;
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
  @media (${device.mobileAll}), (pointer: none), (pointer: coarse) {
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
  padding-left: 40px;
  padding-bottom: 20vh;
  @media (${device.biggerScreens}) {
    height: 190vh;
    padding-left: 60px;
  }
  @media (${device.mobileAll}), (pointer: none), (pointer: coarse) {
    padding-left: 0px;
    height: 130vh;
  }
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  padding-top: ${({ responsiveHeight }) => responsiveHeight * 0.03}px;
  @media (${device.mobileAll}), (pointer: none), (pointer: coarse) {
    padding-top: ${({ responsiveHeight }) => responsiveHeight * 0.03}px;
  }
`;
