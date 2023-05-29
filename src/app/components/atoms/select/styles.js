import Select from 'react-select';
import styled from 'styled-components';
import { Label } from '../input/styles';

export const SelectContent = styled(Select)`
  border: ${({ theme }) => theme.colors.green} solid 2px !important;
  border-radius: 25px;
  width: ${({ customWidth }) => (customWidth ? customWidth : '250')}px;
  height: 50px;
  margin-top: 10px;
  font-family: Acumin-RPro;
  [class$='control'],
  [class$='control']:hover {
    border-color: transparent !important;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.nero};
    border-radius: 20px;
  }
`;

export const LabelCountry = styled(Label)`
  margin-bottom: 0px;
`;

export const Root = styled.div`
  padding-left: 10px;
  padding-top: 15px;
  margin-left: -10px;
`;
