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
`;
const ButtonContainer = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: row;
`

Container.defaultProps = {
  theme: DefaultTheme,
};

export { Container, ButtonContainer };
