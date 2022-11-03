import styled from "styled-components";
import { device } from "../../../theme/themes/DefaultTheme/screenSizes";

export const CardContainer = styled.div`
  width: 610px;
  heigth: 320px;
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
  height: 320px;
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
  width: 350px;
`;

export const CardTitle = styled.p`
  color: ${({ theme }) => theme.fonts};
  font-family: Bitter-SemiBold;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.fonts};
  font-size: 14px;
  font-family: Montserrat-Regular;
  margin-bottom: 10px;
`;

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
  height: 81px;
  bottom: 0;
  background-color: ${({ theme }) => theme.background}85;
  width: 250px;
  padding-top: 5px;
  text-align: left;
  padding-left: 20px;
  @media (${device.laptop}) { 
    width: 216px;
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
  margin-bottom: -2px;
  @media(${device.mobileAll}) {
    display: none;
  }
`;
