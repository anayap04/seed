import styled, { keyframes } from 'styled-components';
import { DefaultTheme } from '../../../theme/themes';

import { fadeIn, fadeInRight, fadeInLeft, fadeInDown } from 'react-animations';
import { device } from '../../../theme/themes/DefaultTheme/screenSizes';
import { Col } from 'react-bootstrap';
import { SecondaryContainer } from '../../components/atoms/buttons/styles';

import background from '../../../assets/imgs/background-light.jpg';
import imageBack from '../../../assets/imgs/about.png';
const fadeAnimation = keyframes`${fadeIn}`;
const animationsObj = {
  right: keyframes`${fadeInRight}`,
  left: keyframes`${fadeInLeft}`,
  down: keyframes`${fadeInDown},`
};

export const ContainerMain = styled.div`
  width: 100vw;
  background: url(${background});
  display: flex;
  flex-direction: row;
  height: 99vh;
  z-index: -1;
  margin-top: -80px;
`;

ContainerMain.defaultProps = {
  theme: DefaultTheme
};

export const SlideDiv = styled.div`
  width: 100%;
`;

export const ImgContainer = styled.div`
  animation: 2s ${fadeAnimation};
  text-align: left;
  width: 40vw;
  padding-top: 30px;
  padding-left: 80px;
  top: 26vh;
  z-index: 100;
  position: absolute;
`;

export const ContainerAbout = styled.div`
  height: 100vh;
  width: 100vw !important;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.nero};
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
`;

export const ImageContainer = styled.div`
  padding-left: ${({ responsiveWidth }) => responsiveWidth * 0.01}px;
`;

export const DescriptionBody = styled.div`
  width: ${({ responsiveWidth, isMobile }) =>
    isMobile ? responsiveWidth * 0.85 : responsiveWidth * 0.3}px;
  padding-left: ${({ responsiveWidth, isMobile }) =>
    isMobile ? responsiveWidth * 0.05 : responsiveWidth * 0.03}px;
  padding-top: 10vh;
`;

export const DescriptionText = styled.div`
  font-family: Poppins-Regular;
  animation: 2s ${animationsObj.left};
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.white};
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
  padding-top: 80px;
  padding-left: 80px;
  rgb(242, 247, 255);
  background: linear-gradient(
    180deg,
    rgba(36, 255, 190, 1) 0%,
    rgba(242, 247, 255, 1) 32%,
    rgba(242, 247, 255, 1) 73%,
    rgba(36, 255, 190, 1) 93%
  );
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

export const TitleText = styled.p`
  font-family: Poppins-Bold;
  width: fit-content;
  border-bottom: ${({ theme }) => theme.colors.green} 3px solid;
  color: ${({ theme }) => theme.colors.nero};
  font-size: ${({ isMobile }) => (isMobile ? 16 : 28)}px;
  text-align: center;
  margin-bottom: 5px;
  align-self: center;
`;

export const BodyText = styled.div`
  margin-top: 14px;
  font-family: Poppins-SemiBold;
  margin-left: 5px;
  margin-right: 5px;
  font-size: ${({ isMobile }) => (isMobile ? 16 : 18)}px;
  color: ${({ theme }) => theme.colors.nero};
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
  & > .svg {
    margin-bottom: 10px;
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
      alignment === 'left' ? -responsiveHeight * 0.3 : responsiveHeight * 0.2}px;
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
  padding-left: ${({ isMobile }) => !isMobile && '80px'};
  padding-bottom: 20vh;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.nero};

  padding-top: ${({ responsiveHeight, isMobile }) =>
    isMobile ? responsiveHeight * 0.01 : responsiveHeight * 0.03}px;
`;

export const IconContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  padding-top: 25px;
  box-shadow: -2px 2px 13px 7px rgba(89, 89, 89, 0.32);
  -webkit-box-shadow: -2px 2px 13px 7px rgba(89, 89, 89, 0.32);
  -moz-box-shadow: -2px 2px 13px 7px rgba(89, 89, 89, 0.32);
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const BorderText = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.green};
  border-radius: 20px;
  padding: 70px 30px 20px 30px;
  margin-top: -50px;
  height: 320px;
  text-align: left;
  margin-bottom: -20px;
`;

export const PartnersLogos = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  box-shadow: 0px -1px 10px 4px rgba(189, 189, 189, 0.71);
  -webkit-box-shadow: 0px -1px 10px 4px rgba(189, 189, 189, 0.71);
  -moz-box-shadow: 0px -1px 10px 4px rgba(189, 189, 189, 0.71);

  padding: 20px;
  width: 80vw;
  margin-top: 50px;
`;

export const RootPartners = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 10vh;
  padding-left: 10vw;
  background-image: url(${imageBack});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const RowPartners = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
