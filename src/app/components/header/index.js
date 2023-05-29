import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { DefaultTheme } from '../../../theme/themes';
import { logout } from '../../../redux/actions/login';
import SecondaryBtn from '../atoms/buttons/Secondary';
import logo from '../../../assets/imgs/seed-dark.png';
import logoLight from '../../../assets/imgs/seed-white.png';
import { Subtitle } from '../foundation/Typography';
// Styled components
import {
  Container,
  ButtonContainer,
  ButtonHeader,
  LogoContainer,
  AccesBtnContainer
} from './styles';
import InputSearch from '../atoms/input/InputSearch';
import { isMobile } from 'react-device-detect';
import HamMenu from './HamMenu';

const Header = (props) => {
  const { btnsArray, hideLogin, colorBack, isLogged } = props;
  console.log(btnsArray);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const theme = useTheme() || DefaultTheme;
  const dispatch = useDispatch();

  const logoutSession = () => {
    dispatch(logout());
    localStorage.removeItem('userId');
    localStorage.removeItem('mail');
    navigate('/');
  };

  if (btnsArray.filter((btn) => btn.placeholder).length === 0) {
    btnsArray.push({
      placeholder: 'Search',
      color: colorBack === 'dark' ? theme.colors.green : theme.colors.nero,
      id: 'search'
    });
  }

  const btnRender = (btn, index) => (
    <ButtonHeader
      onClick={() => btn.onClick()}
      color={btn.color}
      isFirst={index === 0}
      isLast={btnsArray.length - 1 === index}
      enablePadding={btn.placeholder}
      key={btn.id}>
      {btn.placeholder ? (
        <InputSearch placeholder={btn.placeholder} iconName="Search" />
      ) : (
        <Subtitle color={colorBack === 'dark' ? theme.colors.black : theme.colors.green}>
          {btn.label}
        </Subtitle>
      )}
    </ButtonHeader>
  );

  return (
    <Container>
      <LogoContainer>
        <img src={colorBack === 'dark' ? logoLight : logo} width={150} />
      </LogoContainer>
      {isMobile ? (
        <HamMenu navArr={btnsArray} />
      ) : (
        <>
          <ButtonContainer>{btnsArray.map((btn, index) => btnRender(btn, index))}</ButtonContainer>
          {!hideLogin && (
            <AccesBtnContainer>
              <SecondaryBtn
                label={isLogged ? t('logout') : t('register')}
                onClick={() => (isLogged ? logoutSession() : navigate('/register'))}
              />
            </AccesBtnContainer>
          )}
        </>
      )}
    </Container>
  );
};

export default Header;
