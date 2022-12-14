import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect, useDispatch } from "react-redux";
import { fetchUser } from "../../../redux/actions/user";
import {
  Title,
  Subtitle,
  BodyBold,
  Body,
} from "../../components/foundation/Typography";
import Header from "../../components/header";
import Section from "../../components/section";
import {
  Root,
  Content,
  BtnFooter,
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
import { mapTableInvesment} from "../../../utils/mappers";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import ProfileSummary from "./Summary";

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
            <Title theme={theme}>{`-`}</Title>
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
    <SectionBonds customWidth={width} theme={theme}>
      {userData.credits ? (
        <>
        <Title theme={theme}>{`${userData.credits} ${t("Bonos")}`}</Title>
        <Body>{`Representan $ ${userData.credits * 1000} USD`}</Body>
        </>
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
  width,
}) => {
  return (
    <Content>
      <Title theme={theme}>{t("profile")}</Title>
      <Section theme={theme}>
        <ProfileSummary
          userInfo={userData}
          theme={theme}
          disabled={disabled}
          setDisabled={setDisabled}
          width={width}
        />
      </Section>
    </Content>
  );
};
const Profile = (props) => {
  const { theme, themeToggler, mode, userInfo, isLoading } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
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
