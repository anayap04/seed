import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAllInitiatives } from '../../../redux/actions/initiatives';
import { mapCards } from '../../../utils/mappers';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import Card from '../../components/cards/Card';

import { ColProject, ContainerProjects, CardsContainer } from './styles';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { isMobile } from 'react-device-detect';

import { useTheme } from 'styled-components';

import TitleWithArrow from '../../components/atoms/title-arrow';

const Projects = (props) => {
  const { projectRef, allInitiatives } = props;
  const { t, i18n } = useTranslation();
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const noOfCards = isMobile ? 3 : 1;
  useEffect(() => {
    dispatch(fetchAllInitiatives());
  }, [dispatch]);
  const data = allInitiatives && mapCards(allInitiatives.data, i18n.language);

  const renderCards = (item) => (
    <ColProject key={item.title}>
      <Card
        key={item.title}
        title={item.title}
        location="CDMX, Mex"
        description={item.description}
        time={item.daysLeft}
        objective={item.objective}
        profit={item.profit}
        img={item.img}
        achieved={item.achieved}
        btnClick={() => navigate('/register')}
        customWidth={width * 0.95}
      />
    </ColProject>
  );

  return (
    <ContainerProjects isMobile={isMobile} ref={projectRef}>
      <TitleWithArrow title={t('projectsTitle')} color={theme.colors.green} />
      <AnimationOnScroll delay={500} animateIn="animate__fadeIn">
        <CardsContainer>
          {data && data.slice(0, noOfCards).map((value) => renderCards(value))}
        </CardsContainer>
      </AnimationOnScroll>
    </ContainerProjects>
  );
};

const mapToStateProps = (state) => {
  const { allInitiatives } = state.initiativesReducer;
  return {
    allInitiatives: allInitiatives
  };
};

export default connect(mapToStateProps, null)(Projects);
