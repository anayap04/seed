import styled from "styled-components";

const Title = styled.p`
  font-size: 45px;
  color: ${({ theme }) => theme.fonts};
  font-family: BebasNeue-Regular;
  border-bottom: inset green 3px solid;
  width: fit-content;
  box-shadow: 0px -3px 0px 0px ${({ theme }) => theme.primaryColor} inset;
  heigth: 40px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.fonts};
  font-family: Bitter-SemiBold;
  margin-bottom: -5px;
`;

const BodyBold = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.fonts};
  font-family: Montserrat-Regular;
  font-weight: 900;
`;
const Body = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.fonts};
  font-family: Montserrat-Regular;
`;

const BodySmall = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.fonts};
  font-family: Montserrat-Light;
`;

const BodyError = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.error};
  font-family: Montserrat-Regular;
`

export { Title, Subtitle, Body, BodyError, BodySmall, BodyBold };
