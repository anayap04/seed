import React, { useState } from 'react';
import Icon from '../../foundation/Icon';
import {
  Label,
  Field,
  InputContent,
  InputContentIcon,
  IconContainer,
  FieldBlank,
  PasswordChecklistStyled
} from './styles';
import { useTextWidth } from '@tag0/use-text-width';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

const InputWithIcon = ({
  theme,
  type,
  label,
  labelTitle,
  onClick,
  iconName,
  disabled,
  value,
  defaultValue,
  valueWidth,
  register,
  onFocus,
  onBlur
}) => (
  <InputContent onClick={() => onClick()}>
    {label && <Label>{labelTitle}</Label>}
    <InputContentIcon valueWidth={valueWidth} disabled={disabled}>
      <FieldBlank
        onFocus={onFocus}
        onBlur={onBlur}
        valueWidth={valueWidth}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        type={type}
        {...register(label)}
      />
      <IconContainer>
        <Icon iconName={iconName} tintColor={theme.colors.nero} size={24} />
      </IconContainer>
    </InputContentIcon>
  </InputContent>
);

const InputWithoutIcon = ({
  register,
  required,
  type,
  labelTitle,
  disabled,
  label,
  value,
  valueWidth,
  customWidth,
  setPassword
}) => (
  <InputContent customWidth={customWidth}>
    <Label>{labelTitle}</Label>
    <Field
      valueWidth={valueWidth}
      value={value}
      disabled={disabled}
      type={type}
      {...register(label, { required })}
      onChange={(e) => (setPassword ? setPassword(e.target.value) : null)}
    />
  </InputContent>
);

const Input = (props) => {
  const {
    label,
    register,
    required,
    type,
    labelTitle,
    iconName,
    onClick,
    disabled,
    value,
    defaultValue,
    customWidth,
    needsValidation,
    onFocus,
    onBlur
  } = props;
  const width = useTextWidth({
    text: !disabled ? value + 'sfgdrgfdg' : defaultValue,
    font: '20px Times'
  });
  const widthInt = Math.ceil(width);
  const [password, setPassword] = useState('');
  const { t } = useTranslation();
  const theme = useTheme();
  return iconName ? (
    <InputWithIcon
      type={type}
      label={label}
      labelTitle={labelTitle}
      disabled={disabled}
      register={register}
      required={required}
      iconName={iconName}
      defaultValue={defaultValue}
      value={value}
      onClick={onClick}
      valueWidth={widthInt}
      onFocus={onFocus}
      onBlur={onBlur}
      theme={theme}
    />
  ) : (
    <>
      <InputWithoutIcon
        type={type}
        label={label}
        labelTitle={labelTitle}
        disabled={disabled}
        register={register}
        required={required}
        onClick={onClick}
        value={value}
        valueWidth={widthInt}
        customWidth={customWidth}
        setPassword={setPassword}
      />
      {label === 'password' && needsValidation && (
        <PasswordChecklistStyled
          rules={['minLength', 'number', 'capital']}
          minLength={6}
          value={password}
          messages={{
            minLength: t('minLength'),
            number: t('number'),
            capital: t('capital')
          }}
        />
      )}
    </>
  );
};

export default Input;
