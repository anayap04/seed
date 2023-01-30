import styled from "styled-components";
import { DefaultTheme } from "../../../theme/themes";

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  justify-content: right;
  z-index: 100;
  margin-right: 0px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`

Container.defaultProps = {
  theme: DefaultTheme,
};

export const ListContent = styled.div`
  margin-left: 5px;
`
export const ButtonHeader = styled.div`
  margin-top: -12px;
  margin-bottom: -12px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 15px;
  background-color: ${({color}) => color};
`


export { Container, ButtonContainer };
