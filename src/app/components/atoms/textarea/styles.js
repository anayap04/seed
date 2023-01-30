import styled from "styled-components";

export const Content = styled.div`
  margin-top: 10px;
`

export const RootTextArea = styled.textarea`
  width: ${({width}) => width || 300}px;
  border: ${({theme}) => theme.green} 3px solid;
  background: ${({theme}) => theme.background};
  color:  ${({theme}) => theme.fonts};
  height: 150px;
  margin-top: 10px;
`