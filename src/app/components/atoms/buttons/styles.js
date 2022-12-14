import styled from "styled-components";
import { DefaultTheme } from "../../../../theme/themes";
import { device } from "../../../../theme/themes/DefaultTheme/screenSizes";

export const PrimaryContainer = styled.button`
  border: 2px solid ${({ theme, disabled }) => disabled ? theme.disabled : theme.primaryColor };
  font-size: ${({fontSize}) => fontSize ? fontSize : '18'}px;
  background-color: transparent;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: ${({margin}) => margin ? margin : '24px'};
  width: ${({width}) => width}px;
  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && theme.primaryColor};
    cursor: pointer;
  }
`;


export const TextButton = styled.div`
  font-family: BebasNeue-Regular;
  color: ${({ theme }) => theme.fonts};
`;

TextButton.defaultProps = {
  theme: DefaultTheme,
};

export const SecondaryContainer = styled.button`
  padding: 5px;
  margin-left: 24px;
  background: transparent;
  width: ${({width}) => width}px;
  border: 0;
  &:hover {
    color: ${({ theme }) => theme.primaryColor};
    cursor: pointer;
  }
`;

SecondaryContainer.defaultProps = {
  theme: DefaultTheme,
};

export const TextSecondary = styled.div`
  font-family: BebasNeue-Regular;
  color: ${({ theme }) => theme.fonts};
  font-size: ${({fontSize}) => fontSize ? fontSize : '18'}px;
  &:hover {
    color: ${({ theme }) => theme.primaryColor};
}
`;

TextSecondary.defaultProps = {
  theme: DefaultTheme,
};

export const LinkContainer = styled.div`
  margin-left: 24px;
  padding-bottom: 0px;
  width: 180px;
  color: ${({ theme }) => theme.fonts};
  text-align: center;
  align-items: center;
  &:hover {
    color: ${({ theme }) => theme.primaryColor};
    cursor: pointer;
  }
`;

LinkContainer.defaultProps = {
  theme: DefaultTheme,
};

export const TextLink = styled.p`
  font-family: BebasNeue-Regular;
  font-size: ${({fontSize}) => fontSize ? fontSize+'px' : '20px'};
  border-bottom: 3px ${({ theme }) => theme.primaryColor} solid;
  max-width: fit-content;
  margin-bottom: -5px;
  &:hover {
    color: ${({ theme }) => theme.primaryColor};
    cursor: pointer;
  }
  @media (${device.mobileS}) {
    font-size: 24px
  }
  @media (${device.tablet}) {
    font-size: ${({fontSize}) => fontSize ? fontSize+'px' : '20px'};
  }
}
`;

TextLink.defaultProps = {
  theme: DefaultTheme,
};


