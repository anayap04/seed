import Select from "react-select";
import styled from "styled-components";

export const SelectContent = styled(Select)`
  border: ${({theme}) => theme.primaryColor} solid 2px !important;
  width:  ${({customWidth}) => customWidth ? customWidth : '280'}px;
  
  height: 50px;
 
  margin-top: 30px;
  font-family: Montserrat-Regular;
  [class$="control"], [class$="control"]:hover {
    border-color: transparent !important;
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.font};
  }
`