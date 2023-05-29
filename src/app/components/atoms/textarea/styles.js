import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 10px;
`;

export const RootTextArea = styled.textarea`
  width: ${({ width }) => width || 300}px;
  border: ${({ theme }) => theme.colors.green} 3px solid;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.nero};
  height: 150px;
  margin-top: 10px;
`;
