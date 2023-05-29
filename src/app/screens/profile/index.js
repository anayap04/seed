import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { fetchUser } from '../../../redux/actions/user';
import Header from '../../components/header';
import Section from '../../components/section';
import { Root, Content } from './styles';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import ChipGroup from '../../components/atoms/chips/ChipGroup';
import Loading from '../../components/loading/Loading';
import ProfileSummary from './Summary';
import Bonds from './Bonds';
import Profits from './Profits';
import TitleWtihArroW from '../../components/atoms/title-arrow';
import ContactFragment from '../../components/contact';

const Summary = ({ userData, t, disabled, setDisabled, theme }) => {
  return (
    <Content>
      <TitleWtihArroW title={t('profile')} color={theme.colors.green} />
      <Section>
        <ProfileSummary userInfo={userData} disabled={disabled} setDisabled={setDisabled} />
      </Section>
    </Content>
  );
};
const Profile = (props) => {
  const { userInfo, isLoading } = props;
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { width, height } = useWindowDimensions();
  const theme = useTheme();
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const btnsArray = [
    {
      id: 'home',
      color: theme.colors.green,
      label: t('home'),
      onClick: () => navigate('/')
    },
    {
      id: 'profile',
      color: theme.colors.green,
      label: t('profile'),
      onClick: () => navigate('/profile')
    },
    {
      id: 'project',
      color: theme.colors.green,
      label: t('projects'),
      onClick: () => navigate('/projects')
    },
    {
      id: 'faq',
      color: theme.colors.green,
      label: t('faqTitle'),
      onClick: () => navigate('/faq')
    }
  ];

  const chipsInfo = [
    { id: 0, label: t('myInfo') },
    { id: 1, label: t('myBounds') },
    { id: 2, label: t('profitTable') }
  ];
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch, fetchUser]);

  return (
    <Root marginBottom={id === 1 || id === 2 ? height * 0.3 : 100}>
      <Loading isLoading={isLoading} />
      <Header btnsArray={btnsArray} colorBack="dark" isLogged={true} />

      <ChipGroup spGroup labelsArray={chipsInfo} idSelected={id} setId={setId} />
      {id === 0 && userInfo && (
        <Summary
          userData={userInfo.data}
          t={t}
          theme={theme}
          width={width}
          disabled={disabled}
          setDisabled={setDisabled}
        />
      )}
      {id === 1 && userInfo && <Bonds userData={userInfo.data} width={width} />}
      {id === 2 && userInfo && <Profits userData={userInfo.data} actualLang={i18n.language} />}
      <ContactFragment />
    </Root>
  );
};

const mapStateToProps = (state) => {
  const { userInfo, isLoading } = state.userReducer;
  return {
    userInfo: userInfo,
    isLoading: isLoading
  };
};

export default connect(mapStateToProps, null)(Profile);
