import styled from "styled-components";
import image from "../../../assets/imgs/trees.jpg";
import { device } from "../../../theme/themes/DefaultTheme/screenSizes";

const getGradient = color => color === '#FFFFFF' ? 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 46%, rgba(255,255,255,0) 75%)' : 'linear-gradient(90deg, rgba(13,13,13,1) 0%, rgba(13,13,13,1) 45%, rgba(13,13,13,0) 77%)' ;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 100vw;
  height: 100vh;
  position: fixed;
  @media (${device.laptop}) {
    background: 
        ${({theme}) => getGradient(theme.background)},
      url(${image});
  }
`;
export const FormContainer = styled.div`
  @media (${device.laptop}) {
    width: 50vw;
  }
  padding: ${({ width }) => width * 0.15}px;
`;

export const BtnSubmit = styled.input.attrs({
  type: "submit",
  value: "Login",
})`
  border: ${({ theme }) => theme.primaryColor} 2px solid;
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
