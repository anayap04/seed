import React from "react";
import { useTranslation } from "react-i18next";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import {
  StepsShapes,
  ContainerHowTo,
  Dots,
  StepContainer,
  TitleText,
  TextContainer,
  HowContainer,
} from "./styles";
const HowTo = (props) => {
  const { howRef, theme } = props;
  const { height, width } = useWindowDimensions();
  const { t } = useTranslation();
  const infoSteps = [
    { id: 0, title: t("createAccount"), desc: t("createAccountDesc") },
    { id: 1, title: t("startInvest"), desc: t("startInvestDesc") },
    { id: 2, title: t("checkBenefits"), desc: t("checkBenefitsDesc") },
  ];
  console.log(height);
  const renderStep = () =>
    infoSteps.map((step) => (
      <StepContainer responsiveWidth={width} responsiveHeight={height} key={step.id}>
        <Dots theme={theme} />
        <TextContainer>
          <TitleText theme={theme}>{step.title}</TitleText>
        </TextContainer>
      </StepContainer>
    ));
  return (
    <ContainerHowTo ref={howRef} theme={theme}>
      <HowContainer>
        <StepsShapes responsiveWidth={width} responsiveHeight={height} theme={theme} />
        {renderStep()}
      </HowContainer>
    </ContainerHowTo>
  );
};

export default HowTo;
