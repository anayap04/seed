import styled, { keyframes } from "styled-components";
import ProgressBar from "react-bootstrap/ProgressBar";
import { fadeIn } from "react-animations";
const fadeAnimation = keyframes`${fadeIn}`;

export const Content = styled.div`
  width: ${({ width, isMobile }) => (isMobile ? width * 0.9 : width * 0.4)}px;
  margin: 0 0 0 auto;
  display: flex;
  height: 257px;
  flex-direction: row;
  padding-top: 77px;
  
`;

export const ColInfo = styled.div`
  width ${({ width }) => (width ? width * 0.8 : "12vw")};
  height: 227px;
  text-align: center;
  display: grid;

`;

export const Row = styled.div`
  width: ${({ width, isMobile }) => (isMobile ? width * 0.3 : width * 0.15)}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  text-align: center;
  height: 128.5px;
  padding-top: 20px;
`;

export const ColTitle = styled.div`
  padding: 10px 0px 0px 10px;
  width ${({ width, isMobile }) => (isMobile ? width * 0.6 : width * 0.25)}px;
  background-color: ${({ theme }) => theme.backgroundLighter};
  height: 257px;
`;

export const CardContainer = styled.div`
  width: ${({ width }) => width * 0.95}px;
  background-image: url(${({ urlImage }) => urlImage});
  background-size: ${({ width }) => width * 0.95}px;
  height: 334px;
  object-fit: cover;
  object-position: 100% 100%;
  animation: 0.5s ${fadeAnimation};
  margin-top: 30px;
  &:hover {
    ${Content} {
      height: 333px;
      padding-top: 0px;
      width: ${({ width }) => width * 0.95}px;
    }
    ${ColTitle} {
      margin-top: 0;
      width: ${({ width, isMobile }) =>
        isMobile ? width * 0.7 : width * 0.9}px;
      transition: all 0.5s ease 0.1s;
      background-color: ${({ theme }) => theme.backgroundLighter}de;
      height: 334px;
    }
    ${Row} {
      height: 167px;
      transition: 0.3s ease-in-out;
    }
  }
`;

export const BodyDiv = styled.div`
  width: 70vw;
`;
export const InfoColumn = styled.div`
  width: 35vw;
  text-align: center;
`

export const MoreInfoContent = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 60vw;

`

export const ProgressBarDiv = styled(ProgressBar)`
  width: 160px;
  height: 10px;
  margin-top: -15px;
  margin-left: 10px;
  & > .progress {
    background-color: #f9f9f98c;
  }
  & > .progress-bar {
    background-color: ${({ theme }) => theme.green};
  }
`;
