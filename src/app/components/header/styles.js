import styled from 'styled-components';
import { DefaultTheme } from '../../../theme/themes';

export const Container = styled.div`
  width: 100%;
  background: transparent;
  padding-top: 22px;
  padding-bottom: 12px;
  display: flex;

  z-index: 100;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 65%;
  &: hover {
    cursor: pointer;
  }
`;

Container.defaultProps = {
  theme: DefaultTheme
};

export const ListContent = styled.div`
  margin-left: 5px;
`;
export const ButtonHeader = styled.div`
  padding-bottom: 12px;
  padding-top: 3px;
  padding-right: ${({ enablePadding }) => (enablePadding ? '0px' : '15px')};
  padding-left: ${({ enablePadding }) => (enablePadding ? '0px' : '30px')};
  border-top-left-radius: ${({ isFirst }) => (isFirst ? '20px' : '0px')};
  border-bottom-left-radius: ${({ isFirst }) => (isFirst ? '20px' : '0px')};
  border-top-right-radius: ${({ isLast }) => (isLast ? '20px' : '0px')};
  border-bottom-right-radius: ${({ isLast }) => (isLast ? '20px' : '0px')};
  height: 35px;
  color: ${({ theme }) => theme.colors.green};
  background-color: ${({ color }) => color};
`;

export const LogoContainer = styled.div`
  width: 20%;
  padding-left: 20px;
`;

export const AccesBtnContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  width: 180px;
  margin-left: auto;
  margin-right: 0;
  border-radius: 14px 0px 0px 14px;
`;

export const MenuItem = styled.a`
  backgroung-color: ${({ theme }) => theme.colors.white} !important;
  font-family: Acumin-RPro;
  &:link {
    text-decoration: none;
  }
  &:visited {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }
`;

MenuItem.defaultProps = {
  theme: DefaultTheme
};
