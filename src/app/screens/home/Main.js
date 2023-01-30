import React from "react";
import { useTranslation } from "react-i18next";
import { BtnContainer, ContainerMain, ImgContainer } from "./styles";
import logoWhite from "../../../assets/imgs/seed-white.png";
import logoDark from "../../../assets/imgs/seed-dark.png";

import { isMobile } from "react-device-detect";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import LinkBtn from "../../components/atoms/buttons/Link";

const Main = (props) => {
  const { theme, scrollToView, refs } = props;
  const { t } = useTranslation();
  const { width } = useWindowDimensions();

  const btns = [
    {
      id: 0,
      title: t("about"),
      ref: refs.aboutRef,
    },
    {
      id: 1,
      title: t("howTo"),
      ref: refs.howRef,
    },
    {
      id: 2,
      title: t("projects"),
      ref: refs.projectRef,
    },
  ];

  return (
    <ContainerMain theme={theme}>
      <ImgContainer isMobile={isMobile} theme={theme}>
          <img
            width={"100%"}
            src={theme.background !== "#0F110C" ? logoDark : logoWhite}
          />
        </ImgContainer>
      <BtnContainer isMobile={isMobile} responsiveWidth={width}>
        
        {btns.map((btn) => (
          <LinkBtn
            hasBackground={true}
            fontSize={isMobile ? 24 : 30}
            key={btn.id}
            theme={theme}
            width={width * 0.20}
            label={btn.title}
            margin={isMobile ? width * 0.01 : width * 0.1}
            onClick={() => scrollToView(btn.ref)}
          />
        ))}
      </BtnContainer>
    </ContainerMain>
  );
};

export default Main;
