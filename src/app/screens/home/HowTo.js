import React from "react";
import { useTranslation } from "react-i18next";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import SecondaryBtn from "../../components/buttons/Secondary";
import {
  StepsShapes,
  ContainerHowTo,
  Dots,
  StepContainer,
  TitleText,
  TextContainer,
  HowContainer,
  BodyText,
  HeadContainer,
  HeadTitle,
} from "./styles";

const HowTo = (props) => {
  const { howRef, theme } = props;
  const { height, width } = useWindowDimensions();
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
    infoSteps.map((step) => (
      <StepContainer
        responsiveWidth={width}
        responsiveHeight={height}
        key={step.id}
      >
        <Dots theme={theme} />
        <TextContainer responsiveWidth={width} alignment={step.alignment}>
          <TitleText theme={theme}>{step.title}</TitleText>
          <BodyText theme={theme}>{step.desc}</BodyText>
        </TextContainer>
      </StepContainer>
    ));

  return (
    <ContainerHowTo ref={howRef} theme={theme}>
      <HeadContainer responsiveWidth={width}>
        <HeadTitle responsiveWidth={width} theme={theme}>
          {t("howWorks")}
        </HeadTitle>
        <SecondaryBtn
          onClick={() => console.log("AAA")}
          fontSize={width * 0.025}
          theme={theme}
          label="Empieza ya"
        />
      </HeadContainer>
      <HowContainer>
        <StepsShapes
          responsiveWidth={width}
          responsiveHeight={height}
          theme={theme}
        />
        {renderStep()}
      </HowContainer>
    </ContainerHowTo>
  );
};

export default HowTo;
