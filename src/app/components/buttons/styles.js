import styled from "styled-components";
import { DefaultTheme } from "../../../theme/themes";
import { device } from "../../../theme/themes/DefaultTheme/screenSizes";

export const PrimaryContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.primaryColor};
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 24px;
  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
  }
`;


export const TextButton = styled.div`
  font-family: BebasNeue-Regular;
  color: ${({ theme }) => theme.fonts};
`;

TextButton.defaultProps = {
  theme: DefaultTheme,
};

export const SecondaryContainer = styled.div`
  padding: 5px;
  margin-left: 24px;
  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

SecondaryContainer.defaultProps = {
  theme: DefaultTheme,
};

export const TextSecondary = styled.div`
  font-family: BebasNeue-Regular;
  color: ${({ theme }) => theme.fonts};
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
  width: fit-content;
  border-bottom: 3px ${({ theme }) => theme.primaryColor} solid;
  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

LinkContainer.defaultProps = {
  theme: DefaultTheme,
};

export const TextLink = styled.div`
  font-family: BebasNeue-Regular;
  font-size: ${({fontSize}) => fontSize ? fontSize+'px' : '20px'};
  color: white;
  margin-bottom: -5px;
  &:hover {
    color: ${({ theme }) => theme.primaryColor};
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


