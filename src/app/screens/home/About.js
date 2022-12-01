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
  ImageDiv,
} from "./styles";
import logo from "../../../assets/imgs/seed-white.png";
import logoDark from "../../../assets/imgs/seed-dark.png";
import csci from "../../../assets/imgs/csci.png";
import { Col, Row } from "react-bootstrap";
import { Title } from "../../components/foundation/Typography";
import { isMobile } from "react-device-detect";

const About = (props) => {
  const { theme, aboutRef, mode } = props;
  const { t } = useTranslation();
  const { width, height } = useWindowDimensions();
  const items = [csci, csci, csci];
  const mapImages = (item) => (
    <ImageDiv xl={3} lg={4} xs={4} sm={1}>
      <img src={item} width={(width > 700 && !isMobile ? 200 : 150)} />
    </ImageDiv>
  );
  return (
    <ContainerAbout responsiveHeight={height} ref={aboutRef} theme={theme}>
      <HeadTitle responsiveWidth={width} theme={theme}>
        {t("about")}
      </HeadTitle>
      <Row>
      <Content responsiveHeight={height} responsiveWidth={width}>
        <Col xl={3} sm={12} md={12}>
        <img src={mode === "dark" ? logo : logoDark} height={height * (width > 700 && !isMobile ? 0.1 : 0.05)} />
        </Col>
        <Col xl={4} sm={12} md={12}>
        <DescriptionBody theme={theme} responsiveWidth={width}>
          <DescriptionText theme={theme}>{t("aboutDesc")}</DescriptionText>
        </DescriptionBody>
        </Col>
      </Content>
      </Row>
      <Title theme={theme}>{t('partners')}</Title>
      <CarouselContainer>
        <Row>{items.map((x) => mapImages(x))}</Row>
      </CarouselContainer>

    </ContainerAbout>
  );
};

export default About;
