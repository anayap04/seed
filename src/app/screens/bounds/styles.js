import styled from "styled-components";
import { device } from "../../../theme/themes/DefaultTheme/screenSizes";

export const Root = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 100vw;
  padding-left: 30px;
  @media(${device.laptopL}) {
    padding-left: 80px;
  }
  @media(${device.mobileAll}) {
    padding-left: 20px;
  }
`;

export const Counter = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  height: 40px;
`;

export const CounterLabel = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`

export const TableContainer = styled.div`
  padding-left: 30px;
  width: 40vw;
`;

export const BtnContainer = styled.div`
  padding-top: 20px;
`
