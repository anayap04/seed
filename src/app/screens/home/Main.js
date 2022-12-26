import React, { useRef } from "react";
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
import video from "../../../assets/video/video.mp4";
import videoLight from "../../../assets/video/video_light.mp4";
import { isMobile } from "react-device-detect";
import useWindowDimensions from "../../../utils/useWindowDimensions";

const Main = (props) => {
  const { theme, scrollToView, refs } = props;
  const { t } = useTranslation();
  const videoRef = useRef();
  const { height, width } = useWindowDimensions();

  const btns = [
    {
      id: 0,
      title: t("about"),
      ref: refs.aboutRef,
      animation: "right",
    },
    {
      id: 1,
      title: t("howTo"),
      ref: refs.howRef,
      animation: "left",
    },
    {
      id: 2,
      title: t("projects"),
      ref: refs.projectRef,
      animation: "right",
    },
  ];

  return (
    <ContainerMain theme={theme}>
      <VideoContainer
        ref={videoRef}
        height="90%"
        autoPlay
        muted
        loop
        no-controls
      >
        <source src={theme.background === "#FFFFFF" ? videoLight : video} />
      </VideoContainer>
      
      <Back
        height={videoRef.current ? videoRef.current.clientHeight : height * 0.3}
        isMobile={isMobile}
        theme={theme}
      >
        {btns.map((btn, index) => (
          <BtnContainer
            key={btn.id}
            index={index}
            animation={btn.animation}
            isMobile={isMobile}
            responsiveWidth={width}
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
        {!isMobile && (
        <ImgContainer theme={theme}>
          <img
            width={isMobile ? "50%" : "80%"}
            src={theme.background === "#FFFFFF" ? logoDark : logoWhite}
          />
        </ImgContainer>
      )}
      </Back>
    </ContainerMain>
  );
};

export default Main;
