import React from "react";
import { useTranslation } from "react-i18next";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import { ContainerAbout, Content, HeadTitle, DescriptionBody, DescriptionText } from "./styles";
import logo from '../../../assets/imgs/seed-white.png'
import logoDark from '../../../assets/imgs/seed-dark.png';
import SecondaryBtn from "../../components/buttons/Secondary";

const About = (props) => {
  const { theme, aboutRef, mode } = props;
  const {t} = useTranslation()
  const {width, height} = useWindowDimensions();
  return (
    <ContainerAbout responsiveHeight={height} ref={aboutRef} theme={theme}>
      <HeadTitle responsiveWidth={width} theme={theme}>{t('about')}</HeadTitle>
      <Content responsiveHeight={height} responsiveWidth={width}>
        <img src={mode === 'dark' ? logo : logoDark}  height={height * 0.1} />
        <DescriptionBody theme={theme} responsiveWidth={width}>
          <DescriptionText theme={theme}>{t('aboutDesc')}</DescriptionText>
          <SecondaryBtn label="Ver más información" theme={theme} fontSize={width * 0.015} />
        </DescriptionBody>
      </Content>
    </ContainerAbout>
  );
};

export default About;
