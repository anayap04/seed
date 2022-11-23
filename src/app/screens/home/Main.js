import React from "react";
import { useTranslation } from "react-i18next";
import LinkBtn from "../../components/atoms/buttons/Link";
import {
  BtnContainer,
  ContainerMain,
  ImgContainer,
  Back,
  VideoContainer,
} from "./styles";
import logoWhite from "../../../assets/imgs/seed-white.png";
import logoDark from "../../../assets/imgs/seed-dark.png";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import video from "../../../assets/video/video.mp4";
import videoLight from "../../../assets/video/video_light.mp4";

const Main = (props) => {
  const { theme, scrollToView, refs } = props;
  const { t } = useTranslation();
  const { width } = useWindowDimensions();

  const btns = [
    {
      id: 0,
      title: t("about"),
      ref: refs.aboutRef,
      btnPosition: { x: width * 0.005, y: width * 0.015 },
      animation: "right",
    },
    {
      id: 1,
      title: t("howTo"),
      ref: refs.howRef,
      btnPosition: { x: width > 500 ? 75 : 50, y: width > 500 ? width * 0.015 : 35 },
      animation: "left",
    },
    {
      id: 2,
      title: t("projects"),
      ref: refs.projectRef,
      btnPosition: { x: width > 500 ? 43 : 30, y: width > 500 ? width * 0.015 : 27 },
      animation: "down",
    },
  ];

  return (
    <ContainerMain theme={theme}>
      <VideoContainer height="90%" autoPlay muted loop no-controls>
        <source src={ theme.background === '#FFFFFF'  ? videoLight : video} />
      </VideoContainer>
      <Back theme={theme} />
      <ImgContainer theme={theme}>
        <img
          width={"80%"}
          src={theme.background === "#FFFFFF" ? logoDark : logoWhite}
        />
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
