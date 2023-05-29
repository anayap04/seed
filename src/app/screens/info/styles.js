import styled from 'styled-components';
import { LinkContainer } from '../../components/atoms/buttons/styles';
import { Body, BodyBold, TitleSmall } from '../../components/foundation/Typography';
import { DefaultTheme } from '../../../theme/themes';
import background from '../../../assets/imgs/backDark1.png';

export const Root = styled.div`
  width: 100vw;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 200px;
`;

Root.defaultProps = {
  theme: DefaultTheme
};

export const DetailedInfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100vw;
  padding: 55px;
`;

DetailedInfoContainer.defaultProps = {
  theme: DefaultTheme
};

export const GalleryMember = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  padding: 30px;
`;

export const ImageAvatar = styled.img`
  width: 220px;
  background-size: cover;
`;

ImageAvatar.defaultProps = {
  theme: DefaultTheme
};

export const TeamMember = styled.div`
  text-align: center;
  width: 220px;
  margin: 20px;
  &:hover {
    ${ImageAvatar} {
      transform: scale(1.02);
    }
  }
  ${BodyBold}, ${Body} {
    margin-bottom: 0px;
    margin-top: 5px;
  }
  ${LinkContainer} {
    margin-top: 2px;
    margin-left: 60px;
  }
`;

export const DetailsContent = styled.div`
  display: flex;
  flex-direction: row;
  & > svg {
    margin-top: -10vh;
    margin-right: 5vw;
    margin-left: 5vw;
  }
`;
export const Item = styled.div`
  width: 20vw;
  margin-bottom: 30px;
`;

export const TitleItem = styled(TitleSmall)`
  background-color: ${({ theme }) => theme.colors.green};
  padding 2px 10px 2px 10px;
`;

TitleItem.defaultProps = {
  theme: DefaultTheme
};

export const AboutImage = styled.img`
  width: 45vw;
  margin-left: 2vw;
  margin-right: 2vw;
`;
