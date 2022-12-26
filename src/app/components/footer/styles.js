import styled from "styled-components";

export const FooterContent = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 100vw;
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  border-top: ${({theme}) => theme.primaryColor} 3px solid;
`;

export const ImageContainer = styled.div`
  width: 30vw;
  padding-left: 50px;
`

export const ContactContainer = styled.div`
  width: 40vw;
  padding-left: 10vw;
  align-items: center;

`

export const IconRows = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

`


export const SocialNetworkContainer = styled.div`
  width: 30vw;
  text-align: center;
  ${IconRows} {
    padding-left: 7vw;
  }
`
