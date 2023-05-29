import React from 'react';
import { useTranslation } from 'react-i18next';
import { Body } from '../../components/foundation/Typography';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import { Root, DetailedInfoContainer, DetailsContent, Item, TitleItem } from './styles';
import Team from './Team';
import TitleWithArrow from '../../components/atoms/title-arrow';
import Icon from '../../components/foundation/Icon';

//images

const GeneralInfo = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();
  const btnsArray = [
    {
      id: 'about',
      color: theme.colors.green,
      label: t('about'),
      onClick: () =>
        navigate('/', {
          state: {
            section: 'about'
          }
        })
    },
    {
      id: 'how',
      color: theme.colors.green,
      label: t('howTo'),
      onClick: () =>
        navigate('/', {
          state: {
            section: 'how'
          }
        })
    },
    {
      id: 'projects',
      color: theme.colors.green,
      label: t('projects'),
      onClick: () =>
        navigate('/', {
          state: {
            section: 'projects'
          }
        })
    },
    {
      id: 'faq',
      color: theme.colors.green,
      label: t('faqTitle'),
      onClick: () => navigate('/faq')
    }
  ];

  const col1Array = [
    { id: 'people', title: t('peopleTitle'), desc: t('peopleDesc') },
    { id: 'cities', title: t('cityTitle'), desc: t('cityDesc') },
    { id: 'inmo', title: t('inmoTitle'), desc: t('inmoDesc') }
  ];

  const col2Array = [
    { id: 'env', title: t('envTitle'), desc: t('envDesc') },
    { id: 'transport', title: t('transTitle'), desc: t('transDesc') }
  ];

  const renderItem = (item) => (
    <Item key={item.id}>
      <TitleItem>{item.title}</TitleItem>
      <Body>{item.desc}</Body>
    </Item>
  );

  return (
    <Root>
      <Header btnsArray={btnsArray} colorBack="dark" />
      <DetailedInfoContainer>
        <TitleWithArrow title={t('about')} color={theme.colors.nero} />
        <Body>
          {t('detailWhoWeAre')}
          <Body color={theme.colors.green}>{t('whoWeAreFinal')}</Body>
        </Body>
        <DetailsContent>
          <div>{col1Array.map((item) => renderItem(item))}</div>
          <Icon iconName="Transport" size="40vw" />
          <div>{col2Array.map((item) => renderItem(item))}</div>
        </DetailsContent>
      </DetailedInfoContainer>
      <Team />
    </Root>
  );
};

export default GeneralInfo;
