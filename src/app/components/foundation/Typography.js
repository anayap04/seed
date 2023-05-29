import styled from 'styled-components';

const Title = styled.p`
  font-size: 45px;
  color: ${({ theme, color }) => color || theme.colors.nero};
  font-family: Poppins-Bold;
  width: fit-content;
`;

const TitleSmall = styled.p`
  font-size: 36px;
  color: ${({ theme, color }) => color || theme.colors.nero};
  font-family: Poppins-SemiBold;
  width: fit-content;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: ${({ theme, color }) => color || theme.colors.nero};
  font-family: Poppins-SemiBold;
`;

const SubtitleHighlight = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.green};
  font-family: Poppins-SemiBold;
`;

const BodyBold = styled.p`
  font-size: 16px;
  color: ${({ theme, color }) => color || theme.colors.nero};
  font-family: Poppins-SemiBold;
  font-weight: 900;
`;
const Body = styled.p`
  font-size: 16px;
  color: ${({ theme, color }) => color || theme.colors.nero};
  font-family: Poppins-Regular;
`;

const H2Bold = styled.p`
  font-size: 36px;
  color: ${({ theme, color }) => color || theme.colors.nero};
  font-family: Poppins-SemiBold;
`;

const H2 = styled.p`
  font-size: 36px;
  color: ${({ theme, color }) => color || theme.colors.nero};
  font-family: Poppins-Regular;
`;

const H3 = styled.p`
  font-size: 24px;
  color: ${({ theme, color }) => color || theme.colors.nero};
  font-family: Poppins-Regular;
`;

const H3Bold = styled.p`
  font-size: 24px;
  color: ${({ theme, color }) => color || theme.colors.nero};
  font-family: Poppins-Semibold;
`;
const BodySmall = styled.p`
  font-size: 14px;
  color: ${({ theme, color }) => color || theme.colors.nero};
  font-family: Acumin-ProLight;
`;

const BodyError = styled.p`
  font-size: 16px;
  color: ${({ theme, color }) => color || theme.colors.nero};
  font-family: Acumin-RPro;
`;

export {
  Title,
  TitleSmall,
  Subtitle,
  SubtitleHighlight,
  Body,
  BodyError,
  BodySmall,
  BodyBold,
  H2Bold,
  H2,
  H3,
  H3Bold
};
