import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/actions/login";
import PrimaryBtn from "../atoms/buttons/Primary";
import SecondaryBtn from "../atoms/buttons/Secondary";
import ListView from "../list-view";
// Styled components
import { Container, ButtonContainer } from "./styles";
const Header = (props) => {
  const { btnsArray, theme, themeToggler, mode } = props;
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [listOpen, setList] = useState(false);
  const arrayLang = [
    {
      id: "en",
      label: "EN",
      onClick: () => i18n.changeLanguage("en"),
    },
    {
      id: "es",
      label: "ES",
      onClick: () => i18n.changeLanguage("es"),
    },
    {
      id: "pt",
      label: "PT",
      onClick: () => i18n.changeLanguage("pt"),
    },
  ];
  const open = () => {
    setList(!listOpen);
  };

  const logoutSession = () => {
    dispatch(logout());
    localStorage.removeItem("userId");
    localStorage.removeItem("mail");
    navigate("/");
  };
  const arrayComplete = [
    {
      id: "lang",
      type: "secondary",
      hasList: true,
      label: t("lang"),
      onClick: () => open(),
    },
    {
      id: "mode",
      type: "secondary",
      label: mode === "dark" ? t("modeDark") : t("modeLight"),
      onClick: () => themeToggler(),
    },
    {
      id: "login",
      type: "secondary",
      label: t("login"),
      onClick: () => navigate({ pathname: "/register", search: "?userExists" }),
    },
    {
      id: "reg",
      type: "primary",
      label: t("register"),
      onClick: () =>
        navigate("/register", {
          state: {
            isRegister: true,
          },
        }),
    },
    {
      id: "profile",
      type: "secondary",
      label: t("profile"),
      onClick: () => navigate("/profile"),
    },
    {
      id: "projects",
      type: "secondary",
      label: t("projects"),
      onClick: () => navigate("/projects"),
    },
    {
      id: "logout",
      type: "primary",
      label: t("logout"),
      onClick: () => logoutSession(),
    },
  ];

  const btnFiletered = arrayComplete.filter((option) =>
    btnsArray.includes(option.id)
  );

  const btnRender = (btn) => {
    return btn.type === "secondary" ? (
      <div key={btn.id}>
        <SecondaryBtn theme={theme} label={btn.label} onClick={btn.onClick} />
        {listOpen && btn.hasList && (
          <ListView
            key={btn.id}
            setList={setList}
            arrayItems={arrayLang}
            theme={theme}
          />
        )}
      </div>
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
        {btnFiletered.map((btn) => btnRender(btn))}
      </ButtonContainer>
    </Container>
  );
};

export default Header;
