import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import {
  Body,
  Title,
  BodyError,
  BodyBold,
  TitleSmall,
} from "../../components/foundation/Typography";
import {
  BtnSubmit,
  Container,
  FormContainer,
  LinkContent,
  ErrorContent,
  PetitionDiv,
  InfoPopContent,
} from "./styles";
import { useForm } from "react-hook-form";
import Input from "../../components/atoms/input";
import { useTranslation } from "react-i18next";
import { connect, useDispatch } from "react-redux";
import {
  changePasswordFetch,
  loginRequest,
  requestNewPass,
} from "../../../redux/actions/login";
import LinkBtn from "../../components/atoms/buttons/Link";
import { registerRequest } from "../../../redux/actions/register";
import SelectCountry from "../../components/atoms/select/SelectCountry";
import logoWhite from "../../../assets/imgs/seed-white.png";
import logoDark from "../../../assets/imgs/seed-dark.png";
import { isMobile } from "react-device-detect";

const LoginPage = (props) => {
  const {
    theme,
    loginError,
    userData,
    registerData,
    registerError,
    requestNewPassData,
    passwordChangedSuccess,
  } = props;
  const { width } = useWindowDimensions();
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [errorMsg, setErrorMsg] = useState(null);
  const [country, setCountry] = useState(null);
  const [user, setUser] = useState();
  const [reset, setResetPass] = useState(false);
  const [searchParams] = useSearchParams();
  const [isRegister, setRegister] = useState(
    location && location.state && location.state.isRegister
  );
  const tokenReset = searchParams.get("token");

  const onSubmit = (data) => {
    if (searchParams.get("resetPass")) {
      dispatch(
        changePasswordFetch({
          userId: parseInt(searchParams.get("id")),
          token: tokenReset,
          password: data.password,
        })
      );
    } else if (reset) {
      dispatch(requestNewPass({ email: data.userId }));
      setResetPass(false)
      
    } else {
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
      setUser({ userId: data.userId, password: data.password });
    }
  };

  useEffect(() => {
    if (loginError) {
      const message =
        loginError.message.indexOf("mail") > -1
          ? t("errorUser")
          : t("errorPass");
      setErrorMsg(message);
    } else if (userData) {
      localStorage.setItem("userId", userData.data.user.userId);
      localStorage.setItem("mail", userData.data.user.mail);
      localStorage.setItem("token", userData.data.token);
      navigate("/profile");
    } else if (registerData) {
      dispatch(loginRequest({ userId: user.userId, password: user.password }));
      localStorage.setItem("userId", userData.data.user.userId);
      localStorage.setItem("mail", userData.data.user.mail);
      localStorage.setItem("token", userData.data.token);
      navigate("/profile");
    } else if (registerError) {
      setErrorMsg(registerError.message);
    } else if (passwordChangedSuccess) {
      setResetPass(false)
      navigate("/register");
    }
  }, [loginError, userData, registerData, registerError, passwordChangedSuccess]);

  return (
    <Container theme={theme}>
      <FormContainer width={width}>
        {passwordChangedSuccess  && <InfoPopContent theme={theme}><BodyBold theme={theme}>
        {'Su contraseña ha sido actualizada'}
      </BodyBold>
      </InfoPopContent>}
        {!requestNewPassData ? (
          <>
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
              {!searchParams.get("id") && (
                <Input
                  theme={theme}
                  labelTitle={reset ? t("mailField") : t("labelUserId")}
                  label="userId"
                  register={register}
                  required
                  customWidth={300}
                />
              )}
              {!reset && (
                <Input
                  theme={theme}
                  labelTitle={
                    searchParams.get("resetPass")
                      ? t("newPass")
                      : t("labelPass")
                  }
                  label="password"
                  needsValidation={isRegister || searchParams.get("resetPass")}
                  register={register}
                  required
                  type="password"
                  customWidth={300}
                />
              )}

              {!searchParams.get("resetPass") && !reset ? (
                <BtnSubmit
                  value={isRegister ? t("register") : t("login")}
                  isRegister={isRegister}
                  theme={theme}
                />
              ) : (
                <BtnSubmit
                  value={reset ? t("sendRequest") : t("changePass")}
                  theme={theme}
                />
              )}
            </form>
            <LinkContent>
              {!searchParams.get("resetPass") && !reset && (
                <>
                  <LinkBtn
                    fontSize={24}
                    theme={theme}
                    label={isRegister ? t("iHaveAcc") : t("iHaveNotAcc")}
                    onClick={() => setRegister(!isRegister)}
                  />
                  <LinkBtn
                    fontSize={24}
                    theme={theme}
                    label={t("forgetPass")}
                    onClick={() => setResetPass(!reset)}
                  />
                </>
              )}
            </LinkContent>
          </>
        ) : (
          <>
          <img width={isMobile ? "50%" : "120%"}
          src={theme.background === "#FFFFFF" ? logoDark : logoWhite} />
          <PetitionDiv>
            <TitleSmall theme={theme}>{'Petición Enviada'}</TitleSmall>
            <BodyBold theme={theme}>
              {
                 "En breve le enviaremos un correo con los pasos para cambiar su contraseña"
              }
            </BodyBold>
            </PetitionDiv>
          </>
        )}
      </FormContainer>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { loginError, userData, requestNewPassData, passwordChangedSuccess } = state.loginReducer;
  const { registerError, registerData } = state.registerReducer;
  return {
    loginError: loginError,
    userData: userData,
    registerData: registerData,
    registerError: registerError,
    requestNewPassData: requestNewPassData,
    passwordChangedSuccess: passwordChangedSuccess,
  };
};

export default connect(mapStateToProps, null)(LoginPage);
