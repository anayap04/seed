import React from "react";
import { useTranslation } from "react-i18next";
import PrimaryBtn from "../buttons/Primary";
import SecondaryBtn from "../buttons/Secondary";
// Styled components
import { Container, ButtonContainer } from "./styles";
const Header = (props) => {
  const { btnsArray, theme, themeToggler, mode } = props;
  const {t} = useTranslation();
  const arrayComplete = [
    {
      id: "lang",
      type: "secondary",
      label: t("lang"),
      onClick: () => console.log("Test lang"),
    },
    {
      id: "mode",
      type: "secondary",
      label: mode === "dark" ? t("modeDark") : t("modeLight"),
      onClick: () => themeToggler(),
    },
    ...btnsArray
  ]

  const btnRender = (btn) => {
    return btn.type === "secondary" ? (
      <SecondaryBtn
        theme={theme}
        key={btn.id}
        label={btn.label}
        onClick={btn.onClick}
      />
    ) : (
      <PrimaryBtn
        theme={theme}
        key={btn.id}
        label={btn.label}
        onClick={btn.onClick}
      />
    );
  };

  return (
    <Container theme={theme}>
      <ButtonContainer>
        {arrayComplete.map((btn) => btnRender(btn))}
      </ButtonContainer>
    </Container>
  );
};

export default Header;
