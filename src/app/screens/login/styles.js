import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import { DefaultTheme } from '../../../theme/themes';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.nero};
  width: 100vw;
  padding-bottom: 200px;
`;

Container.defaultProps = {
  theme: DefaultTheme
};
export const FormContainer = styled.div`
  padding: ${({ width }) => width * 0.05}px;
  padding-bottom: 200px;
  width: 90vw;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 5vw;
  border-radius: 50px;
`;

FormContainer.defaultProps = {
  theme: DefaultTheme
};
export const TitleContainer = styled.div`
  padding: 15px 25px 5px 25px;
  background: rgb(15, 19, 24);
  background: linear-gradient(
    90deg,
    rgba(15, 19, 24, 1) 0%,
    rgba(36, 255, 190, 1) 33%,
    rgba(36, 255, 190, 1) 100%
  );
  position: ${({ isMobile }) => (isMobile ? 'relative' : 'absolute')};
  border-radius: 35px;
  margin-left: 12vw;
  margin-top: 2vh;
  width: ${({ isMobile }) => (isMobile ? '300px' : '23vw')};
  text-align: center;
`;

export const BtnSubmit = styled.input.attrs({
  type: 'submit'
})`
  border: transparent;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  font-family: Poppins-Bold;
  padding: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 50px;
  font-size: 24px;
  width: ${({ isMobile }) => (isMobile ? '85vw' : '300px')};
  margin-left: ${({ isMobile }) => (isMobile ? '0px' : '55vw')};
  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.nero};
  }
  & > {
    color: ${({ theme }) => theme.colors.nero};
  }
`;
BtnSubmit.defaultProps = {
  theme: DefaultTheme
};

export const InputsContainer = styled.div`
  width: 80w;
`;

export const ErrorContent = styled.div`
  width: 400px;
`;
export const PetitionDiv = styled.div`
  margin-top: 30px;
  width: 350px;
`;

export const InfoPopContent = styled.div`
  max-width: ${({ responsiveWidth }) =>
    isMobile ? responsiveWidth * 0.9 : responsiveWidth * 0.3}px;
  border: ${({ theme }) => theme.colors.green} 3px solid;
  border-radius:
  background-color: ${({ theme }) => theme.colors.green + 'bd'};
  height: 60px;
  padding-top: 15px;
  border-radius: 10px;
  padding-left: 10px;

`;
InfoPopContent.defaultProps = {
  theme: DefaultTheme
};

export const SummaryContainer = styled.div`
  width: 80vw;
  padding-top: 50px;
  padding-left: 25vw;
`;

export const ImageLogin = styled.img`
  width: 30vw;
  height: 30vw;
  border-radius: 50%;
  margin-top: -250px;
  margin-left: 35vw;
`;
