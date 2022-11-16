import styled from "styled-components";
import { MDBInput } from "mdb-react-ui-kit";

export const MDBInputSeed = styled(MDBInput)`
  & > input[type='text'] {
    color: ${({ theme }) => theme.fonts} !important;
    background-color: ${({ theme }) => theme.background} !important;
  }
`;
