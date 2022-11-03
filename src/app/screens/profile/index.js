import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect, useDispatch } from "react-redux";
import { fetchUser, userUpdateFetch } from "../../../redux/actions/user";
import { Title, Body } from "../../components/foundation/Typography";
import Header from "../../components/header";
import Input from "../../components/atoms/input";
import Section from "../../components/section";
import {
  Root,
  Content,
  ProfileInfoInputs,
  BtnFooter,
  ContainerProfile,
  ColProfile,
  RowProfile,
} from "./styles";
import SecondaryBtn from "../../components/atoms/buttons/Secondary";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import ChipGroup from "../../components/atoms/chips/ChipGroup";
import Footer from "../../components/footer/Footer";
import { useForm } from "react-hook-form";

const ProfileSummary = ({
  userInfo,
  theme,
  t,
  disabled,
  setDisabled,
  register,
  handleSubmit,
  dispatch,
  width,
}) => {
  const profileArray = [
    { id: "firstName", value: userInfo.firstName, label: t("nameField") },
    { id: "lastName", value: userInfo.lastName, label: t("lastnameField") },
    { id: "email", value: userInfo.email, label: t("mailField") },
    { id: "pass", value: "******", label: t("labelPass") },
    {
      id: "countryCode",
      value: userInfo.countryCode,
      label: t("countryField"),
    },
    { id: "phoneNumber", value: userInfo.phoneNumber, label: t("phoneField") },
    { id: "identifier", value: userInfo.identifier, label: t("idField") },
    {
      id: "identifierType",
      value: userInfo.identifierType,
      label: t("documentType"),
    },
  ];
  const clickPressed = () => (disabled ? setDisabled(!disabled) : null);
  const onSubmit = (data) => {
    dispatch(userUpdateFetch(data));
    dispatch(fetchUser());
    setDisabled(true);
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <ProfileInfoInputs>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <ContainerProfile responsiveWidth={width}>
          <RowProfile>
            {profileArray.map((info, e) => (
              <ColProfile xl={width > 1400 ? 2 : 3} lg={3} md={4} sm={6} key={e}>
                <Input
                  key={e}
                  labelTitle={info.label}
                  iconName="Edit"
                  theme={theme}
                  disabled={disabled}
                  defaultValue={info.value}
                  onClick={() => clickPressed()}
                  label={info.id}
                  register={register}
                />
              </ColProfile>
            ))}
          </RowProfile>
        </ContainerProfile>
        <BtnFooter>
          <SecondaryBtn type="submit" theme={theme} label={t("updateBtn")} />
        </BtnFooter>
      </form>
    </ProfileInfoInputs>
  );
};

const Profits = ({ theme, userData, t, width }) => (
  <Content>
    <Title theme={theme}>{t("profitTable")}</Title>
    <Section customWidth={width} theme={theme}>
      <Body theme={theme}>{t("totalProfits")}</Body>
      <Title theme={theme}>{1000}</Title>
      <Body theme={theme}>{t("totalProfits")}</Body>
      <Title theme={theme}>{userData.iniciativesSupported?.length}</Title>
      <BtnFooter>
        <SecondaryBtn theme={theme} label={t("seeInvestments")} />
      </BtnFooter>
    </Section>
  </Content>
);

const Bonds = ({ theme, t, width, userData }) => (
  <Content>
    <Title theme={theme}>{t("myGreenBonds")}</Title>
    <Section customWidth={width} theme={theme}>
      <Title theme={theme}>{`$ ${userData.credits} ${t("money")}`}</Title>
      <BtnFooter>
        <SecondaryBtn theme={theme} label={t("buyBonds")} />
      </BtnFooter>
    </Section>
  </Content>
);

const Summary = ({
  theme,
  userData,
  t,
  disabled,
  setDisabled,
  register,
  handleSubmit,
  dispatch,
  width,
}) => {
  return (
    <Content>
      <Title theme={theme}>{t("profile")}</Title>
      <Section theme={theme}>
        <ProfileSummary
          t={t}
          userInfo={userData}
          theme={theme}
          disabled={disabled}
          setDisabled={setDisabled}
          register={register}
          handleSubmit={handleSubmit}
          dispatch={dispatch}
          width={width}
        />
      </Section>
    </Content>
  );
};
const Profile = (props) => {
  const { theme, themeToggler, mode, userInfo } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  const { register, handleSubmit } = useForm();
  const [id, setId] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [userData, setUserData] = useState(userInfo ? userInfo.data : {});
  const chipsInfo = [
    { id: 0, label: t("myInfo") },
    { id: 1, label: t("myBounds") },
    { id: 2, label: t("profitTable") },
  ];
  useEffect(() => {
    dispatch(fetchUser());
    setUserData(userInfo ? userInfo.data : {});
  }, [dispatch, userInfo]);

  return (
    <Root theme={theme}>
      <Header
        mode={mode}
        themeToggler={themeToggler}
        theme={theme}
        btnsArray={["lang", "mode", "logout", "projects"]}
      />
      <ChipGroup
        spGroup
        labelsArray={chipsInfo}
        theme={theme}
        idSelected={id}
        setId={setId}
      />
      {id === 0 && (
        <Summary
          theme={theme}
          userData={userData}
          t={t}
          width={width}
          disabled={disabled}
          setDisabled={setDisabled}
          register={register}
          handleSubmit={handleSubmit}
          dispatch={dispatch}
        />
      )}
      {id === 1 && (
        <Bonds theme={theme} userData={userData} t={t} width={width} />
      )}
      {id === 2 && (
        <Profits theme={theme} userData={userData} t={t} width={width} />
      )}
      <Footer theme={theme} />
    </Root>
  );
};

const mapStateToProps = (state) => {
  const { userInfo } = state.userReducer;
  return {
    userInfo: userInfo,
  };
};

export default connect(mapStateToProps, null)(Profile);
