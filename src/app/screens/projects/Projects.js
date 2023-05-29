import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { connect, useDispatch } from 'react-redux';
import { fetchAllInitiatives } from '../../../redux/actions/initiatives';
import Card from '../../components/cards/Card';
import Header from '../../components/header';
import { Title } from '../../components/foundation/Typography';
import { CardsContainer, ColProject, Container, Root, TitleContainer } from './styles';
import { mapCards } from '../../../utils/mappers';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import ScrollDown from '../../components/atoms/scroll/Scrolldown';

const ProjectsMain = (props) => {
  const { allInitiatives } = props;
  const { t, i18n } = useTranslation();
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const btnsArray = [
    {
      id: 'home',
      color: theme.colors.nero,
      label: t('home'),
      onClick: () => navigate('/')
    },
    {
      id: 'profile',
      color: theme.colors.nero,
      label: t('profile'),
      onClick: () => navigate('/profile')
    },
    {
      id: 'project',
      color: theme.colors.nero,
      label: t('projects'),
      onClick: () => navigate('/projects')
    },
    {
      id: 'faq',
      color: theme.colors.nero,
      label: t('faqTitle'),
      onClick: () => navigate('/faq')
    }
  ];

  const handleNavigation = (id) => {
    navigate('/initiative', {
      state: {
        id: id
      }
    });
  };

  const renderCards = (item) => (
    <ColProject key={item.title} width={width}>
      <Card
        key={item.title}
        title={item.title}
        location="CDMX, Mex"
        description={item.description}
        objective={item.objective}
        img={item.img}
        customWidth={width * 0.95}
        achieved={item.achieved}
        btnClick={() => handleNavigation(item.title)}
        isDark
      />
    </ColProject>
  );

  useEffect(() => {
    dispatch(fetchAllInitiatives());
  }, [dispatch]);
  const data = allInitiatives && mapCards(allInitiatives.data, i18n.language);
  return (
    <Root>
      <Header isLogged={true} btnsArray={btnsArray} />
      <Container>
        <TitleContainer>
          <Title>{t('projectsTitle')}</Title>
          <ScrollDown />
        </TitleContainer>
        <CardsContainer>{data && data.map((value) => renderCards(value))}</CardsContainer>
      </Container>
    </Root>
  );
};

const mapToStateProps = (state) => {
  const { allInitiatives } = state.initiativesReducer;
  return {
    allInitiatives: allInitiatives
  };
};

export default connect(mapToStateProps, null)(ProjectsMain);
