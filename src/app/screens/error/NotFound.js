import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LinkBtn from '../../components/atoms/buttons/Link';
import Icon from '../../components/foundation/Icon';
import { Body, Title } from '../../components/foundation/Typography';
import { Root } from './styles';
import { useTheme } from 'styled-components';
import { DefaultTheme } from '../../../theme/themes';

const NotFound = () => {
  const theme = useTheme() || DefaultTheme;
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Root>
      <div>
        <Icon iconName="Impediment" tintColor={theme.colors.green} size={100} />
      </div>
      <Title>{t('errorTitle')}</Title>
      <Body>{t('pageNotFound')}</Body>
      <LinkBtn label={t('goBack')} onClick={() => navigate('/')} width={200} />
    </Root>
  );
};

export default NotFound;
