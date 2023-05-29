import styled from 'styled-components';
import { LinkContainer } from '../../components/atoms/buttons/styles';
import { Title } from '../../components/foundation/Typography';

export const Root = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100vw;
  height: 80vh;
  padding-top: 10vh;
  text-align: center;
  align-items: center;
  ${Title} {
    align-self: center;
    display: inline-block;
    margin-bottom: 50px;
  }
  ${LinkContainer} {
    display: inline-block;
    margin-top: 20px;
  }
  .svg {
    display: inline-block;
  }
`;
