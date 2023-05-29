import React from 'react';
import Icon from '../../foundation/Icon';
import { FieldBlank, InputSearchContainer } from './styles';
import { useTheme } from 'styled-components';
import { DefaultTheme } from '../../../../theme/themes';

const InputSearch = (props) => {
  const { placeholder, iconName } = props;
  const theme = useTheme() || DefaultTheme;

  return (
    <InputSearchContainer>
      <FieldBlank placeholder={placeholder} />
      <Icon iconName={iconName} tintColor={theme.colors.green} size={24} />
    </InputSearchContainer>
  );
};

export default InputSearch;
