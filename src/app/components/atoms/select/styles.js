import Select from "react-select";
import styled from "styled-components";

export const SelectContent = styled(Select)`
  border: ${({theme}) => theme.green} solid 2px !important;
  width:  ${({customWidth}) => customWidth ? customWidth : '250'}px;
  height: 50px;
  margin-top: 30px;
  font-family:Acumin-RPro;
  [class$="control"], [class$="control"]:hover {
    border-color: transparent !important;
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.font};
  }
`