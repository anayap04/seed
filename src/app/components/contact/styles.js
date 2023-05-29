import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  padding-left: 12vw;
`;

export const ImageContact = styled.img`
  margin-left: -10px;
  z-index: 100;
  margin-top: 50px;
`;

export const ContactContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  border-top-right-radius: 50px;
  width: 55vw;
  height: 400px;
  padding: 30px;
  padding-left: 200px;
  margin-top: 80px;
  margin-left: -15vw;
`;
