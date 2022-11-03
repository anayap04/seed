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
import SecondaryBtn from "../../components/atoms/buttons/Secondary";
import { Col, Row } from "react-bootstrap";
import { Title } from "../../components/foundation/Typography";

const About = (props) => {
  const { theme, aboutRef, mode } = props;
  const { t } = useTranslation();
  const { width, height } = useWindowDimensions();
  const items = [csci, csci, csci];
  const mapImages = (item) => (
    <ImageDiv xl={3} lg={4} xs={4} sm={1}>
      <img src={item} width={(width > 700 ? 200 : 150)} />
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
        <img src={mode === "dark" ? logo : logoDark} height={height * (width > 700 ? 0.1 : 0.05)} />
        </Col>
        <Col xl={4}>
        <DescriptionBody theme={theme} responsiveWidth={width}>
          <DescriptionText theme={theme}>{t("aboutDesc")}</DescriptionText>
          <SecondaryBtn
            label={t('seeMore')}
            theme={theme}
            fontSize={width * (width > 700 ? 0.015 : 0.05)}
          />
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
