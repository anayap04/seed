import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { H2Bold, Subtitle } from '../foundation/Typography';
import { DefaultTheme } from '../../../theme/themes';
const fadeAnimation = keyframes`${fadeIn}`;

export const Content = styled.div`
  padding-top: 25px;
  display: flex;
  flex-direction: row;
`;

export const ColInfo = styled.div`
  width ${({ width }) => (width ? width * 0.8 : '12vw')};
  height: 29vw;
  margin-left: -10vw;
  text-align: left;
  padding-left: 12vw;
  padding-top: 5vw;
  background-color: ${({ theme, isDark }) => (isDark ? theme.colors.nero : theme.colors.white)};
  & > ${Subtitle}, ${H2Bold} {
    margin-top: 0px;
    magrin-bottom: 0px;
  }

`;

ColInfo.defaultProps = {
  theme: DefaultTheme
};

export const ColTitle = styled.div`
  padding: 12vw 0px 20px 20px;
  width ${({ width, isMobile }) => (isMobile ? width * 0.6 : width * 0.35)}px;
  background-color: ${({ theme }) => theme.colors.green};
  height: 29vw;
  border-top-right-radius: 90px;
  text-align: left;
  & > p {
    margin-bottom: -5px;
  }
`;

export const CardContainer = styled.div`
  width: ${({ width }) => width * 0.95}px;
  background-size: ${({ width }) => width * 0.95}px;
  animation: 0.5s ${fadeAnimation};
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  padding-left: 5vw;
`;

export const ImageStyled = styled.img`
  border-radius: 50%;
  height: 33vw;
  width: 33vw;
  z-index: 10;
`;
