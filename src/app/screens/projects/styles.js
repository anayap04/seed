import styled from "styled-components";
import { Col } from "react-bootstrap";

export const Root = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 100vw;
  padding-bottom: 30vh;
`;

export const Container = styled.div`
  padding-left: 30px;
  padding-top: 20px;
`;

export const CardsContainer = styled.div`
  margin-bottom: 40px;
`;


export const ColProject = styled(Col)`
  margin-top: 30px;
  margin-bottom: 20px;
  padding-left: ${({ width }) => width * 0.01}px;
  
`;