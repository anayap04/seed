import styled from "styled-components";

export const FooterContent = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 100vw;
  padding-top: ${({ isMobile }) => (isMobile ? "15px" : "30px")};
  display: flex;
  flex-wrap: wrap;
  padding-bottom: ${({ isMobile }) => (isMobile ? "15px" : "30px")};
  border-top: ${({ theme }) => theme.green} 3px solid;
`;

export const ImageContainer = styled.div`
  width: 30vw;
  padding-left: 50px;
`;

export const ContactContainer = styled.div`
  width: ${({ isMobile }) => (isMobile ? "100vw" : "40vw")};
  padding-left: ${({ isMobile }) => (isMobile ? "33vw" : "10vw")};
  margin-bottom: ${({ isMobile }) => (isMobile ? "10px" : "0px")};
  align-items: center;
`;

export const IconRows = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const SocialNetworkContainer = styled.div`
  width: ${({ isMobile }) => (isMobile ? "100vw" : "30vw")};
  text-align: center;
  ${IconRows} {
    padding-left: 25vw;
  }
`;
