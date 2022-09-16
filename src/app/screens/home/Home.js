import React from "react";
import Header from "../../components/header";
import { useTranslation } from "react-i18next";
import { ContainerMain, ImgContainer } from "./styles";
import logoWhite from "../../../assets/imgs/seed-white.png";

const Home = props => {
  const {theme, themeToggler, mode} = props
  const { t } = useTranslation();
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
      label: mode === 'dark' ? t("modeDark") : t("modeLight"),
      onClick: () => themeToggler(),
    },
  ];
  return (
    <div className="App">
      <ContainerMain theme={theme}>
        <Header theme={theme} btnsArray={optionsHeader} />
        <ImgContainer>
          <img width={"100%"} src={logoWhite} />
        </ImgContainer>
      </ContainerMain>
    </div>
  );
};

export default Home;
