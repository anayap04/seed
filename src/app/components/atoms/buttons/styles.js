import styled from 'styled-components';
import { DefaultTheme } from '../../../../theme/themes';
import { device } from '../../../../theme/themes/DefaultTheme/screenSizes';

export const PrimaryContainer = styled.button`
  border: 0;
  border-radius: 20px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '18')}px;
  padding: 5px;
  padding-right: 10px;
  text-align: center;
  margin-left: ${({ margin }) => (margin ? margin : '24px')};
  background: rgb(15, 19, 24);
  background: linear-gradient(
    90deg,
    rgba(15, 19, 24, 1) 0%,
    rgba(36, 255, 190, 1) 33%,
    rgba(36, 255, 190, 1) 100%
  );
  display: ${({ icon }) => icon && 'flex'};
  flex-direction: row;
  width: ${({ width }) => width}px;
  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && theme.colors.green};
    cursor: pointer;
  }
  & > svg {
    margin-left: 20px;
    margin-right: 10px;
  }
`;

export const TextButton = styled.div`
  font-family: Poppins-Bold;
  color: ${({ theme }) => theme.colors.nero};
`;

TextButton.defaultProps = {
  theme: DefaultTheme
};

export const SecondaryContainer = styled.button`
  padding: 5px;
  margin-left: ${({ marginLeft }) => marginLeft || 24}px;
  background: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  width: ${({ width }) => width}px;
  border: 0;
  &:hover {
    color: ${({ theme }) => theme.colors.green};
    cursor: pointer;
  }
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 20px;
`;

SecondaryContainer.defaultProps = {
  theme: DefaultTheme
};

export const TextSecondary = styled.div`
  font-family: Poppins-SemiBold;
  color: ${({ theme, fontColor }) => fontColor || theme.colors.nero};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '18')}px;
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

TextSecondary.defaultProps = {
  theme: DefaultTheme
};

export const TextLink = styled.p`
  font-family: Poppins-Bold;
  font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '20px')};
  border-bottom: 3px ${({ theme, hasBackground }) =>
    hasBackground ? theme.colors.tangerine : theme.colors.green} solid;
  max-width: fit-content;
  margin-bottom: -5px;
  &:hover {
    color: ${({ theme }) => theme.colors.green};
    cursor: pointer;
  }
  @media (${device.mobileS}) {
    font-size: 24px
  }
  @media (${device.tablet}) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '20px')};
  }
}
`;

TextLink.defaultProps = {
  theme: DefaultTheme
};

export const LinkContainer = styled.div`
  padding-bottom: 0px;
  width: ${({ width }) => (width ? width : 180)}px;
  color: ${({ theme }) => theme.colors.nero};
  align-items: center;
  padding-left: ${({ hasBackground }) => (hasBackground ? '20px' : '0')};
  margin-left: ${({ margin }) => (margin ? margin : '20')}px;
  &:hover {
    color: ${({ theme }) => theme.colors.green};
    cursor: pointer;
    ${TextLink} {
      transform: scale(1.1);
    }
  }
`;

LinkContainer.defaultProps = {
  theme: DefaultTheme
};
