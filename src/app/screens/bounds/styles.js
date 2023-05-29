import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import { device } from '../../../theme/themes/DefaultTheme/screenSizes';
import { Body, Subtitle } from '../../components/foundation/Typography';
import ticket from '../../../assets/imgs/ticket.png';

export const Root = styled.div`
  width: 100vw;
  margin-top: 80px;
  padding-left: 30px;
  @media (${device.laptopL}) {
    padding-left: 80px;
  }
  @media (${device.mobileAll}) {
    padding-left: 20px;
  }
  padding-bottom: 100px;
`;

export const ColPay = styled(Col)`
  padding-top: 30px;
  ${Body}
  & > * {
    color: ${({ theme }) => theme.colors.nero};
  }
`;
export const Counter = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  height: 40px;
`;

export const CounterLabel = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

export const TableContainer = styled.div`
  padding-left: 30px;
  width: 35vw;
  height: 800px;
  background-image: url(${ticket});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 250px;
`;

export const BtnContainer = styled.div`
  padding-top: 20px;
  margin-bottom: 30px;
`;

export const Instrunctions = styled.div`
  margin-top: 20px;
  padding: 10px;
  & > img {
    width: 100%;
  }
  ${Subtitle} {
    margin-bottom: 10px;
  }
  ${Body} {
    margin-top: 10px;
  }
`;
