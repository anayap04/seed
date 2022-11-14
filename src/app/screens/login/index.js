import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import { Body, Title, BodyError } from "../../components/foundation/Typography";
import { BtnSubmit, Container, FormContainer, LinkContent, ErrorContent } from "./styles";
import { useForm } from "react-hook-form";
import Input from "../../components/atoms/input";
import { useTranslation } from "react-i18next";
import { connect, useDispatch } from "react-redux";
import { loginRequest } from "../../../redux/actions/login";
import LinkBtn from "../../components/atoms/buttons/Link";
import { registerRequest } from "../../../redux/actions/register";
import SelectCountry from "../../components/atoms/select/SelectCountry";

const LoginPage = (props) => {
  const { theme, loginError, userData, registerData,registerError } = props;
  const { width } = useWindowDimensions();
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [errorMsg, setErrorMsg] = useState(null);
  const [country, setCountry] = useState(null);
  const [user, setUser] = useState();
  const [isRegister, setRegister] = useState(
    location.state && location.state.isRegister
  );

  const onSubmit = (data) => {
    dispatch(
      isRegister
        ? registerRequest({
            userId: data.userId,
            password: data.password,
            email: data.email,
            country: country,
          })
        : loginRequest({ userId: data.userId, password: data.password })
    );
    setUser({ userId: data.userId, password: data.password })
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
      localStorage.setItem("userId", userData.data.user.userId);
      localStorage.setItem("mail", userData.data.user.mail);
      localStorage.setItem("token", userData.data.token);
      navigate("/profile");
    }
    if (registerData) {
      dispatch(loginRequest({ userId: user.userId, password: user.password }))
    }
    if (registerError) {
      setErrorMsg(registerError.message);
    }
  }, [loginError, userData, registerData, registerError]);

  return (
    <Container theme={theme}>
      <FormContainer width={width}>
        <Title theme={theme}>
          {isRegister ? t("registerTitle") : t("loginTitle")}
        </Title>
        <Body theme={theme}>
          {isRegister ? t("registerSubtitle") : t("loginSubtitle")}
        </Body>
        <ErrorContent>
        {errorMsg && <BodyError theme={theme}>{errorMsg}</BodyError>}
        </ErrorContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {isRegister && (
            <>
              <Input
                theme={theme}
                labelTitle={t("mailField")}
                label="email"
                register={register}
                required
                type="mail"
                customWidth={300}
              />
              <SelectCountry
                required
                label="country"
                theme={theme}
                setCountry={setCountry}
                customWidth={300}
              />
            </>
          )}
          <Input
            theme={theme}
            labelTitle={t("labelUserId")}
            label="userId"
            register={register}
            required
            customWidth={300}
          />
          <Input
            theme={theme}
            labelTitle={t("labelPass")}
            label="password"
            needsValidation={isRegister}
            register={register}
            required
            type="password"
            customWidth={300}
          />

          <BtnSubmit
            value={isRegister ? t("register") : t("login")}
            isRegister={isRegister}
            theme={theme}
          />
        </form>
        <LinkContent>
          <LinkBtn
            fontSize={24}
            theme={theme}
            label={isRegister ? t('iHaveAcc') : t('iHaveNotAcc')}
            onClick={() => setRegister(!isRegister)}
          />
        </LinkContent>
      </FormContainer>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { loginError, userData } = state.loginReducer;
  const { registerError, registerData } = state.registerReducer;
  return {
    loginError: loginError,
    userData: userData,
    registerData: registerData,
    registerError: registerError,
  };
};

export default connect(mapStateToProps, null)(LoginPage);
