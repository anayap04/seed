import React from 'react';
import { useTranslation } from 'react-i18next';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import { useTheme } from 'styled-components';
import { isMobile } from 'react-device-detect';
import {
  ContainerHowTo,
  TextContainer,
  HowContainer,
  BodyText,
  StepContainer,
  IconContainer,
  BorderText
} from './styles';
import Icon from '../../components/foundation/Icon';
import SecondaryBtn from '../../components/atoms/buttons/Secondary';

import TitleWithArrow from '../../components/atoms/title-arrow';

const HowTo = (props) => {
  const { howRef } = props;
  const { height, width } = useWindowDimensions();
  const { t } = useTranslation();
  const theme = useTheme();
  const infoSteps = [
    {
      id: 0,
      title: t('createAccount'),
      desc: t('createAccountDesc'),
      alignment: 'right',
      icon: 'Look'
    },
    {
      id: 1,
      title: t('startInvest'),
      desc: t('startInvestDesc'),
      alignment: 'right',
      icon: 'Inevestment'
    },
    {
      id: 2,
      title: t('checkBenefits'),
      desc: t('checkBenefitsDesc'),
      alignment: 'left',
      icon: 'Check'
    }
  ];
  const renderStep = () =>
    infoSteps.map((step) => (
      <TextContainer responsiveHeight={height} responsiveWidth={width} id={step.id} key={step.id}>
        <IconContainer>
          <Icon iconName={step.icon} size={100} tintColor={theme.colors.green} />
        </IconContainer>
        <BorderText>
          <BodyText>{step.desc}</BodyText>
        </BorderText>
        <SecondaryBtn
          width={324}
          label={step.title}
          background={theme.colors.nero}
          fontColor={theme.colors.white}
          marginLeft={1}
        />
      </TextContainer>
    ));

  return (
    <ContainerHowTo ref={howRef}>
      <TitleWithArrow isMobile={isMobile} title={t('howWorks')} color={theme.colors.nero} />
      <HowContainer>
        <StepContainer responsiveWidth={width}>{renderStep()}</StepContainer>
      </HowContainer>
    </ContainerHowTo>
  );
};

export default HowTo;
