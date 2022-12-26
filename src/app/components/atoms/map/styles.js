import styled from "styled-components";

export const Root = styled.div`
  width: ${({isMobile}) => isMobile ? '100vw' : '50vw'};
  padding-left: -30px;
`