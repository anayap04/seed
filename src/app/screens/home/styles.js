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

export const HeadContainer = styled.div`
  position: absolute;
  z-index: 10;
  margin-top: 32%;
  left: ${({responsiveWidth}) => responsiveWidth*0.35}px;
  @media (${device.laptopL}) {
    margin-top: 24%;
    left: ${({responsiveWidth}) => responsiveWidth*0.35}px;
  }
  @media (${device.mobileS} and ${device.laptopLess}) {
    margin-top: 30px;
    left:15px;
   }
`
export const HeadTitle = styled.div`
  font-family: BebasNeue-Regular;
  color: ${({theme}) => theme.fonts};
  font-size: ${({responsiveWidth}) => responsiveWidth*0.07}px;
  @media (${device.laptopL}) {
    font-size: ${({responsiveWidth}) => responsiveWidth*0.04}px;
  }
  @media (${device.mobileS} and ${device.mobileAll}) {
    font-size: ${({responsiveWidth}) => responsiveWidth*0.1}px;
   }
`

export const HowContainer = styled.div`
  position: sticky;
`;
export const StepsShapes = styled.div`
  margin-top: ${({ responsiveWidth }) => 0.1 * responsiveWidth}px;
  margin-left: ${({ responsiveWidth }) => 0.3 * responsiveWidth}px;
  width: ${({ responsiveWidth }) => 0.5 * responsiveWidth}px;
  height: ${({ responsiveWidth }) => 0.5 * responsiveWidth}px;
  border-radius: 50%;
  border: ${({ theme }) => theme.fonts} 3px solid;
  @media (${device.laptopL}) {
    width: ${({ responsiveWidth }) => 0.33 * responsiveWidth}px;
    height: ${({ responsiveWidth }) => 0.33 * responsiveWidth}px;
    margin-left: ${({ responsiveWidth }) => 0.3 * responsiveWidth}px;
  }
  @media (${device.mobileS} and ${device.laptopLess}) {
    height: ${({ responsiveHeight }) => 0.5 * responsiveHeight}px;
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
    @media (${device.mobileS} and ${device.laptopLess}) {
      width: ${({responsiveWidth}) => responsiveWidth * 0.8}px;
      flex-direction: row;
      transform: translate(
        ${({ responsiveWidth }) => responsiveWidth * 0.04}px,
        ${({ responsiveHeight }) => responsiveHeight * -0.53}px
      );
    }
    @media (${device.tablet} and ${device.laptopLess}) {
      margin-bottom: ${({responsiveHeight}) => responsiveHeight * 0.09}px;
    }
    @media (${device.laptopL}) {
      flex-direction: row-reverse;
      transform: translate(
        ${({ responsiveWidth }) => -(responsiveWidth - 0.436 * responsiveWidth)}px,
        ${({ responsiveWidth }) => -(responsiveWidth - 0.73 * responsiveWidth)}px
      );
      width: ${({responsiveWidth}) => responsiveWidth * 0.9}px;
     }
  }
  &:nth-child(3) {
    flex-direction: row-reverse;
    transform: translate(
      ${({ responsiveWidth }) => -(responsiveWidth - 0.355 * responsiveWidth)}px,
      ${({ responsiveWidth }) => -(responsiveWidth - 0.75 * responsiveWidth)}px
    );
    @media (${device.mobileS} and ${device.laptopLess}) {
      width: ${({responsiveWidth}) => responsiveWidth * 0.9}px;
      flex-direction: row;
      transform: translate(
        ${({ responsiveWidth }) => responsiveWidth * 0.04}px,
        ${({ responsiveHeight }) => responsiveHeight * -0.45}px
      );
    }
    @media (${device.tablet} and ${device.laptopLess}) {
      margin-bottom: ${({responsiveHeight}) => responsiveHeight * 0.09}px;
    }
    @media (${device.laptopL}) {
      flex-direction: row-reverse;
      transform: translate(
        ${({ responsiveWidth }) => -(responsiveWidth - 0.37 * responsiveWidth)}px,
        ${({ responsiveWidth }) => -(responsiveWidth - 0.89 * responsiveWidth)}px
      );
    }
  }
  &:nth-child(4) {
    flex-direction: row;
    transform: translate(
      ${({ responsiveWidth }) => responsiveWidth - 0.26 * responsiveWidth}px,
      ${({ responsiveWidth }) => -(responsiveWidth - 0.65 * responsiveWidth)}px
    );
    width:  ${({ responsiveWidth }) => 0.26 * responsiveWidth}px;
    @media (${device.mobileS} and ${device.laptopLess}) {
      width: ${({responsiveWidth}) => responsiveWidth * 0.8}px;
      flex-direction: row;
      transform: translate(
        ${({ responsiveWidth }) => responsiveWidth * 0.05}px,
        ${({ responsiveHeight }) => responsiveHeight * -0.37}px
      );
    }
    @media (${device.laptopL}) {
      flex-direction: row;
      transform: translate(
        ${({ responsiveWidth }) => responsiveWidth - 0.38 * responsiveWidth}px,
        ${({ responsiveWidth }) => -(responsiveWidth - 0.75 * responsiveWidth)}px
      );
    }
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items:  ${({alignment}) => alignment === 'left' ? 'flex-start': 'flex-end'};
  margin-left: ${({responsiveWidth}) => responsiveWidth * 0.01}px;
  margin-right: ${({responsiveWidth}) => responsiveWidth * 0.032}px;
  text-align: ${({alignment}) => alignment};
  width:  ${({responsiveWidth}) => responsiveWidth * 0.25}px;
  @media (${device.mobileS} and ${device.laptopLess}) {
    width: ${({responsiveWidth}) => responsiveWidth * 0.9}px;
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
`

