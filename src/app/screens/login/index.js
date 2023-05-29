import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { connect, useDispatch } from 'react-redux';
import { changePasswordFetch, loginRequest, requestNewPass } from '../../../redux/actions/login';
import { registerRequest } from '../../../redux/actions/register';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import {
  Title,
  BodyError,
  BodyBold,
  TitleSmall,
  H2,
  H2Bold
} from '../../components/foundation/Typography';
import Input from '../../components/atoms/input';
import PhoneNumberInput from '../../components/atoms/input/PhoneNumberInput';
import SelectCountry from '../../components/atoms/select/SelectCountry';
import Header from '../../components/header';
import SecondaryBtn from '../../components/atoms/buttons/Secondary';
import { Col, Row } from 'react-bootstrap';
import {
  Container,
  FormContainer,
  ErrorContent,
  PetitionDiv,
  InfoPopContent,
  TitleContainer,
  InputsContainer,
  BtnSubmit,
  SummaryContainer,
  ImageLogin
} from './styles';
import { useTheme } from 'styled-components';
import { DefaultTheme } from '../../../theme/themes';
import img from '../../../assets/imgs/landscape-with-windmills.jpg';
import ContactFragment from '../../components/contact';

const LoginPage = (props) => {
  const {
    loginError,
    userData,
    registerData,
    registerError,
    requestNewPassData,
    passwordChangedSuccess
  } = props;
  const { width, height } = useWindowDimensions();
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme() || DefaultTheme;
  const [errorMsg, setErrorMsg] = useState(null);
  const [country, setCountry] = useState(null);
  const [user, setUser] = useState();
  const [reset, setResetPass] = useState(false);
  const [searchParams] = useSearchParams();
  const [formSelected, selectForm] = useState();
  const [isRegister, setRegister] = useState();
  const tokenReset = searchParams.get('token');
  const containerRef = useRef();
  const [currentHeight, setCurrentHeight] = useState(
    containerRef.current ? containerRef.current.clientHeight : 500
  );

  const registerArray = [
    { id: 'name', label: t('nameField'), typeOfInput: 'inputNoIcon' },
    { id: 'last', label: t('lastnameField'), typeOfInput: 'inputNoIcon' },
    { id: 'email', label: t('mailField'), typeOfInput: 'inputNoIcon' },
    { id: 'country', label: t('countryField'), typeOfInput: 'countrySelect' },
    { id: 'phoneNumber', label: t('phoneField'), typeOfInput: 'phoneNbr' },
    { id: 'identifier', label: t('idField'), typeOfInput: 'inputNoIcon' },
    { id: 'identifierType', label: t('documentType'), hasList: true },
    { id: 'password', label: t('labelPass'), typeOfInput: 'inputNoIcon', needsValidation: true }
  ];

  const loginArray = [
    { id: 'userId', label: t('labelUserId'), typeOfInput: 'inputNoIcon' },
    { id: 'password', label: t('labelPass'), typeOfInput: 'inputNoIcon' }
  ];

  const summaryArr = [
    { id: 'info1', label: t('summaryInfo1') },
    { id: 'info2', label: t('summaryInfo2') },
    { id: 'info3', label: t('summaryInfo3') }
  ];

  const btnsArray = [
    {
      id: 'about',
      color: theme.colors.green,
      label: t('about'),
      onClick: () =>
        navigate('/', {
          state: {
            section: 'about'
          }
        })
    },
    {
      id: 'how',
      color: theme.colors.green,
      label: t('howTo'),
      onClick: () =>
        navigate('/', {
          state: {
            section: 'how'
          }
        })
    },
    {
      id: 'projects',
      color: theme.colors.green,
      label: t('projects'),
      onClick: () =>
        navigate('/', {
          state: {
            section: 'projects'
          }
        })
    },
    {
      id: 'faq',
      color: theme.colors.green,
      label: t('faqTitle'),
      onClick: () => navigate('/faq')
    }
  ];

  const updatePage = () => {
    setRegister(!isRegister);
    setCurrentHeight(containerRef.current ? containerRef.current.clientHeight : 500);
  };

  const renderInput = (field) => {
    switch (field.typeOfInput) {
      case 'inputNoIcon':
      default:
        return (
          <Col>
            <Input
              labelTitle={field.label}
              label={field.id}
              register={register}
              required
              needsValidation={field.needsValidation}
              type={field.id}
            />
          </Col>
        );

      case 'countrySelect':
        return (
          <Col>
            <SelectCountry
              required
              labelTitle={field.label}
              label="country"
              setCountry={setCountry}
              customWidth={isMobile ? width * 0.85 : 300}
            />
          </Col>
        );
      case 'phoneNbr':
        return (
          <Col>
            <PhoneNumberInput label={field.label} defaultCountry="CO" />
          </Col>
        );
    }
  };

  const onSubmit = (data) => {
    if (searchParams.get('resetPass')) {
      dispatch(
        changePasswordFetch({
          userId: parseInt(searchParams.get('id')),
          token: tokenReset,
          password: data.password
        })
      );
    } else if (reset) {
      dispatch(requestNewPass({ email: data.userId }));
      setResetPass(false);
    } else {
      dispatch(
        isRegister
          ? registerRequest({
              userId: data.userId,
              password: data.password,
              email: data.email,
              country: country
            })
          : loginRequest({ userId: data.userId, password: data.password })
      );
      setUser({ userId: data.userId, password: data.password });
    }
  };

  useEffect(() => {
    selectForm(!isRegister ? loginArray : registerArray);
    if (loginError) {
      const message = loginError.message.indexOf('mail') > -1 ? t('errorUser') : t('errorPass');
      setErrorMsg(message);
    } else if (userData) {
      localStorage.setItem('userId', userData.data.user.userId);
      localStorage.setItem('mail', userData.data.user.mail);
      localStorage.setItem('token', userData.data.token);
      navigate('/profile');
    } else if (registerData) {
      dispatch(loginRequest({ userId: user.userId, password: user.password }));
      localStorage.setItem('userId', userData.data.user.userId);
      localStorage.setItem('mail', userData.data.user.mail);
      localStorage.setItem('token', userData.data.token);
      navigate('/profile');
    } else if (registerError) {
      setErrorMsg(registerError.message);
    } else if (passwordChangedSuccess) {
      setResetPass(false);
      navigate('/register');
    }
  }, [loginError, userData, registerData, registerError, passwordChangedSuccess, currentHeight]);

  return (
    <Container isMobile={isMobile}>
      <Header btnsArray={btnsArray} hideLogin={true} colorBack="dark" />
      <TitleContainer isMobile={isMobile}>
        <H2 color={theme.colors.white}>{t('profile')}</H2>
      </TitleContainer>
      <FormContainer
        ref={containerRef}
        additional={currentHeight < height * 0.8 && height * 0.9 - currentHeight}
        width={width}>
        <SecondaryBtn
          fontSize={18}
          background={theme.colors.green}
          label={isRegister ? t('iHaveAcc') : t('iHaveNotAcc')}
          onClick={() => updatePage()}
          width={350}
          marginLeft={isMobile ? -10 : '55vw'}
        />
        {passwordChangedSuccess && (
          <InfoPopContent>
            <BodyBold>{t('passwordSuccessfulUpdated')}</BodyBold>
          </InfoPopContent>
        )}
        {!requestNewPassData ? (
          <>
            <Title>{!isRegister ? t('registerTitle') : t('loginTitle')}</Title>
            <ErrorContent>{errorMsg && <BodyError>{errorMsg}</BodyError>}</ErrorContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputsContainer>
                <Row>{formSelected && formSelected.map((field) => renderInput(field))}</Row>
              </InputsContainer>
              <BtnSubmit
                isMobile={isMobile}
                value={isRegister ? t('register') : t('login')}
                isRegister={isRegister}
              />
            </form>

            <SummaryContainer>
              {summaryArr.map((info) => (
                <H2Bold key={info.id}>{info.label}</H2Bold>
              ))}
            </SummaryContainer>
          </>
        ) : (
          <>
            <PetitionDiv>
              <TitleSmall>{t('petitionSent')}</TitleSmall>
              <BodyBold>{t('messagePasswordReset')}</BodyBold>
            </PetitionDiv>
          </>
        )}
      </FormContainer>
      <ImageLogin src={img} />
      <ContactFragment />
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
    passwordChangedSuccess: passwordChangedSuccess
  };
};

export default connect(mapStateToProps, null)(LoginPage);
