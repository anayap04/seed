import React from 'react';

import { FooterContent, ContactContainer } from './styles';
import { Body } from '../foundation/Typography';
import LinkBtn from '../../components/atoms/buttons/Link';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

const Footer = (props) => {
  const { isFixed } = props;
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <FooterContent isMobile={isMobile} isFixed={isFixed}>
      <Body>{'SEED clean energies 2023.'}</Body>
      {isMobile && (
        <ContactContainer isMobile={isMobile}>
          <LinkBtn fontSize={28} label={t('contact')} onClick={() => navigate('/contact')} />
        </ContactContainer>
      )}

      <LinkBtn fontSize={28} label={t('contact')} onClick={() => navigate('/contact')} />
    </FooterContent>
  );
};

export default Footer;
