import { Table } from "react-bootstrap";
import styled from "styled-components";

export const TableRoot = styled(Table)`
  font-family: Bitter-SemiBold;
  font-size: 18px;
  color: ${({ theme }) => theme.fonts};
  margin-top: 30px;
  padding-left: 20px;
`;

export const TableBody = styled.tbody`
  font-family: Montserrat-Regular;
  font-size: 16px;
  color: ${({ theme }) => theme.fonts};
`;

export const BtnTable = styled.td`
  margin-top: -10px;
`