import React, { useRef } from "react";
import Header from "../../components/header";
import { useTranslation } from "react-i18next";
import Main from "./Main";
import About from "./About";
import HowTo from "./HowTo";
import Projects from "./Projects";

const Home = (props) => {
  const { theme, themeToggler, mode } = props;
  const { t } = useTranslation();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const howRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToView = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const optionsHeader = [
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
  ];
  return (
    <div className="App">
      <Header theme={theme} mode={mode} themeToggler={themeToggler} btnsArray={optionsHeader} />
      <Main theme={theme} scrollToView={scrollToView} refs={{homeRef, aboutRef, howRef, projectRef}} />
      <About mode={mode} theme={theme} aboutRef={aboutRef} />
      <HowTo theme={theme} howRef={howRef} />
      <Projects theme={theme} projectRef={projectRef} /> 
    </div>
  );
};

export default Home;
