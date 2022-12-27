import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { device } from "../../../theme/themes/DefaultTheme/screenSizes";
import texture from "../../../assets/imgs/earth.jpeg";
import { SectionContainer } from "../../components/section/styles";
import {Title} from "../../components/foundation/Typography"

export const Root = styled.div`
  background-color: ${({ theme }) => theme.background};
  background: linear-gradient(
      ${({ theme }) => theme.background + "ed"},
      ${({ theme }) => theme.background + "eb"},
      ${({ theme }) => theme.background}
    ),
    url(${texture});
  width: 100vw;
  padding-bottom: 30px;
  @media (${device.laptop}) {
    height: 100vh;
  }
`;
export const Content = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding-top: 20px;
  padding-left: 30px;
`;

export const RowInvestment = styled(Row)`
  padding-left: 30px;
`;

export const ColInvestment = styled(Col)`
  align-items: center;
`;

export const SectionBonds = styled(SectionContainer)`
  text-align: center;
  
  @media (${device.mobileAll}), (pointer: none), (pointer: coarse) {
    padding-left: ${({ responsiveWidth }) => responsiveWidth * 0.25}px;
  }
  ${Title} {
    margin-left: ${({ responsiveWidth }) => responsiveWidth * 0.45}px;
  }
  padding-top: 50px;
`;

export const ProfileInfoInputs = styled.div``;

export const BtnFooter = styled.div`
  margin-top: 35px;
  padding-bottom: 35px;
  margin-left: -${({ responsiveWidth }) => responsiveWidth * 0.43}px;
`;

export const SubInfo = styled.div`
  align-text: center;
  padding-left: 30px;
`;
export const ContainerProfile = styled(Container)`
  max-width: ${({ responsiveWidth }) => responsiveWidth * 1.1}px;
  padding-bottom: 100px;
  background-color: ${({ theme }) => theme.background};
  margin-left: 0px;
  margin: 0px;
  margin-top: 30px;
`;
export const ColBonds = styled(Col)`
  padding-left: 80px;
`;

export const ColProfile = styled(Col)`
  margin-left: 10px;
  margin-right: 45px;
`;

export const RowProfile = styled(Row)`
  max-width: ${({ responsiveWidth }) => responsiveWidth * 0.9}px;
`;

export const Total = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
