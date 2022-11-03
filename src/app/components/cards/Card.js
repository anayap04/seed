import React from "react";
import { useTranslation } from "react-i18next";
import PrimaryBtn from "../atoms/buttons/Primary";
import Icon from "../foundation/Icon";
import {
  CardContainer,
  ImageFragment,
  TextFragment,
  CardTitle,
  Description,
  InfoSub,
  InfoContainer,
  TitleInfo,
  FooterImg,
  ProfitTitle,
} from "./styles";

const Card = (props) => {
  const { theme, title, location, description, time, objective, profit, img } =
    props;
  const { t } = useTranslation();
  const imgUrl = img

  return (
    <CardContainer theme={theme}>
      <ImageFragment url={imgUrl} theme={theme}>
        <FooterImg  theme={theme}>
          <ProfitTitle theme={theme}>{t("profit")}</ProfitTitle>
          <ProfitTitle theme={theme}>{profit}</ProfitTitle>
        </FooterImg>
      </ImageFragment>
      <TextFragment>
        <CardTitle theme={theme}>{title}</CardTitle>
        <Description theme={theme}>
          <Icon tintColor={theme.fonts} size={20} iconName="Location" />
          {location}
        </Description>
        <Description theme={theme}>{description}</Description>
        <InfoSub>
          <InfoContainer>
            <TitleInfo theme={theme}>{t("objectiveTitle")}</TitleInfo>
            <Description theme={theme}>{objective}</Description>
          </InfoContainer>
          <InfoContainer>
            <TitleInfo theme={theme}>{t("daysLeft")}</TitleInfo>
            <Description theme={theme}>{time}</Description>
          </InfoContainer>
        </InfoSub>
        <PrimaryBtn
          margin={20}
          width={275}
          label={t('seeMore')}
          theme={theme}
        />
      </TextFragment>
    </CardContainer>
  );
};

export default Card;
