import React from 'react';
import { PrimaryContainer, TextButton } from './styles';
import Icon from '../../foundation/Icon';

const PrimaryBtn = (props) => {
  const { label, onClick, disabled, width, margin, icon, iconColor } = props;
  return (
    <PrimaryContainer
      disabled={disabled}
      width={width}
      onClick={!disabled ? onClick : null}
      onKeyPress={!disabled ? onClick : null}
      aria-label={label}
      role="button"
      icon={icon}
      margin={margin}>
      {icon && (
        <>
          <Icon iconName={icon} tintColor={iconColor} size={24} />
        </>
      )}
      <TextButton>{label}</TextButton>
    </PrimaryContainer>
  );
};

export default PrimaryBtn;
