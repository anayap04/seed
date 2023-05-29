import React from 'react';
import { useTranslation } from 'react-i18next';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import {
  ContainerAbout,
  Content,
  DescriptionBody,
  DescriptionText,
  ImageContainer
} from './styles';
import imageTest from '../../../assets/imgs/ImageTeam.png';
import PrimaryBtn from '../../components/atoms/buttons/Primary';
import { Row } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import TitleWithArrow from '../../components/atoms/title-arrow';

const About = (props) => {
  const { aboutRef } = props;
  const { t } = useTranslation();
  const { width, height } = useWindowDimensions();
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <ContainerAbout responsiveHeight={height} ref={aboutRef}>
      <Row>
        <Content responsiveHeight={height} responsiveWidth={width}>
          {!isMobile && (
            <ImageContainer responsiveWidth={width}>
              <img src={imageTest} width={height * 0.45} />
            </ImageContainer>
          )}
          <DescriptionBody isMobile={isMobile} responsiveWidth={width}>
            <TitleWithArrow title={t('about')} color={theme.colors.green} />
            <DescriptionText>{t('aboutDesc')}</DescriptionText>
            <PrimaryBtn
              width={250}
              label={t('seeMore')}
              margin={-20}
              onClick={() => navigate('/info')}
            />
          </DescriptionBody>
        </Content>
      </Row>
    </ContainerAbout>
  );
};

export default About;
