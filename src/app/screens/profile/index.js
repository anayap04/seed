import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect, useDispatch } from "react-redux";
import { fetchUser, userUpdateFetch } from "../../../redux/actions/user";
import {
  Title,
  Subtitle,
  BodyBold,
} from "../../components/foundation/Typography";
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
  RowInvestment,
  ColInvestment,
  SectionBonds,
  SubInfo,
} from "./styles";
import SecondaryBtn from "../../components/atoms/buttons/Secondary";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import ChipGroup from "../../components/atoms/chips/ChipGroup";
import TableSeed from "../../components/atoms/table/Table";
import Footer from "../../components/footer/Footer";
import { useForm } from "react-hook-form";
import { mapTableInvesment } from "../../../utils/mappers";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";

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
              <ColProfile xl={3} lg={3} md={4} sm={6} key={e}>
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
const Profits = ({ theme, userData, t, width, openTable, table, navigate }) => {
  const titleArr = ["Iniciativa", "Cantidad", "Fecha"];
  const body = userData && mapTableInvesment(userData, navigate);
  return (
    <Content>
      <Title theme={theme}>{t("profitTable")}</Title>
      <Section customWidth={width} theme={theme}>
        <RowInvestment>
          <ColInvestment>
            <Subtitle theme={theme}>{t("totalProfits")}</Subtitle>
            <Title theme={theme}>{userData.iniciativesSupported?.length}</Title>
          </ColInvestment>
          <ColInvestment>
            <Subtitle theme={theme}>{t("investments")}</Subtitle>
            <Title theme={theme}>{userData.iniciativesSupported?.length}</Title>
          </ColInvestment>
        </RowInvestment>
        {table && (
          <TableSeed
            theme={theme}
            headArr={titleArr}
            bodyArr={body}
            enableBtn
          />
        )}
        <BtnFooter>
          {userData.iniciativesSupported?.length === 0 && (
            <SubInfo>
              <BodyBold theme={theme}>{t("withoutInvestments")}</BodyBold>
            </SubInfo>
          )}
          <SecondaryBtn
            fontSize={width > 500 ? width * 0.02 : width * 0.07}
            onClick={() =>
              userData.iniciativesSupported?.length > 0
                ? openTable(!table)
                : navigate("/projects")
            }
            theme={theme}
            label={table ? t("noSeeInvestments") : t("seeInvestments")}
          />
        </BtnFooter>
      </Section>
    </Content>
  );
};

const Bonds = ({ theme, t, width, userData, navigate }) => (
  <Content>
    <Title theme={theme}>{t("myGreenBonds")}</Title>
    <SectionBonds responsiveWidth={width} customWidth={width} theme={theme}>
      {userData.credits ? (
        <Title theme={theme}>{`$ ${userData.credits} ${t("money")}`}</Title>
      ) : (
        <Title theme={theme}>{t("noMoney")}</Title>
      )}
      <BtnFooter responsiveWidth={width}>
        <SecondaryBtn
          fontSize={width > 500 ? width * 0.02 : width * 0.07}
          onClick={() => navigate("/buyBonds")}
          theme={theme}
          label={t("buyBonds")}
        />
      </BtnFooter>
    </SectionBonds>
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
  const { theme, themeToggler, mode, userInfo, isLoading } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  const [table, openTable] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const chipsInfo = [
    { id: 0, label: t("myInfo") },
    { id: 1, label: t("myBounds") },
    { id: 2, label: t("profitTable") },
  ];
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch, fetchUser]);

  return (
    <Root theme={theme}>
      <Loading theme={theme} isLoading={isLoading} />
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
      {id === 0 && userInfo && (
        <Summary
          theme={theme}
          userData={userInfo.data}
          t={t}
          width={width}
          disabled={disabled}
          setDisabled={setDisabled}
          register={register}
          handleSubmit={handleSubmit}
          dispatch={dispatch}
        />
      )}
      {id === 1 && userInfo && (
        <Bonds
          theme={theme}
          userData={userInfo.data}
          t={t}
          width={width}
          navigate={navigate}
        />
      )}
      {id === 2 && userInfo && (
        <Profits
          theme={theme}
          userData={userInfo.data}
          t={t}
          width={width}
          openTable={openTable}
          table={table}
          navigate={navigate}
        />
      )}
      <Footer isFixed theme={theme} />
    </Root>
  );
};

const mapStateToProps = (state) => {
  const { userInfo, isLoading } = state.userReducer;
  return {
    userInfo: userInfo,
    isLoading: isLoading,
  };
};

export default connect(mapStateToProps, null)(Profile);
