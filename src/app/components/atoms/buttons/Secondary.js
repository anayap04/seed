import React from 'react';
import { SecondaryContainer, TextSecondary } from './styles';

const SecondaryBtn = (props) => {
  const { label, onClick, disabled, fontSize, width, background, fontColor, marginLeft } = props;
  return (
    <SecondaryContainer
      onClick={!disabled && onClick}
      onKeyPress={!disabled && onClick}
      aria-label={label}
      width={width}
      backgroundColor={background}
      marginLeft={marginLeft}
      role="button">
      <TextSecondary fontSize={fontSize} fontColor={fontColor}>
        {label}
      </TextSecondary>
    </SecondaryContainer>
  );
};

export default SecondaryBtn;
