import React from "react";
import { useTranslation } from "react-i18next";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import {
  ContainerAbout,
  Content,
  HeadTitle,
  DescriptionBody,
  DescriptionText,
  CarouselContainer,
  ImageContainer,
} from "./styles";
import logo from "../../../assets/imgs/seed-white.png";
import logoDark from "../../../assets/imgs/seed-dark.png";

import { Row } from "react-bootstrap";
import { Title } from "../../components/foundation/Typography";
import { isMobile } from "react-device-detect";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import veleta from "../../../assets/imgs/veleta.png";
import capexp from "../../../assets/imgs/capexp.png";
import green from "../../../assets/imgs/green.png";

const handleDragStart = (e) => e.preventDefault();

const About = (props) => {
  const { theme, aboutRef, mode } = props;
  const { t } = useTranslation();
  const { width, height } = useWindowDimensions();
  const items = [
    <img
      key={0}
      width={120}
      src={veleta}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      key={1}
      width={250}
      src={capexp}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      key={2}
      width={300}
      src={green}
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];

  return (
    <ContainerAbout responsiveHeight={height} ref={aboutRef} theme={theme}>
      <HeadTitle responsiveWidth={width} theme={theme}>
        {t("about")}
      </HeadTitle>
      <Row>
        <Content responsiveHeight={height} responsiveWidth={width}>
          {!isMobile &&
          <ImageContainer responsiveWidth={width}>
            <img
              src={mode === "dark" ? logo : logoDark}
              height={height * (width > 700 && !isMobile ? 0.1 : 0.05)}
            />
            </ImageContainer>
          }
            <DescriptionBody isMobile={isMobile} theme={theme} responsiveWidth={width}>
              <DescriptionText theme={theme}>{t("aboutDesc")}</DescriptionText>
            </DescriptionBody>
        </Content>
      </Row>
      <Title theme={theme}>{t("partners")}</Title>
      <CarouselContainer>
        <AliceCarousel
          autoHeight
          autoWidth
          disableButtonsControls
          infinite={isMobile}
          autoPlay={isMobile}
          disableDotsControls
          animationDuration={4000}
          mouseTracking
          items={items}
        />
      </CarouselContainer>
    </ContainerAbout>
  );
};

export default About;
