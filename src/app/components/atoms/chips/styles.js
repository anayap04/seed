import styled from 'styled-components';
import { device } from '../../../../theme/themes/DefaultTheme/screenSizes';
import { DefaultTheme } from '../../../../theme/themes';

export const ChipDiv = styled.div`
  border: ${({ theme }) => theme.colors.green} 4px solid;
  border-radius: 30px;
  padding-top: 4px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.green + '80' : 'transparent'};
  width: fit-content;
  padding-left: 10px;
  padding-right: 10px;
  height: 44px;
  cursor: pointer;
  @media (${device.mobileAll}) {
    height: fit-content;
  }
`;

ChipDiv.defaultProps = {
  theme: DefaultTheme
};

export const ChipText = styled.p`
  font-family: Poppins-Bold;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
`;

ChipText.defaultProps = {
  theme: DefaultTheme
};

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  padding-left: 10px;
  padding-top: 20px;
`;

export const ChipSingle = styled.div`
  margin-right: 25px;
`;
