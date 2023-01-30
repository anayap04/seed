import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PrimaryBtn from "../atoms/buttons/Primary";
import Icon from "../foundation/Icon";
import {
  CardContainer,
  Content,
  ColInfo,
  Row,
  ColTitle,
  ProgressBarDiv,
  BodyDiv,
  MoreInfoContent,
  InfoColumn,
} from "./styles";
import { Body, BodyBold, BodySmall, H2 } from "../foundation/Typography";
import { isMobile } from "react-device-detect";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import CurrencyFormat from "react-currency-format";

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
    customWidth,
    btnClick,
  } = props;
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  const [showDescription, setShowMore] = useState(false);
  const imgUrl = img;
  const actualWidth = customWidth || width;
  const widthCustom = isMobile ? actualWidth * 0.95 : actualWidth;

  return (
    <CardContainer
      onMouseEnter={() => setShowMore(true)}
      onMouseLeave={() => setShowMore(false)}
      theme={theme}
      width={widthCustom}
      urlImage={imgUrl}
      isMobile={isMobile}
    >
      <Content isMobile={isMobile} width={actualWidth}>
        <ColInfo isMobile={isMobile} width={widthCustom}>
          <Row
            isMobile={isMobile}
            width={widthCustom}
            backgroundColor={theme.tangerine}
          >
            <BodyBold theme={theme}>{t("objectiveTitle")}</BodyBold>

            <Body theme={theme}>
              {" "}
              <CurrencyFormat
                value={objective}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              {` USD`}
            </Body>
          </Row>

          <Row
            isMobile={isMobile}
            width={widthCustom}
            backgroundColor={theme.lavender}
          >
            <BodyBold theme={theme}>{t("achieved")}</BodyBold>
            <Body theme={theme}>{`${achieved} %`}</Body>
            <ProgressBarDiv theme={theme} animated now={achieved} />
          </Row>
        </ColInfo>
        <ColTitle theme={theme} isMobile={isMobile} width={widthCustom}>
          <BodySmall theme={theme}>
            <Icon tintColor={theme.green} size={18} iconName="Location" />
            {location}
          </BodySmall>
          <H2 theme={theme}>{title}</H2>

          {showDescription && !isMobile && (
            <BodyDiv>
              <Body theme={theme}>{description}</Body>
              <MoreInfoContent>
                <InfoColumn>
                  <BodyBold theme={theme}>{t("profit")}</BodyBold>
                  <Body theme={theme}>{profit}</Body>
                </InfoColumn>
                <InfoColumn>
                  <BodyBold theme={theme}>{t("daysLeft")}</BodyBold>
                  <Body theme={theme}>{time}</Body>
                </InfoColumn>
              </MoreInfoContent>
            </BodyDiv>
          )}

          <PrimaryBtn
            margin={20}
            width={isMobile ? width * 0.3 : 275}
            label={t("seeMore")}
            theme={theme}
            onClick={btnClick}
          />
        </ColTitle>
      </Content>
    </CardContainer>
  );
};

export default Card;
