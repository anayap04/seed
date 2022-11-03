import styled from "styled-components";


export const ListContainer = styled.div`
  width: ${({width}) => width ? width : '30px'};
  font-family: BebasNeue-Regular;
  font-size: 16px;
  color: ${({theme}) => theme.fonts};
  position: absolute;
  height: 60px;
  z-index: 12;
  padding-left: 20px;
  cursor: pointer;
`

export const Item = styled.div`
  &:hover {
    color: ${({theme}) => theme.primaryColor};
  }
`