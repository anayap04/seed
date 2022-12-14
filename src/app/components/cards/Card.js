import React, { useState } from "react";
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
  ProgressBarDiv,
} from "./styles";
import { Body, BodySmall } from "../foundation/Typography";

const Card = (props) => {
  const {
    theme,
    title,
    location,
    description,
    time,
    objective,
    profit,
    img,
    achieved,
    btnClick,
  } = props;
  const { t } = useTranslation();
  const [onHover, setHover] = useState(false);
  const imgUrl = img;

  return (
    <CardContainer onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} theme={theme}>
      <ImageFragment url={imgUrl} theme={theme}>
        <FooterImg isHover={onHover} theme={theme}>
          <ProfitTitle theme={theme}>{t("profit")}</ProfitTitle>
          <Body theme={theme}>{profit}</Body>
          {onHover && (
            <>
              {" "}
              <ProfitTitle theme={theme}>{t("achieved")}</ProfitTitle>
              <Body theme={theme}>{`${achieved} %`}</Body>
              <ProgressBarDiv theme={theme} animated now={achieved} />
            </>
          )}
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
          label={t("seeMore")}
          theme={theme}
          onClick={btnClick}
        />
      </TextFragment>
    </CardContainer>
  );
};

export default Card;
