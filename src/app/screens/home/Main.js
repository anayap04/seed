import React, { useRef } from 'react';
import { useTheme } from 'styled-components';
import PrimaryBtn from '../../components/atoms/buttons/Primary';
import { Slide } from 'react-slideshow-image';
import { Body, H2Bold } from '../../components/foundation/Typography';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import { ImgContainer, SlideDiv } from './styles';
import 'react-slideshow-image/dist/styles.css';
//Image Background
import img1 from '../../../assets/imgs/mainBck1.png';
import img2 from '../../../assets/imgs/mainBck2.png';
import img3 from '../../../assets/imgs/mainBck3.png';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const slideRef = useRef();
  const { height } = useWindowDimensions();
  const properties = {
    duration: 12000,
    autoplay: true,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: 'ease'
  };

  const imagesArr = [
    { url: img1, title: t('slide1Title'), desc: t('slide1Desc'), color: theme.colors.nero },
    { url: img2, title: t('slide2Title'), desc: t('slide2Desc'), color: theme.colors.white },
    { url: img3, title: t('slide3Title'), desc: t('slide3Desc'), color: theme.colors.white }
  ];

  return (
    <div style={{ overflow: 'hidden', marginTop: -100 }}>
      <div className="slide-container">
        <Slide ref={slideRef} {...properties}>
          {imagesArr.map((slide, index) => (
            <SlideDiv key={index} className="each-slide">
              <img width="100%" height={height} className="lazy" src={slide.url} alt="sample" />
              <ImgContainer>
                <H2Bold color={slide.color}>{slide.title}</H2Bold>
                <Body color={slide.color}>{slide.desc}</Body>
                <PrimaryBtn
                  iconColor={theme.colors.white}
                  icon="User"
                  width={250}
                  margin={-13}
                  label={'Únete al cambio'}
                />
              </ImgContainer>
            </SlideDiv>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Main;
