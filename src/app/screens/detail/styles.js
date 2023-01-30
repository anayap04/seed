import { ProgressBar, Row } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { device } from "../../../theme/themes/DefaultTheme/screenSizes";
import { SectionContainer } from "../../components/section/styles";
import { fadeIn } from "react-animations";
import Countdown from "react-countdown";
import { PrimaryContainer } from "../../components/atoms/buttons/styles";
import { isMobile } from "react-device-detect";

const fadeAnimation = keyframes`${fadeIn}`;

export const Root = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 100vw;
  @media (${device.laptop}) {
    height: 100vh;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: 80% 80%;
    width: ${({ responsiveWidth }) => isMobile ? responsiveWidth * 0.99 :  responsiveWidth * 0.9}px;
    margin-left: ${({ responsiveWidth }) => isMobile ? responsiveWidth * 0.01 : responsiveWidth * 0.05}px;
    height: 450px;

`;

export const ContentInfo = styled.div`
  margin-left: ${({ responsiveWidth }) => responsiveWidth * 0.05}px;
  padding-top: 30px;
  animation: 1.5s ${fadeAnimation};
`;

export const RowDetail = styled(Row)`
  width: 95vw;
  margin-left: 0px;
`;

export const SectionDetail = styled(SectionContainer)`
  position: absolute;
  right: 0;
  width: ${({ responsiveWidth }) => responsiveWidth * 0.3}px;
  padding-top: 40px;
  padding-left: 17px;
  padding-bottom: 30px;
  @media(${device.laptopLess}) {
    position: relative;
    width: ${({ responsiveWidth }) => responsiveWidth * 0.8}px;
    margin-left: ${({ responsiveWidth }) => responsiveWidth * 0.01}px;
  }
`;

export const ProgressBarDiv = styled(ProgressBar)`
  width: ${({ responsiveWidth }) => responsiveWidth * 0.25}px;
  margin-right: 15px;
  height: 15px;
  margin-top: -10px;
  & > .progress {
    background-color: #f9f9f98c;
  }
  & > .progress-bar {
    background-color: ${({ theme }) => theme.green};
  }
`;

export const BodyContent = styled.div`
  padding-right: 30px;
  padding-top: 20px;
`;

export const CountdownStyle = styled(Countdown)`
  color: ${({ theme }) => theme.green};
  font-family: AcuminBdPro;
  font-size: 34px;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 25px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TextInfo = styled.div`
  margin-left: 10px;
`

export const BtnContainer = styled.div`
  padding-top: 20px;
  ${PrimaryContainer} {
    margin: 0px;
  }
`

export const ModalBtnContainer = styled.div`
  padding: 20px;
`

export const ContentModalInfo = styled.div`
  padding-left: 30px;
`
