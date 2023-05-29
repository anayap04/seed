import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { DefaultTheme } from '../../../theme/themes';
import ticket from '../../../assets/imgs/coupon.png';
import { Group } from '../../components/atoms/chips/styles';
import background from '../../../assets/imgs/backDark2.png';

export const Root = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  padding-bottom: 80px;
  align-items: center;
  ${Group} {
    margin-top: 30px;
    margin-bottom: 10px;
    width: 100vw;
    padding-left: 33vw;
  }
`;

Root.defaultProps = {
  theme: DefaultTheme
};

export const Content = styled.div`
  padding-top: 20px;
  padding-left: 7vw;
`;

Content.defaultProps = {
  theme: DefaultTheme
};

export const RowInvestment = styled(Row)`
  padding-left: 30px;
`;

export const ColInvestment = styled(Col)`
  align-items: center;
`;

export const BondsTitle = styled.div`
  display: flex;
  padding-top: 220px;
  padding-left: 50px;
  height: 310px;
  width: 35vw;
  margin-top: 20px;
`;

BondsTitle.defaultProps = {
  theme: DefaultTheme
};

export const SectionBonds = styled.div`
  background-image: url(${ticket});
  width: 60vw;
  background-size: cover;
  height: 350px;
  padding-top: 5px;
  padding-left: 40px;
  margin-left: 13vw;
  margin-top: 10vh;
  margin-bottom: 60px;
`;

export const TitleContainer = styled.div`
  display: flex;
  & > p {
    margin-right: 15px;
    margin-top: -15px;
  }
  padding-left: 50px;
  padding-top: 20px;
`;

export const ProfileInfoInputs = styled.div``;

export const BtnFooter = styled.div`
  margin-top: 35px;
  padding-bottom: 35px;
`;

export const SubInfo = styled.div`
  align-text: center;
  padding-left: 30px;
`;
export const ContainerProfile = styled(Container)`
  max-width: ${({ responsiveWidth }) => responsiveWidth * 0.8}px;
  padding-bottom: 100px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: 0px;
  margin: 0px;
  margin-top: 30px;
`;

ContainerProfile.defaultProps = {
  theme: DefaultTheme
};
export const ColBonds = styled(Col)`
  padding-left: 80px;
`;

export const ColProfile = styled(Col)`
  margin-left: 10px;
  margin-right: 45px;
`;

export const RowProfile = styled(Row)`
  max-width: ${({ responsiveWidth }) => responsiveWidth * 0.9}px;
`;

export const Total = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const BondsQty = styled.div`
  margin-right: 10vw;
  & > p {
    margin-top: 0px;
    margin-bottom: -20px;
  }
  margin-top: -50px;
`;
