import styled from "styled-components";
import { device } from "../../../theme/themes/DefaultTheme/screenSizes";
import ProgressBar from 'react-bootstrap/ProgressBar';

export const CardContainer = styled.div`
  width: 610px;
  heigth: 370px;
  border: ${({ theme }) => theme.primaryColor} 2px solid;
  display: flex;
  flex-direction: row;
  @media (${device.laptop}) { 
    width: 560px;
  }
  @media(${device.mobileAll}) {
    width: 320px;
  }
`;
export const ImageFragment = styled.div`
  width: 250px;
  height: 370px;
  border-right: ${({ theme }) => theme.primaryColor} 2px solid;
  background: url(${({url}) => url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (${device.laptop}) { 
    width: 230px;
  }
  @media(${device.mobileAll}) {
    width: 0px;
  }
`;

export const TextFragment = styled.div`
  padding-left: 20px;
  paddig-right: 20px;
  padding-top: 10px;
  text-align: left;
  width: 340px;
  height: 250px;
`;

export const TitleContent = styled.div`
 height: 80px;
 margin-bottom: 10px;
`

export const CardTitle = styled.p`
  color: ${({ theme }) => theme.fonts};
  font-family: Bitter-SemiBold;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const ContentBody = styled.div`
 height: 120px;
 margin-bottom: 10px;
 width: 298px;
`


export const InfoSub = styled.div`
  display: flex;
  flex-direction: row;
`;
export const TitleInfo = styled.p`
  color: ${({ theme }) => theme.fonts};
  font-family: Bitter-SemiBold;
  font-size: 12px;
  margin-bottom: 3px;
`;

export const InfoContainer = styled.div`
  width: 140px;
  text-align: center;
  margin-top: 2px;
  margin-bottom: 5px;
`;

export const FooterImg = styled.div`
  position: absolute;
  height: ${({onHover}) => onHover ? '160px' : '81px'};
  bottom: 0;
  background-color: ${({ theme }) => theme.background}85;
  width: 250px;
  padding-top: 5px;
  text-align: left;
  padding-left: 20px;
  @media (${device.laptop}) { 
    width: 224px;
  }
  @media(${device.mobileAll}) {
    width: 0px;
    display: none;
  }
 
`;

export const ProfitTitle = styled.p`
  color: ${({ theme }) => theme.primaryColor};
  font-family: Bitter-SemiBold;
  font-size: 18px;
  margin-bottom: -5px;
  @media(${device.mobileAll}) {
    display: none;
  }
`;

export const ProgressBarDiv = styled(ProgressBar)`
  width: 180px;
  height: 10px;
  margin-top: -15px;
  & > .progress {
    background-color: #f9f9f98c
  }
  & > .progress-bar {
    background-color: ${({theme}) => theme.primaryColor};
  }
`
