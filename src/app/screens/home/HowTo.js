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
  HeadContainer,
  HeadTitle,
  LineShape,
  StepsContainerMobile,
  StepContainer,
  TextContainerMobile,
} from "./styles";

import circleDark from "../../../assets/imgs/circle_dark.png";
import circleLight from "../../../assets/imgs/circle_light.png";

const HowTo = (props) => {
  const { howRef, theme, userData } = props;
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const infoSteps = [
    {
      id: 0,
      title: t("createAccount"),
      desc: t("createAccountDesc"),
      alignment: "right",
    },
    {
      id: 1,
      title: t("startInvest"),
      desc: t("startInvestDesc"),
      alignment: "right",
    },
    {
      id: 2,
      title: t("checkBenefits"),
      desc: t("checkBenefitsDesc"),
      alignment: "left",
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
          <TextContainerMobile isMobile={isMobile} responsiveWidth={width} alignment={step.alignment}>
            <TitleText theme={theme}>{step.title}</TitleText>
            <BodyText theme={theme}>{step.desc}</BodyText>
          </TextContainerMobile>
        </StepsContainerMobile>
      ) : (
        
          <TextContainer responsiveHeight={height} responsiveWidth={width} alignment={step.alignment}>
            <TitleText theme={theme}>{step.title}</TitleText>
            <BodyText theme={theme}>{step.desc}</BodyText>
          </TextContainer>
       
      )
    );

  return (
    <ContainerHowTo ref={howRef} theme={theme}>
      <HeadContainer
        isMobile={isMobile}
        responsiveHeight={height}
        responsiveWidth={width}
        theme={theme}
      >
        <HeadTitle isMobile={isMobile} responsiveWidth={width} theme={theme}>
          {t("howWorks")}
        </HeadTitle>
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
      </HeadContainer>
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
            <StepContainer  responsiveWidth={width}>{renderStep()}</StepContainer>
            <img
              width={width * 0.45}
              src={theme.background === "#FFFFFF" ? circleLight : circleDark}
            />
          </>
        )}
      </HowContainer>
    </ContainerHowTo>
  );
};

export default HowTo;
