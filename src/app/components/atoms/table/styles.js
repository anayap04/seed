import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import { LinkContainer } from '../buttons/styles';

export const TableRoot = styled(Table)`
  font-family: Poppins-Bold;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.nero};
  margin-top: 30px;
  padding-left: 20px;
`;

export const TableBody = styled.tbody`
  font-family: Acumin-RPro;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.nero};
`;

export const BtnTable = styled.td`
  margin-top: -10px;
  & > ${LinkContainer} {
    margin-left: 0px;
    margin-top: -10px;
  }
`;
