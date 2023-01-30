import styled, { keyframes } from "styled-components";
import { DefaultTheme } from "../../../theme/themes";
import backgroundDark from "../../../assets/imgs/background-dark.jpg";
import backgroundLight from "../../../assets/imgs/background-light.jpg";
import bonos from "../../../assets/imgs/bono.png";
import bonosLight from "../../../assets/imgs/bonos_light.png";
import { fadeIn, fadeInRight, fadeInLeft, fadeInDown } from "react-animations";
import { device } from "../../../theme/themes/DefaultTheme/screenSizes";
import { Col } from "react-bootstrap";
import { SecondaryContainer } from "../../components/atoms/buttons/styles";
import { Title } from "../../components/foundation/Typography";
import Icon from "../../components/foundation/Icon";

const fadeAnimation = keyframes`${fadeIn}`;
const animationsObj = {
  right: keyframes`${fadeInRight}`,
  left: keyframes`${fadeInLeft}`,
  down: keyframes`${fadeInDown},`,
};

export const ContainerMain = styled.div`
  width: 100vw;
  z-index: 10;
  background-image: url(${({ theme }) =>
    theme.background === "#0F110C" ? backgroundDark : backgroundLight});
  display: flex;
  flex-direction: row;
  height: 95vh;
`;

ContainerMain.defaultProps = {
  theme: DefaultTheme,
};

export const ImgContainer = styled.div`
  animation: 2s ${fadeAnimation};
  position: absolute;
  padding: 50px;
  margin: ${({isMobile}) => isMobile ? '30vh auto auto auto' : '15vh auto auto 25vw'};
`;

export const BtnContainer = styled.div`
  width: ${({ responsiveWidth }) => responsiveWidth * 0.99}px;
  z-index: 100;
  display: flex;
  height: 100px;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 30px;
  padding-left: ${({ responsiveWidth }) => responsiveWidth * 0.03}px;
  text-align: center;
  animation: 2.5s ${({ animation }) => animationsObj[animation]};
`;

export const ContainerAbout = styled.div`
  height: 100vh;
  width: 100vw !important;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  padding-top: ${({ responsiveHeight }) => responsiveHeight * 0.04}px;
  z-index: 100;
`;

export const Content = styled.div`
  height: ${({ responsiveHeight }) => responsiveHeight * 0.2}px;
  display: flex;
  flex-direction: row;
  align-content: center;
  padding-top: ${({ responsiveHeight }) => responsiveHeight * 0.1}px;
  margin-bottom: 200px;
  z-index: 100;
`;

export const ImageContainer = styled.div`
  padding-left: ${({ responsiveWidth }) => responsiveWidth * 0.05}px;
`;

export const DescriptionBody = styled.div`
  width: ${({ responsiveWidth, isMobile }) =>
    isMobile ? responsiveWidth * 0.85 : responsiveWidth * 0.5}px;
  border-left: ${({ theme }) => theme.green} 2px solid;
  padding-left: ${({ responsiveWidth, isMobile }) =>
    isMobile ? responsiveWidth * 0.05 : responsiveWidth * 0.03}px;
  margin-left: ${({ responsiveWidth, isMobile }) =>
    isMobile ? responsiveWidth * 0.03 : responsiveWidth * 0.1}px;
`;

export const DescriptionText = styled.div`
  font-family: Acumin-RPro;
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
  padding-top: 30px;
  padding-left: 30px;
  background: linear-gradient(
      180deg,
      ${({ theme }) =>
        theme.background === "#E3F2FD"
          ? theme.background + "60"
          : "rgba(13, 13, 13, 1) 5%"},
      transparent
        ${({ theme }) => (theme.background === "#E3F2FD" ? "65%" : "85%")},
      ${({ theme }) => theme.background}
    ),
    url(${({ theme }) => (theme.background === "#E3F2FD" ? bonosLight : bonos)});
`;

export const HeadContainer = styled.div`
  z-index: 10;
  margin-top: ${({ responsiveHeight, isMobile }) =>
    isMobile ? -0.01 * responsiveHeight : 0.11 * responsiveHeight}px;
  margin-left: ${({ responsiveWidth, isMobile }) =>
    isMobile ? 0.03 * responsiveWidth : 0.1 * responsiveWidth}px;
  margin-bottom: ${({ responsiveWidth, isMobile }) =>
    isMobile ? 0.03 * responsiveWidth : 0.05 * responsiveWidth}px;
  ${SecondaryContainer} {
    margin: 0px;
    padding: 0px;
  }
`;

export const HowContainer = styled.div``;

export const LineShape = styled.div`
  height: 65vh;
  width: 90vw;
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
  background-color: ${({ theme }) => theme.green};
`;

export const TitleText = styled.p`
  font-family: AcuminBdPro;
  width: fit-content;
  border-bottom: ${({ theme }) => theme.green} 3px solid;
  color: ${({ theme }) => theme.fonts};
  font-size: ${({isMobile}) => isMobile ? 16 : 28 }px;
  text-align: center;
  margin-bottom: 5px;
  align-self: center;
`;

export const BodyText = styled.div`
  margin-top: 30px;
  font-family: Acumin-RPro;
  margin-left: 5px;
  margin-right: 5px;
  font-size: ${({isMobile}) => isMobile ? 16 : 24 }px;
  color: ${({ theme }) => theme.fonts};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ responsiveWidth }) => 0.33 * responsiveWidth}px;
  margin-right: 30px;
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
  align-items: center;
  padding: 20px;
  & > ${Icon} {
    margin-bottom: 10px;
  }
  &: hover {
    background: ${({theme}) => theme.tangerine}90;
    ${TitleText} {
      transform: scale(1.1);
    }

  }
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
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

export const ColProject = styled(Col)`
  margin-top: 30px;
  margin-bottom: 20px;
`;
export const CardsContainer = styled.div`
  margin-bottom: 40px;
`;

export const ContainerProjects = styled.div`
  padding-left: ${({isMobile}) => !isMobile && '40px'};
  padding-bottom: 20vh;
  
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};

  padding-top: ${({ responsiveHeight, isMobile }) => isMobile ? responsiveHeight * 0.01 :  responsiveHeight * 0.03}px;
 
`;

export const HomeTitle = styled(Title)`
  align-self: center;
`;
