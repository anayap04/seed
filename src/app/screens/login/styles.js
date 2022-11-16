import styled from "styled-components";
import image from "../../../assets/imgs/trees.jpg";
import { device } from "../../../theme/themes/DefaultTheme/screenSizes";

const getGradient = color => color === '#FFFFFF' ? 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 46%, rgba(255,255,255,0) 75%)' : 'linear-gradient(90deg, rgba(13,13,13,1) 0%, rgba(13,13,13,1) 50%, rgba(13,13,13,0) 87%)' ;

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
    padding-top: ${({ width }) => width * 0.1}px;
  }
  padding: ${({ width }) => width * 0.15}px;
`;

export const BtnSubmit = styled.input.attrs({
  type: "submit",
})`
  border: ${({ theme }) => theme.primaryColor} 2px solid;
  color: ${({ theme }) => theme.fonts};
  font-family: BebasNeue-Regular;
  padding: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;
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

export const LinkContent = styled.div`
  width: 300px;
  padding-top: 20px;
  padding-left: 45px;
`

export const ErrorContent = styled.div`
 width: 400px;
`
