import React from "react";
import { useTranslation } from "react-i18next";
import PrimaryBtn from "../atoms/buttons/Primary";
import Icon from "../foundation/Icon";
import {
  CardContainer,
  ImageFragment,
  TitleContent,
  TextFragment,
  CardTitle,
  InfoSub,
  InfoContainer,
  TitleInfo,
  FooterImg,
  ProfitTitle,
  ContentBody,
} from "./styles";
import {Body, BodySmall} from  "../foundation/Typography"

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
        <TitleContent>
        <CardTitle theme={theme}>{title}</CardTitle>
        <BodySmall theme={theme}>
          <Icon tintColor={theme.fonts} size={18} iconName="Location" />
          {location}
        </BodySmall>
        </TitleContent>
        <ContentBody>
        <Body theme={theme}>{description}</Body>
        </ContentBody>
        <InfoSub>
          <InfoContainer>
            <TitleInfo theme={theme}>{t("objectiveTitle")}</TitleInfo>
            <Body theme={theme}>{objective}</Body>
          </InfoContainer>
          <InfoContainer>
            <TitleInfo theme={theme}>{t("daysLeft")}</TitleInfo>
            <Body theme={theme}>{time}</Body>
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
