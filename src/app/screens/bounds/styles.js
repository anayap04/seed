import styled from "styled-components";
import { device } from "../../../theme/themes/DefaultTheme/screenSizes";

export const Root = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 100vw;
  padding-left: 30px;
  ${device.laptopL} {
    padding-left: 80px;
  }
`;

export const Counter = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const TableContainer = styled.div`
  padding-left: 30px;
`;

export const BtnContainer = styled.div`
  padding-top: 20px;
`
