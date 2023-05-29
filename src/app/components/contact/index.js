import React from 'react';
import { Root, ContactContainer, ImageContact } from './styles';
import { H2, H2Bold } from '../foundation/Typography';
import dropImg from '../../../assets/imgs/support.png';
import { useTranslation } from 'react-i18next';

const ContactFragment = () => {
  const { t } = useTranslation();
  return (
    <Root>
      <ImageContact height={500} src={dropImg} />
      <ContactContainer>
        <H2Bold>{t('titleContact')}</H2Bold>
        <H2>{t('contactBody')}</H2>
      </ContactContainer>
    </Root>
  );
};

export default ContactFragment;
