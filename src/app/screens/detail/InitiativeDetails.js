import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { connect, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchAllInitiatives, fetchSupportInitiatives } from "../../../redux/actions/initiatives";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import Footer from "../../components/footer/Footer";
import {
  Body,
  Subtitle,
  Title,
  BodyBold,
} from "../../components/foundation/Typography";
import Header from "../../components/header";
import {
  Root,
  Image,
  ContentInfo,
  RowDetail,
  SectionDetail,
  ProgressBarDiv,
  BodyContent,
  CountdownStyle,
  InfoContent,
  Info,
  TextInfo,
  BtnContainer,
  ModalBtnContainer,
  ContentModalInfo,
} from "./styles";
import grow from "../../../assets/imgs/grow.png";
import money from "../../../assets/imgs/money.png";
import PrimaryBtn from "../../components/atoms/buttons/Primary";
import ModalSeed from "../../components/modal/Modal";
import Input from "../../components/atoms/input";
import { useForm } from "react-hook-form";
import SecondaryBtn from "../../components/atoms/buttons/Secondary";
import { DateTime } from "luxon";

const InvestmentModal = ({
  theme,
  dataInfo,
  isModalOpen,
  setOpen,
  register,
  t,
  userInfo,
  width,
  dispatch,
  handleSubmit,
}) => {
  const onSubmit = (data) => {
    dispatch(fetchSupportInitiatives({
      iniciativeId: dataInfo && dataInfo.iniciativeId,
      supportQuantity: parseInt(data.supportQuantity),
      investmentDate: parseInt(DateTime.now().toISODate({ format: 'basic' })),
    }))
  }
  
  return (
    <ModalSeed theme={theme} isModalOpen={isModalOpen} setOpen={setOpen}>
      <form onSubmit={handleSubmit(onSubmit)}>
      <ContentModalInfo>

        <Title theme={theme}>{dataInfo.name}</Title>
        <Body>{`${t("currentBonds")}${userInfo.data.credits} ${t(
          "currentBonds2"
        )}`}</Body>
       
        <Input
          register={register}
          theme={theme}
          label="supportQuantity"
          labelTitle={t("inverstQtyTitle")}
          type="number"
          customWidth={width > 768 ? width * 0.3 : width * 0.1}
        />
        
      </ContentModalInfo>
      <ModalBtnContainer>
        <PrimaryBtn type="submit" theme={theme} width={width * 0.15} label="Confirmar" />
        <SecondaryBtn
          onClick={() => setOpen(false)}
          theme={theme}
          width={width * 0.15}
          label="Cancelar"
        />
    
      </ModalBtnContainer>
      </form>
    </ModalSeed>
  );
};

const InitiativeDetail = (props) => {
  const { theme, mode, themeToggler, allInitiatives, userInfo } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const location = useLocation();
  const { width } = useWindowDimensions();
  const [isModalOpen, setOpen] = useState(false);
  const { register, handleSubmit} = useForm();

  useEffect(() => {
    dispatch(fetchAllInitiatives());
  }, [dispatch]);
  const data =
    allInitiatives &&
    allInitiatives.data.filter(
      (item) =>
        item.iniciativeId === location.state.id ||
        item.name === location.state.id
    )[0];

  return (
    <Root theme={theme}>
      <Header
        mode={mode}
        themeToggler={themeToggler}
        theme={theme}
        btnsArray={["lang", "mode", "logout", "projects", "profile"]}
      />
      {isModalOpen && (
        <InvestmentModal
        dataInfo={data}
          theme={theme}
          isModalOpen={isModalOpen}
          setOpen={setOpen}
          register={register}
          userInfo={userInfo}
          width={width}
          t={t}
          dispatch={dispatch}
          handleSubmit={handleSubmit}
        />
      )}
      <Image src={data.imageUrl} responsiveWidth={width} />
      <ContentInfo responsiveWidth={width}>
        <RowDetail>
          <Col xl={7} lg={12} sm={12} md={12}>
            <Title theme={theme}>{data.name}</Title>
            <Info>
              <InfoContent>
                <img src={grow} width={40} height={40} />{" "}
                <TextInfo>
                  <Subtitle theme={theme}>{t("profit")}</Subtitle>
                  <Body theme={theme}>{`${(data.percentage * 100).toFixed(
                    2
                  )} %`}</Body>
                </TextInfo>
              </InfoContent>
              <InfoContent>
                <img src={money} width={40} height={40} />{" "}
                <TextInfo>
                  <Subtitle theme={theme}>{t("objectiveTitle")}</Subtitle>
                  <Body theme={theme}>{`${data.objective * 100} USD`}</Body>
                </TextInfo>
              </InfoContent>
            </Info>
          </Col>
          <Col xl={4} lg={12} sm={12} md={12}>
            <SectionDetail responsiveWidth={width} theme={theme}>
              <Subtitle theme={theme}>{t("timeLeft")}</Subtitle>
              <CountdownStyle theme={theme} date={Date.now() + 100000} />
              <Subtitle theme={theme}>{t("achieved")}</Subtitle>
              <BodyBold theme={theme}>{`${data.investPercentage} %`}</BodyBold>
              <ProgressBarDiv
                responsiveWidth={width}
                theme={theme}
                animated
                now={data.investPercentage}
              />
              <BtnContainer>
                <PrimaryBtn
                  onClick={() => setOpen(!isModalOpen)}
                  width={width < 768 ? width * 0.5 : width * 0.2}
                  theme={theme}
                  label="Invertir"
                />
              </BtnContainer>
            </SectionDetail>
          </Col>
          <Col xl={7} lg={12} sm={12} md={12}>
            <BodyContent>
              <Body theme={theme}>{data.resume}</Body>
            </BodyContent>
          </Col>
        </RowDetail>
      </ContentInfo>
      <Footer theme={theme} />
    </Root>
  );
};

const mapToStateProps = (state) => {
  const { allInitiatives } = state.initiativesReducer;
  const { userInfo } = state.userReducer;
  return {
    allInitiatives: allInitiatives,
    userInfo: userInfo,
  };
};

export default connect(mapToStateProps, null)(InitiativeDetail);