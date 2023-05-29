import { ProgressBar } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import Countdown from 'react-countdown';
import { isMobile } from 'react-device-detect';
import { DefaultTheme } from '../../../theme/themes';
import background from '../../../assets/imgs/backLight.png';
import { SecondaryContainer } from '../../components/atoms/buttons/styles';

const fadeAnimation = keyframes`${fadeIn}`;

export const Root = styled.div`
  background-image: url(${background});
  background-size: cover;
  width: 100vw;
  padding-bottom: 30vh;
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: 80% 80%;
  width: 95vw;
  border-top-right-radius: ${isMobile ? 150 : 250}px;
  height: 450px;
`;

export const ContentInfo = styled.div`
  margin-left: ${isMobile ? '30px' : '50px'};
  padding-top: 30px;
  animation: 1.5s ${fadeAnimation};
`;

export const SectionDetail = styled.div`
  display: flex;
  flex-display: row;
  margin-left: ${isMobile ? '1vw' : '15vw'};
  margin-top: 50px;
`;

export const SectionDetailInfo = styled.div`
  width: ${isMobile ? '80vw' : '55vw'};
  padding-top: 40px;
  padding-left: ${isMobile ? '5vw' : '17vw'};
  padding-bottom: 30px;
  margin-left: ${isMobile ? '5vw' : '-15vw'};
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.green};
  border-top-right-radius: 150px;
  & > p {
    margin: 5;
  }
  height: 300px;
  z-index: 0;
`;
SectionDetailInfo.defaultProps = {
  theme: DefaultTheme
};

export const ProgressBarDiv = styled(ProgressBar)`
  width: ${isMobile ? 70 : 35}vw;
  margin-right: 15px;
  height: 25px;
  border-radius: 25px;
  margin-top: -10px;
  & > .progress {
    background-color: #f9f9f98c;
  }
  & > .progress-bar {
    background-color: ${({ theme }) => theme.colors.nero};
    border-radius: 25px;
    color: ${({ theme }) => theme.colors.green};
    font-size: 16px;
    font-family: Poppins-SemiBold;
  }
`;

export const BodyContent = styled.div`
  padding-right: 30px;
  padding-top: 20px;
`;

export const CountdownStyle = styled(Countdown)`
  color: ${({ theme }) => theme.colors.nero};
  font-family: Poppins-Bold;
  font-size: 34px;
  margin-top: 5px;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 25px;
`;

export const IconContainer = styled.div`
  width: ${isMobile ? 70 : 100}px;
  height: ${isMobile ? 70 : 100}px;
  border-radius: 50%;
  padding-top: ${isMobile ? 12 : 25}px;
  box-shadow: -2px 2px 13px 7px rgba(89, 89, 89, 0.32);
  -webkit-box-shadow: -2px 2px 13px 7px rgba(89, 89, 89, 0.32);
  -moz-box-shadow: -2px 2px 13px 7px rgba(89, 89, 89, 0.32);
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.white};
  padding-left: ${isMobile ? 15 : 20}px;
  margin-top: ${isMobile ? 7 : 0}px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: ${isMobile ? 'column' : 'row'};
`;

export const TextInfo = styled.div`
  margin-left: -50px;
  background-color: ${({ theme }) => theme.colors.green};
  width: ${isMobile ? '75vw' : '25vw'};
  padding-left: ${isMobile ? '15vw' : '5vw'};
  border-radius: 0px 50px 50px 0px;
  & > p {
    margin-top: 5px;
    margin-bottom: 2px;
  }
  padding-top: ${isMobile ? 0 : 10}px;
  height: ${isMobile ? 65 : 80}px;
  margin-top: 10px;
`;

TextInfo.defaultProps = {
  theme: DefaultTheme
};

export const BtnContainer = styled.div`
  margin-top: 50px;
  & > ${SecondaryContainer} {
    margin-top: 20px;
    border-radius: 30px 0px 0px 30px;
  }
  margin-left: 11.05vw;
`;

export const ImageDetail = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  z-index: 10;
`;

export const ModalBtnContainer = styled.div`
  padding: 20px;
`;

export const ContentModalInfo = styled.div`
  padding-left: 30px;
`;
