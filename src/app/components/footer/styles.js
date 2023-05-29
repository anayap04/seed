import styled from 'styled-components';

export const FooterContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100vw;
  padding-top: ${({ isMobile }) => (isMobile ? '15px' : '30px')};
  display: flex;
  flex-wrap: wrap;
  padding-bottom: ${({ isMobile }) => (isMobile ? '15px' : '30px')};
  padding-left: 30px;
`;

export const ContactContainer = styled.div`
  width: ${({ isMobile }) => (isMobile ? '100vw' : '40vw')};
  padding-left: ${({ isMobile }) => (isMobile ? '33vw' : '10vw')};
  margin-bottom: ${({ isMobile }) => (isMobile ? '10px' : '0px')};
  align-items: center;
`;
