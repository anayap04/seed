import React from 'react';
import Icon from '../../foundation/Icon';
import { SecondaryContainer } from './styles';

const IconBtn = (props) => {
  const { iconName, onClick, disabled, theme, width } = props;
  return (
    <SecondaryContainer
      onClick={!disabled && onClick}
      onKeyPress={!disabled && onClick}
      aria-label={iconName}
      width={width}
      role="button"
    >
      <Icon iconName={iconName} tintColor={theme.colors.nero} size={24} />
    </SecondaryContainer>
  );
};

export default IconBtn;
