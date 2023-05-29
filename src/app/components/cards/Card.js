import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../foundation/Icon';
import { CardContainer, ColInfo, ColTitle, ImageStyled, Content } from './styles';
import { H2Bold, H3 } from '../foundation/Typography';
import { isMobile } from 'react-device-detect';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import CurrencyFormat from 'react-currency-format';
import SecondaryBtn from '../atoms/buttons/Secondary';
import { useTheme } from 'styled-components';
import { DefaultTheme } from '../../../theme/themes';

const Card = (props) => {
  const { title, location, objective, img, achieved, customWidth, btnClick, isDark } = props;
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  const imgUrl = img;
  const actualWidth = customWidth || width;
  const widthCustom = isMobile ? actualWidth * 0.95 : actualWidth;
  const theme = useTheme() || DefaultTheme;

  return (
    <CardContainer width={widthCustom} isMobile={isMobile}>
      <ImageStyled src={imgUrl} />
      <Content>
        <ColInfo isDark={isDark} isMobile={isMobile} width={widthCustom}>
          <H2Bold color={isDark && theme.colors.white}>{t('objectiveTitle')}</H2Bold>
          <H3 color={isDark && theme.colors.white}>
            <CurrencyFormat
              value={objective}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
            {` USD`}
          </H3>
          <H2Bold color={isDark && theme.colors.white}>{t('achieved')}</H2Bold>
          <H3 color={isDark && theme.colors.white}>{`${achieved} %`}</H3>
        </ColInfo>
        <ColTitle isMobile={isMobile} width={widthCustom}>
          <H2Bold>
            <Icon tintColor={theme.colors.green} size={18} iconName="Location" />
            {location}
          </H2Bold>
          <H3>{title}</H3>
          <SecondaryBtn
            margin={100}
            width={isMobile ? width * 0.3 : 275}
            label={t('seeMore')}
            onClick={btnClick}
            background={theme.colors.nero}
            fontColor={theme.colors.white}
          />
        </ColTitle>
      </Content>
    </CardContainer>
  );
};

export default Card;
