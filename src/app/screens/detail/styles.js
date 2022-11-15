import { ProgressBar, Row } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { device } from "../../../theme/themes/DefaultTheme/screenSizes";
import { SectionContainer } from "../../components/section/styles";
import { fadeIn } from "react-animations";
import Countdown from "react-countdown";

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
  @media (${device.laptop}) {
    width: ${({ responsiveWidth }) => responsiveWidth * 0.9}px;
    margin-left: ${({ responsiveWidth }) => responsiveWidth * 0.05}px;
    height: 450px;
  }
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
  @media(${device.mobileAll}) {
    position: relative;
    width: ${({ responsiveWidth }) => responsiveWidth * 0.8}px;
    margin-left: ${({ responsiveWidth }) => responsiveWidth * 0.01}px;
  }
`;

export const ProgressBarDiv = styled(ProgressBar)`
  width: ${({ responsiveWidth }) => responsiveWidth * 0.28}px;
  height: 15px;
  margin-top: -10px;
  & > .progress {
    background-color: #f9f9f98c;
  }
  & > .progress-bar {
    background-color: ${({ theme }) => theme.primaryColor};
  }
`;

export const BodyContent = styled.div`
  padding-right: 30px;
  padding-top: 20px;
`;

export const CountdownStyle = styled(Countdown)`
  color: ${({ theme }) => theme.primaryColor};
  font-family: BebasNeue-Regular;
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
  padding-left: 20px;
  padding-top: 20px;
`

export const ModalBtnContainer = styled.div`
  padding: 20px;

`
