import React from 'react';
import { useTheme } from 'styled-components';
import { BodyBold, H3Bold } from '../../components/foundation/Typography';
import { Content, ImageAvatar, TeamMember, GalleryMember } from './styles';
//images
import alberto from '../../../assets/imgs/ImageTeam.png';
import astrid from '../../../assets/imgs/ImageTeam.png';
import christian from '../../../assets/imgs/ImageTeam.png';
import enrique from '../../../assets/imgs/ImageTeam.png';
import angela from '../../../assets/imgs/ImageTeam.png';
import suzy from '../../../assets/imgs/ImageTeam.png';
import maria from '../../../assets/imgs/ImageTeam.png';
import ContactFragment from '../../components/contact';

const Team = () => {
  const theme = useTheme();
  const imgArr = [
    {
      id: 0,
      name: 'Alberto Campo',
      img: alberto,
      job: 'Executive Project Director',
      profile: 'https://www.linkedin.com/in/alberto-elias-campo-malo-0b600a1a6'
    },
    {
      id: 1,
      name: 'Enrique Brito',
      img: enrique,
      job: 'Chief Finance Officer',
      profile: 'https://www.linkedin.com/in/ebritobrito'
    },
    {
      id: 2,
      name: 'Ángela Castro',
      img: angela,
      job: 'Talent and culture Manager',
      profile: 'https://www.linkedin.com/in/%C3%A1ngela-castro-uribe-b393b2137'
    },
    {
      id: 3,
      name: 'Syzy Di´Filippo',
      img: suzy,
      job: 'Public Relations Manager ',
      profile: 'https://www.linkedin.com/in/suzy-difilippo-82653323a'
    },
    {
      id: 4,
      name: 'Christian Cassiani',
      img: christian,
      job: 'Environmental Engineer',
      profile: 'https://www.linkedin.com/in/christian-cassiani-gomez-28754978'
    },
    {
      id: 5,
      name: 'María Fernanda Palmera',
      img: maria,
      job: 'Environmental Analyst',
      profile: 'https://www.linkedin.com/in/maria-fernanda-palmera-julio-658983264'
    },
    {
      id: 6,
      name: 'Astrid Camargo',
      img: astrid,
      job: 'Seguridad Analyst',
      profile: 'https://www.linkedin.com/in/astrid-camargo-044780264'
    },
    {
      id: 7,
      name: 'Luis Felipe Martinez',
      img: astrid,
      job: 'Electrical Engineer',
      profile: 'https://www.linkedin.com/in/luis-martinez-8a4803264'
    }
  ];

  const mapImages = (item) => (
    <TeamMember>
      <ImageAvatar key={item.id} src={item.img} />
      <H3Bold color={theme.colors.white}>{item.name}</H3Bold>
      <BodyBold color={theme.colors.white}>{item.job}</BodyBold>
    </TeamMember>
  );

  return (
    <Content>
      <GalleryMember>{imgArr.map((item) => mapImages(item))}</GalleryMember>
      <ContactFragment />
    </Content>
  );
};

export default Team;
