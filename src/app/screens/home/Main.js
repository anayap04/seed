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
import { isMobile } from "react-device-detect";

const Main = (props) => {
  const { theme, scrollToView, refs } = props;
  const { t } = useTranslation();
  const { width, height } = useWindowDimensions();

  const btns = [
    {
      id: 0,
      title: t("about"),
      ref: refs.aboutRef,
      btnPosition: { x:  width * 0.005, y: isMobile ? height * 0.025 :  height * 0.025 },
      animation: "right",
    },
    {
      id: 1,
      title: t("howTo"),
      ref: refs.howRef,
      btnPosition: {
        x: width > 500 && !isMobile ? 75 : width * 0.04,
        y: width > 500 && !isMobile ? width * 0.015 : height * 0.035,
      },
      animation: "left",
    },
    {
      id: 2,
      title: t("projects"),
      ref: refs.projectRef,
      btnPosition: {
        x: width > 500 && !isMobile ? 43 : width * 0.065,
        y: width > 500 && !isMobile ? width * 0.015 :  height * 0.045,
      },
      animation: "down",
    },
  ];

  return (
    <ContainerMain theme={theme}>
      <VideoContainer height="90%" autoPlay muted loop no-controls>
        <source src={theme.background === "#FFFFFF" ? videoLight : video} />
      </VideoContainer>
      <Back theme={theme} />
      <ImgContainer theme={theme}>
        <img
          width={isMobile ? "50%" : "80%"}
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
            fontSize={isMobile ? 30 : 44}
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
