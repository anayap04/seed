import styled from 'styled-components';
import { Body } from '../../components/foundation/Typography';
import { isMobile } from 'react-device-detect';
import { DefaultTheme } from '../../../theme/themes';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  & > p {
    margin-top: 10px;
    border-bottom: ${({ theme }) => theme.colors.green} 2px solid;
  }
  margin-bottom: 30px;
  margin-top: 30px;
`;

TitleContainer.defaultProps = {
  theme: DefaultTheme
};

export const QuestionContent = styled.div`
  border-bottom: ${({ theme }) => theme.colors.green} 2px solid;
  border-right: ${({ theme }) => theme.colors.green} 2px solid;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  padding-top: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  padding-right: 30px;
  width: fit-content;
  padding-left: ${isMobile ? 20 : 50}px;
`;

export const FaqContainer = styled.div`
  padding-bottom: 20vh;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: left;
`;

export const ViewQA = styled.div`
  width: 90vw;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
  white-space: pre-line;
  &: hover {
    cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
  }
  ${Body} {
    margin-top: 5px;
  }
`;

export const BodyContent = styled.div`
  padding-left: ${isMobile ? 20 : 50}px;
`;

export const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding-top: 12px;
  box-shadow: -2px 2px 13px 7px rgba(89, 89, 89, 0.32);
  -webkit-box-shadow: -2px 2px 13px 7px rgba(89, 89, 89, 0.32);
  -moz-box-shadow: -2px 2px 13px 7px rgba(89, 89, 89, 0.32);
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.white};
  padding-left: 10px;
  margin-right: 20px;
  margin-left: ${isMobile ? 20 : 50}px;
  margin-top: 10px;
`;
