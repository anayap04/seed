import styled from "styled-components";


export const ListContainer = styled.div`
  width: ${({width}) => width ? width : '60'}px;
  font-family: BebasNeue-Regular;
  font-size: 16px;
  color: ${({theme}) => theme.fonts};
  background-color: ${({theme}) => theme.background};
  position: absolute;
  z-index: 12;
  text-align: center;
  cursor: pointer;
`

export const Item = styled.div`
  border:  ${({theme}) => theme.primaryColor} 1px solid;
  &:hover {
    color: ${({theme}) => theme.primaryColor};
  }
`