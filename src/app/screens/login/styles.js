import styled from "styled-components";
import image from "../../../assets/imgs/trees.jpg";

const getGradient = (color) =>
  color === "#FFFFFF"
    ? "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 46%, rgba(255,255,255,0) 75%)"
    : "linear-gradient(90deg, rgba(13,13,13,1) 0%, rgba(13,13,13,1) 50%, rgba(13,13,13,0) 87%)";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 100vw;
  background: ${({ theme, isMobile }) =>
      isMobile ? theme.background : getGradient(theme.background)},
    url(${image});
  margin-bottom: ${({ additional }) => additional}px;
`;
export const FormContainer = styled.div`
  padding: ${({ width }) => width * 0.05}px;
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
  width: ${({isMobile}) => isMobile ? '85vw' : '300px'};
  background-color: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
  }
  & > {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

export const LinkContent = styled.div`
  width: ${({isMobile}) => isMobile ? '85vw' : '300px'};
  padding-top: 20px;
  text-align: center;
  padding-left: 17vw;
`;

export const ErrorContent = styled.div`
  width: 400px;
`;
export const PetitionDiv = styled.div`
  margin-top: 30px;
  width: 350px;
`;

export const InfoPopContent = styled.div`
  max-width: ${({ responsiveWidth }) => responsiveWidth * 0.9}px;
  border: ${({ theme }) => theme.primaryColor} 3px solid;
  border-radius:
  background-color: ${({ theme }) => theme.primaryColor + "bd"};
  height: 60px;
  padding-top: 15px;
  border-radius: 10px;
  padding-left: 10px;

`;
