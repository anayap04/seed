import React from 'react';
import { TitleSmall } from '../../foundation/Typography';
import ScrollDown from '../scroll/Scrolldown';
import { TitleContainer } from './styles';

const TitleWithArrow = (props) => {
  const { color, title } = props;
  return (
    <TitleContainer>
      <TitleSmall color={color}>{title}</TitleSmall>
      <ScrollDown color={color} />
    </TitleContainer>
  );
};

export default TitleWithArrow;
