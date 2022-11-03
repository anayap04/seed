import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import { Body, Title, BodyError } from "../../components/foundation/Typography";
import { BtnSubmit, Container, FormContainer } from "./styles";
import { useForm } from "react-hook-form";
import Input from "../../components/atoms/input";
import { useTranslation } from "react-i18next";
import { connect, useDispatch } from "react-redux";
import { loginRequest } from "../../../redux/actions/login";

const LoginPage = (props) => {
  const { theme, loginError, userData } = props;
  const { width } = useWindowDimensions();
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState(null);
  const onSubmit = (data) => {
    dispatch(loginRequest({ userId: data.userId, password: data.password }));
  };

  useEffect(() => {
    if (loginError) {
      const message =
        loginError.message.indexOf("mail") > -1
          ? t("errorUser")
          : t("errorPass");
      setErrorMsg(message);
    }
    if (userData) {
      localStorage.setItem('userId',userData.data.user.userId);
      localStorage.setItem('mail',userData.data.user.mail);
      localStorage.setItem('token', userData.data.token);
      navigate("/profile")
    }
  }, [loginError, userData]);

  return (
    <Container theme={theme}>
      <FormContainer width={width}>
        <Title theme={theme}>{t("loginTitle")}</Title>
        <Body theme={theme}>{t("loginSubtitle")}</Body>
        {errorMsg && <BodyError theme={theme}>{errorMsg}</BodyError>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            theme={theme}
            labelTitle={t("labelUserId")}
            label="userId"
            register={register}
            required
          />
          <Input
            theme={theme}
            labelTitle={t("labelPass")}
            label="password"
            register={register}
            required
            type="password"
          />
          <BtnSubmit theme={theme} />
        </form>
      </FormContainer>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { loginError, userData } = state.loginReducer;
  return {
    loginError: loginError,
    userData: userData,
  };
};

export default connect(mapStateToProps, null)(LoginPage);
