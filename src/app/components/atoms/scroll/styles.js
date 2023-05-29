import styled, { keyframes } from 'styled-components';

const scrolldown = keyframes`
0%{
  transform: translateY(-10px);
  opacity: 0;
}
50%{
  transform: translateY(0px);
  opacity: 1;
}
100%{
  transform: translateY(10px);
  opacity: 0;
}
`;

export const ScrollDownContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 2px solid ${({ color }) => color};
  font-size: 30px;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const AngleDown = styled.div`
  animation: ${scrolldown} 1.5s ease infinite;
`;
