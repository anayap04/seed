import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import SecondaryBtn from '../../components/atoms/buttons/Secondary';
import { TitleSmall, Title, BodyBold } from '../../components/foundation/Typography';
import { Content, SectionBonds, BondsTitle, BondsQty } from './styles';
import { useTheme } from 'styled-components';
import { isMobile } from 'react-device-detect';
import Buy from '../bounds/Buy';

const Bonds = (props) => {
  const { userData } = props;
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const [payment, openPayment] = useState(false);

  return (
    <Content>
      <TitleSmall color={theme.colors.green}>{t('myGreenBonds')}</TitleSmall>
      <SectionBonds>
        {userData.credits ? (
          <BondsTitle>
            <BondsQty>
              <Title>{userData.credits}</Title>
              <BodyBold>{t('Bonos')}</BodyBold>
            </BondsQty>
            <BodyBold>{`${t('boundsRepresents')} ${userData.credits * 1000} USD`}</BodyBold>
          </BondsTitle>
        ) : (
          <Title>{t('noMoney')}</Title>
        )}
      </SectionBonds>
      <SecondaryBtn
        fontSize={width > 500 ? width * 0.02 : width * 0.07}
        onClick={() => openPayment(!payment)}
        label={t('buyBonds')}
        background={theme.colors.green}
        width={isMobile ? width * 0.9 : width * 0.3}
        marginLeft={isMobile ? width * 0.05 : width * 0.3}
      />
      {payment && <Buy />}
    </Content>
  );
};

export default Bonds;
