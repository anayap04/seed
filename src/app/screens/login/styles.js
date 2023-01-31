import styled from "styled-components";
import image from "../../../assets/imgs/trees.jpg";

const getGradient = (color) =>
  color === "#E3F2FD"
    ? "linear-gradient(90deg, rgba(227, 242, 253) 0%, rgba(227, 242, 253,1) 46%, rgba(227, 242, 253,0) 75%)"
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
  border: ${({ theme }) => theme.green} 2px solid;
  color: ${({ theme }) => theme.fonts};
  font-family: AcuminBdPro;
  padding: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;
  font-size: 24px;
  width: ${({isMobile}) => isMobile ? '85vw' : '300px'};
  background-color: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.green};
  }
  & > {
    color: ${({ theme }) => theme.green};
  }
`;

export const LinkContent = styled.div`
  width: ${({isMobile}) => isMobile ? '85vw' : '300px'};
  padding-top: 20px;
  text-align: center;
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
  border: ${({ theme }) => theme.green} 3px solid;
  border-radius:
  background-color: ${({ theme }) => theme.green + "bd"};
  height: 60px;
  padding-top: 15px;
  border-radius: 10px;
  padding-left: 10px;

`;
