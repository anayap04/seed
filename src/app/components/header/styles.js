import styled from "styled-components";
import { DefaultTheme } from "../../../theme/themes";

const Container = styled.div`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.nero};
`;

Container.defaultProps = {
  theme: DefaultTheme,
};

export { Container };
