import styled from "styled-components";

const Title = styled.p`
  font-size: 45px;
  color: ${({ theme }) => theme.fonts};
  font-family: AcuminBdPro;
  border-bottom: inset green 3px solid;
  width: fit-content;
  box-shadow: 0px -3px 0px 0px ${({ theme }) => theme.green} inset;
  heigth: 40px;
`;

const TitleSmall = styled.p`
  font-size: 36px;
  color: ${({ theme }) => theme.fonts};
  font-family: AcuminBdPro;
  border-bottom: inset green 3px solid;
  width: fit-content;
  box-shadow: 0px -3px 0px 0px ${({ theme }) => theme.green} inset;
  heigth: 40px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.fonts};
  font-family: AcuminBdPro;
  margin-bottom: -5px;
`;

const SubtitleHighlight = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.green};
  font-family: AcuminBdPro;
  margin-bottom: -5px;
`;

const BodyBold = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.fonts};
  font-family:Acumin-RPro;
  font-weight: 900;
`;
const Body = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.fonts};
  font-family:Acumin-RPro;
`;

const H2 = styled.p`
  font-size: 26px;
  color: ${({ theme }) => theme.fonts};
  font-family:Acumin-RPro;
`;

const BodySmall = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.fonts};
  font-family:Acumin-ProLight;
`;

const BodyError = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.error};
  font-family:Acumin-RPro;
`

export { Title, TitleSmall, Subtitle, SubtitleHighlight, Body, BodyError, BodySmall, BodyBold, H2 };
