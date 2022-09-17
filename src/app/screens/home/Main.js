import React from "react";
import { useTranslation } from "react-i18next";
import LinkBtn from "../../components/buttons/Link";
import { BtnContainer, ContainerMain, ImgContainer } from "./styles";
import logoWhite from "../../../assets/imgs/seed-white.png";

const Main = (props) => {
  const { theme, scrollToView, refs } = props;
  const { t } = useTranslation();

  const btns = [
    {
      id: 0,
      title: t("about"),
      ref: refs.aboutRef,
      btnPosition: { x: 10, y: 30 },
      animation: "right",
    },
    {
      id: 1,
      title: t("howTo"),
      ref: refs.howRef,
      btnPosition: { x: 75, y: 25 },
      animation: "left",
    },
    {
      id: 2,
      title: t("projects"),
      ref: refs.projectRef,
      btnPosition: { x: 40, y: 70 },
      animation: "down",
    },
  ];

  return (
    <ContainerMain theme={theme}>
      <ImgContainer>
        <img width={"80%"} src={logoWhite} />
      </ImgContainer>
      {btns.map((btn) => (
        <BtnContainer
          key={btn.id}
          posY={btn.btnPosition.y}
          posX={btn.btnPosition.x}
          animation={btn.animation}
        >
          <LinkBtn
            fontSize={44}
            key={btn.id}
            theme={theme}
            label={btn.title}
            onClick={() => scrollToView(btn.ref)}
          />
        </BtnContainer>
      ))}
    </ContainerMain>
  );
};

export default Main;
