import styled from 'styled-components';
import { Subtitle, Title, Body } from '../../components/foundation/Typography';

export const Root = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100vw;

  margin-bottom: 150px;
  padding-bottom: 100px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
`;
export const ContactSection = styled.div`
  width: ${({ isMobile }) => (isMobile ? '100vw' : '50vw')};
  padding-left: 30px;
`;

export const LocationSection = styled.div`
  width: ${({ isMobile }) => (isMobile ? '100vw' : '50vw')};
  ${Title} {
    margin-left: ${({ isMobile }) => (isMobile ? '30px' : '10px')};
    margin-bottom: 15px;
  }
  ${Body}, ${Subtitle} {
    margin-left: ${({ isMobile }) => (isMobile ? '30px' : '10px')};
    margin-bottom: 0px;
  }
`;

export const BtnSubmit = styled.input.attrs({
  type: 'submit'
})`
  border: ${({ theme }) => theme.colors.green} 2px solid;
  color: ${({ theme }) => theme.colors.nero};
  font-family: Poppins-Bold;
  padding: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;
  font-size: 24px;
  width: ${({ width }) => width}px;
  background-color: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
  & > {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const SuccessIndicator = styled.div`
  border: ${({ theme }) => theme.colors.green} 2px solid;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.green}38;
  width: ${({ isMobile }) => (isMobile ? '80vw' : '40vw')};
  ${Body} {
    margin-bottom: 0px;
  }
`;
