import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchAllInitiatives, fetchSupportInitiatives } from '../../../redux/actions/initiatives';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import { Body, Subtitle, Title } from '../../components/foundation/Typography';
import Header from '../../components/header';
import {
  Root,
  Image,
  ContentInfo,
  SectionDetail,
  SectionDetailInfo,
  ProgressBarDiv,
  BodyContent,
  CountdownStyle,
  InfoContent,
  Info,
  TextInfo,
  BtnContainer,
  ModalBtnContainer,
  ContentModalInfo,
  IconContainer,
  ImageDetail
} from './styles';
import PrimaryBtn from '../../components/atoms/buttons/Primary';
import ModalSeed from '../../components/modal/Modal';
import Input from '../../components/atoms/input';
import { useForm } from 'react-hook-form';
import SecondaryBtn from '../../components/atoms/buttons/Secondary';
import { DateTime } from 'luxon';
import imageDefault from '../../../assets/imgs/default.png';
import { isMobile } from 'react-device-detect';
import TitleWithArrow from '../../components/atoms/title-arrow';
import { useTheme } from 'styled-components';
import Icon from '../../components/foundation/Icon';
import nature from '../../../assets/imgs/nature.png';

const InvestmentModal = ({
  dataInfo,
  isModalOpen,
  setOpen,
  register,
  t,
  userInfo,
  width,
  dispatch,
  handleSubmit,
  setInvested
}) => {
  const onSubmit = (data) => {
    const date = DateTime.now().setZone('utc');
    const dataObj = {
      iniciativeId: dataInfo.iniciativeid,
      supportQuantity: parseInt(data.supportQuantity),
      investmentDate: parseInt(date.toMillis())
    };
    dispatch(fetchSupportInitiatives(dataObj));
    setInvested(true);
    setOpen(false);
  };

  return (
    <ModalSeed isModalOpen={isModalOpen} setOpen={setOpen}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContentModalInfo>
          <Title>{dataInfo.name}</Title>
          <Body>{`${t('currentBonds')}${userInfo && userInfo.data.credits} ${t(
            'currentBonds2'
          )}`}</Body>

          {userInfo.data.credits > 0 ? (
            <Input
              register={register}
              label="supportQuantity"
              labelTitle={t('inverstQtyTitle')}
              type="number"
              customWidth={width > 768 ? width * 0.3 : width * 0.7}
            />
          ) : (
            <Subtitle>{'Parece que no tienes bonos comprados'}</Subtitle>
          )}
        </ContentModalInfo>
        <ModalBtnContainer>
          {userInfo.data.credits > 0 ? (
            <>
              <PrimaryBtn type="submit" width={width * 0.15} label="Confirmar" />
              <SecondaryBtn onClick={() => setOpen(false)} width={width * 0.15} label="Cancelar" />
            </>
          ) : (
            <PrimaryBtn label="Comprar bonos" />
          )}
        </ModalBtnContainer>
      </form>
    </ModalSeed>
  );
};

