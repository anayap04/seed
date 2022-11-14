import styled from "styled-components";
import { device } from "../../../theme/themes/DefaultTheme/screenSizes";

export const FooterContent = styled.div`
  height: 100px;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  text-align: center;
  width: 100vw;
  padding-top: 20px;
  position: ${({isFixed}) => isFixed && 'absolute'};
  bottom: ${({isFixed}) => isFixed && '0'};
  @media (${device.laptopLess}) {
    bottom: 0;
  }
`;
