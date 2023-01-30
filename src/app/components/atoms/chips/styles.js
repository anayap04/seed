import styled from "styled-components";
import { device } from "../../../../theme/themes/DefaultTheme/screenSizes";

export const ChipDiv = styled.div`
  border: ${({theme}) => theme.green} 4px solid;
  border-radius: 10px;
  padding-top: 4px;
  background-color: ${({theme, selected}) => selected ? theme.green + '80' : 'transparent'};
  width: fit-content;
  padding-left: 10px;
  padding-right: 10px;
  height: 44px;
  cursor: pointer;
  @media(${device.mobileAll}) {
    height: fit-content;
  }
`

export const ChipText  = styled.p`
  font-family: AcuminBdPro;
  font-size: 18px;
  color: ${({theme}) => theme.fonts};
`

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  padding-left: 10px;
  padding-top: 20px;
`

export const ChipSingle = styled.div`
  margin-right: 25px;
`