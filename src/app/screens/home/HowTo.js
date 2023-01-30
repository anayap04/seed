import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import SecondaryBtn from "../../components/atoms/buttons/Secondary";
import { isMobile } from "react-device-detect";
import {
  ContainerHowTo,
  Dots,
  TitleText,
  TextContainer,
  HowContainer,
  BodyText,
  LineShape,
  StepsContainerMobile,
  StepContainer,
  TextContainerMobile,
  HomeTitle,
} from "./styles";
import Icon from "../../components/foundation/Icon";
import { useState } from "react";

const HowTo = (props) => {
  const { howRef, theme, userData } = props;
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [hoverText, setHoverText] = useState();
  const infoSteps = [
    {
      id: 0,
      title: t("createAccount"),
      desc: t("createAccountDesc"),
      alignment: "right",
      icon: "Account",
    },
    {
      id: 1,
      title: t("startInvest"),
      desc: t("startInvestDesc"),
      alignment: "right",
      icon: "Grow",
    },
    {
      id: 2,
      title: t("checkBenefits"),
      desc: t("checkBenefitsDesc"),
      alignment: "left",
      icon: "Money",
    },
  ];
  const renderStep = () =>
    infoSteps.map((step) =>
      isMobile ? (
        <StepsContainerMobile
          responsiveWidth={width}
          responsiveHeight={height}
          key={step.id}
          index={step.id}
        >
          <Dots theme={theme} />
          <TextContainerMobile
            isMobile={isMobile}
            responsiveWidth={width}
            alignment={step.alignment}
          >
            <TitleText isMobile={isMobile} theme={theme}>{step.title}</TitleText>
            <BodyText isMobile={isMobile} theme={theme}>{step.desc}</BodyText>
          </TextContainerMobile>
        </StepsContainerMobile>
      ) : (
        <TextContainer
          onMouseEnter={() => setHoverText(step.id)}
          onMouseLeave={() => setHoverText(null)}
          responsiveHeight={height}
          responsiveWidth={width}
          theme={theme}
          id={step.id}
        >
          <Icon iconName={step.icon} size={100} tintColor={theme.green} />
          <TitleText theme={theme}>{step.title}</TitleText>
          {hoverText === step.id &&<BodyText theme={theme}>{step.desc}</BodyText>}
        </TextContainer>
      )
    );

  return (
    <ContainerHowTo ref={howRef} theme={theme}>
      <HomeTitle isMobile={isMobile} responsiveWidth={width} theme={theme}>
        {t("howWorks")}
      </HomeTitle>

      <HowContainer>
        {isMobile ? (
          <LineShape
            responsiveWidth={width}
            responsiveHeight={height}
            theme={theme}
          >
            {renderStep()}
          </LineShape>
        ) : (
          <>
            <StepContainer responsiveWidth={width}>
              {renderStep()}
            </StepContainer>
          </>
        )}
      </HowContainer>
      {!isMobile && (
        <SecondaryBtn
          onClick={() =>
            userData
              ? navigate("/profile")
              : navigate("/register", {
                  state: {
                    isRegister: true,
                  },
                })
          }
          fontSize={width * 0.04}
          theme={theme}
          label={t("start")}
        />
      )}
    </ContainerHowTo>
  );
};

export default HowTo;
