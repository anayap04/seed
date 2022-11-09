import styled from "styled-components";
import { device } from "../../../theme/themes/DefaultTheme/screenSizes";
import { Col } from "react-bootstrap";

export const Root = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 100vw;
  padding-bottom: 50px;
`;

export const Container = styled.div`
  padding-left: 30px;
  padding-top: 20px;
`;

export const CardsContainer = styled.div`
  margin-bottom: 40px;
`;


export const ColProject = styled(Col)`
  margin-top: 30px;
  margin-bottom: 20px;
  padding-left: ${({ responsiveWidth }) => responsiveWidth * 0.01}px;
  @media (${device.laptopL}) {
    padding-left: ${({ responsiveWidth }) => responsiveWidth * 0.1}px;
  }
  @media (${device.mobileAll}) {
    padding-left: ${({ responsiveWidth }) => responsiveWidth * 0.05}px;
  }
  
`;