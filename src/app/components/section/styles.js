import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: ${({ screenWidth }) => screenWidth * 0.85}px;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: space-evenly;
  padding: ${({ screenWidth }) => screenWidth * 0.01}px;
  border-radius: 30px;
  margin-top: 30px;
`;
