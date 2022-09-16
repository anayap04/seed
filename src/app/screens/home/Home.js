import React, { useRef } from "react";
import Header from "../../components/header";
import { useTranslation } from "react-i18next";
import { ContainerMain, ImgContainer, BtnContainer } from "./styles";
import logoWhite from "../../../assets/imgs/seed-white.png";
import LinkBtn from "../../components/buttons/Link";
import About from "./About";
import HowTo from "./HowTo";
import Projects from "./Projects";

const renderMain = (theme, scrollToView, refs, t) => {
  const btns = [
    {
      id: 0,
      title: t("about"),
      ref: refs.aboutRef,
      btnPosition: { x: "10%", y: "30%" },
      animation: "right",
    },
    {
      id: 1,
      title: t("howTo"),
      ref: refs.howRef,
      btnPosition: { x: "75%", y: "25%" },
      animation: "left",
    },
    {
      id: 2,
      title: t("projects"),
      ref: refs.projectRef,
      btnPosition: { x: "40%", y: "70%" },
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

const Home = (props) => {
  const { theme, themeToggler, mode } = props;
  const { t } = useTranslation();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const howRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToView = (ref) => {
    console.log(ref);
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const optionsHeader = [
    {
      id: "lang",
      type: "secondary",
      label: t("lang"),
      onClick: () => console.log("Test lang"),
    },
    {
      id: "login",
      type: "secondary",
      label: t("login"),
      onClick: () => console.log("Test login"),
    },
    {
      id: "reg",
      type: "primary",
      label: t("register"),
      onClick: () => console.log("Test register"),
    },
    {
      id: "mode",
      type: "primary",
      label: mode === "dark" ? t("modeDark") : t("modeLight"),
      onClick: () => themeToggler(),
    },
  ];
  return (
    <div className="App">
      <Header theme={theme} btnsArray={optionsHeader} />
      {renderMain(
        theme,
        scrollToView,
        {
          homeRef,
          aboutRef,
          howRef,
          projectRef,
        },
        t
      )}
      <About theme={theme} aboutRef={aboutRef} />
      <HowTo theme={theme} howRef={howRef} />
      <Projects theme={theme} projectRef={projectRef} /> 
    </div>
  );
};

export default Home;
