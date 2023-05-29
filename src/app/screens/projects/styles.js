import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { DefaultTheme } from '../../../theme/themes';
import background from '../../../assets/imgs/backLight.png';

export const Root = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  padding-bottom: 30vh;
`;

Root.defaultProps = {
  theme: DefaultTheme
};

export const Container = styled.div`
  padding-left: 30px;
  padding-top: 20px;
`;

export const CardsContainer = styled.div`
  margin-bottom: 40px;
`;

export const ColProject = styled(Col)`
  margin-top: 50px;
  margin-bottom: 50px;
  padding-top: 20px;
  padding-left: ${({ width }) => width * 0.01}px;
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