const InitiativeDetail = (props) => {
  const { allInitiatives, userInfo, initiativeSupported, isLoadingAllInitiatives } = props;
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { width } = useWindowDimensions();
  const [isModalOpen, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const [timeLeft, setTimeLeft] = useState(10000);
  const [invested, setInvested] = useState();
  const [data, setData] = useState(allInitiatives);
  const theme = useTheme();
  const navigate = useNavigate();

  const btnsArray = [
    {
      id: 'home',
      color: theme.colors.nero,
      label: t('home'),
      onClick: () => navigate('/')
    },
    {
      id: 'profile',
      color: theme.colors.nero,
      label: t('profile'),
      onClick: () => navigate('/profile')
    },
    {
      id: 'project',
      color: theme.colors.nero,
      label: t('projects'),
      onClick: () => navigate('/projects')
    },
    {
      id: 'faq',
      color: theme.colors.nero,
      label: t('faqTitle'),
      onClick: () => navigate('/faq')
    }
  ];

  useEffect(() => {
    dispatch(fetchAllInitiatives());
    if (allInitiatives) {
      const dataTemp =
        allInitiatives &&
        allInitiatives.data.filter(
          (item) => item.translations[i18n.language].name === location.state.id
        )[0];
      setData(dataTemp);
      setTimeLeft(dataTemp.daysLeft * 24 * 60 * 60 * 1000);
      if (
        userInfo &&
        userInfo.data.iniciativesSupported.filter(
          (c) => c.translations[i18n.language].name === location.state.id
        ).length > 0
      ) {
        setInvested(true);
      }
    }

    if (initiativeSupported) {
      setOpen(false);
      setInvested(true);
    }
  }, [dispatch, fetchAllInitiatives, fetchSupportInitiatives]);

  return (
    <Root>
      <Header btnsArray={btnsArray} isLogged={true} />
      {isModalOpen && (
        <InvestmentModal
          dataInfo={data}
          isModalOpen={isModalOpen}
          setOpen={setOpen}
          register={register}
          userInfo={userInfo}
          width={width}
          t={t}
          dispatch={dispatch}
          handleSubmit={handleSubmit}
          setInvested={setInvested}
        />
      )}
      {!isLoadingAllInitiatives && data && data.translations && (
        <div>
          <TitleWithArrow title={data && data.translations[i18n.language].name} />
          <Image src={data && data.imageUrl ? data.imageUrl : imageDefault} />
          <ContentInfo>
            <Info>
              <InfoContent>
                <IconContainer>
                  <Icon
                    iconName="Inevestment"
                    size={isMobile ? 40 : 60}
                    tintColor={theme.colors.nero}
                  />
                </IconContainer>
                <TextInfo>
                  <Subtitle>{t('profit')}</Subtitle>
                  <Body>{`${(data ? data.percentage * 100 : 0).toFixed(2)} %`}</Body>
                </TextInfo>
              </InfoContent>
              <InfoContent>
                <IconContainer>
                  <Icon iconName="Check" size={isMobile ? 40 : 60} tintColor={theme.colors.nero} />
                </IconContainer>
                <TextInfo>
                  <Subtitle>{t('objectiveTitle')}</Subtitle>
                  <Body>{`${data && data.objective * 100} USD`}</Body>
                </TextInfo>
              </InfoContent>
            </Info>

            <BodyContent>
              <Body>{data && data.translations[i18n.language].resume}</Body>
              {location.state.didInvest ||
                (invested && (
                  <>
                    <Subtitle>{'Encargado del Proyecto'}</Subtitle>
                    <Body>{`${data.responsibleName} (LinkedIn: @jdoe)`}</Body>
                    <Subtitle>{'Últimas Actualizaciones'}</Subtitle>
                  </>
                ))}
            </BodyContent>
          </ContentInfo>
          <SectionDetail>
            {!isMobile && <ImageDetail src={nature} />}
            <SectionDetailInfo>
              <Subtitle>{t('timeLeft')}</Subtitle>
              {timeLeft && <CountdownStyle date={Date.now() + timeLeft} />}
              <Subtitle>{t('achieved')}</Subtitle>
              <ProgressBarDiv
                responsiveWidth={width}
                animated
                now={data ? data.investPercentage : 0}
                aria-valuenow={data ? data.investPercentage : 0}
                label={`${data ? data.investPercentage : 0}%`}
              />
              {invested && <Subtitle>{t('thanksInversion')}</Subtitle>}
              <BtnContainer>
                <SecondaryBtn
                  onClick={() => setOpen(!isModalOpen)}
                  width={isMobile ? width * 0.305 : width * 0.25}
                  label={t('invest')}
                  background={theme.colors.nero}
                  fontColor={theme.colors.white}
                />
              </BtnContainer>
            </SectionDetailInfo>
          </SectionDetail>
        </div>
      )}
    </Root>
  );
};

const mapToStateProps = (state) => {
  const { allInitiatives, initiativeSupported, isLoadingAllInitiatives } = state.initiativesReducer;
  const { userInfo } = state.userReducer;

  return {
    allInitiatives: allInitiatives,
    initiativeSupported: initiativeSupported,
    userInfo: userInfo,
    isLoadingAllInitiatives: isLoadingAllInitiatives
  };
};

export default connect(mapToStateProps, null)(InitiativeDetail);
