import styled from 'styled-components';

export const ListContainer = styled.div`
  width: ${({ width }) => (width ? width : '60')}px;
  font-family: Poppins-Bold;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.nero};
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  z-index: 12;
  text-align: center;
  cursor: pointer;
`;

export const Item = styled.div`
  border: ${({ theme }) => theme.colors.green} 1px solid;
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;
