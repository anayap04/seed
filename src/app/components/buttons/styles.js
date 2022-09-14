import styled from "styled-components";
import { DefaultTheme } from "../../../theme/themes";

export const PrimaryContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.medAquamarine};
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.medAquamarine};
  }
`;

PrimaryContainer.defaultProps = {
  theme: DefaultTheme,
};

export const TextButton = styled.div`
  font-family: BebasNeue-Regular;
  color: ${({ theme }) => theme.colors.white};
`;

TextButton.defaultProps = {
  theme: DefaultTheme,
};

export const SecondaryContainer = styled.div`
  width: 60px;
  padding: 5px;
  &:hover {
    color: ${({ theme }) => theme.colors.medAquamarine};
  }
`;

SecondaryContainer.defaultProps = {
  theme: DefaultTheme,
};

export const TextSecondary = styled.div`
  font-family: BebasNeue-Regular;
  color: ${({ theme }) => theme.colors.white}
  &:hover {
    color: ${({ theme }) => theme.colors.medAquamarine};
}
`;

TextSecondary.defaultProps = {
  theme: DefaultTheme,
};
