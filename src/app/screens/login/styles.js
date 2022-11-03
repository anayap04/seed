import styled from "styled-components";
import image from "../../../assets/imgs/trees.jpg";
import { device } from "../../../theme/themes/DefaultTheme/screenSizes";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 100vw;
  height: 100vh;
  position: fixed;
  @media (${device.laptop}) {
    background: linear-gradient(
        90deg,
        rgba(13, 13, 13, 1) 50%,
        transparent 90%,
        rgba(13, 13, 13, 1) 100%
      ),
      url(${image});
  }
`;
export const FormContainer = styled.div`
  @media (${device.laptop}) {
    width: 50vw;
    padding: ${({ width }) => width * 0.15}px;
  }
`;

export const BtnSubmit = styled.input.attrs({
  type: "submit",
  value: "Login",
})`
  border: ${({ theme }) => theme.primaryColor}  2px solid;
  color: ${({ theme }) => theme.fonts};
  font-family: BebasNeue-Regular;
  padding: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 30px;
  font-size: 24px;
  width: 300px;
  background-color: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
  }
  & > {
    color: ${({ theme }) => theme.primaryColor};
  }
`;
