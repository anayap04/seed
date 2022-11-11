import React, { useState } from "react";
import Icon from "../../foundation/Icon";
import {
  Label,
  Field,
  InputContent,
  InputContentIcon,
  IconContainer,
  FieldBlank,
  PasswordChecklistStyled,
} from "./styles";
import { useTextWidth } from "@imagemarker/use-text-width";


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
}) => (
  <InputContent onClick={() => onClick()}>
    <Label theme={theme}>{labelTitle}</Label>
    <InputContentIcon valueWidth={valueWidth} disabled={disabled} theme={theme}>
      <FieldBlank
        valueWidth={valueWidth}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        type={type}
        theme={theme}
        {...register(label)}
      />
      <IconContainer>
        <Icon iconName={iconName} tintColor={theme.fonts} size={24} />
      </IconContainer>
    </InputContentIcon>
  </InputContent>
);

const InputWithoutIcon = ({
  theme,
  register,
  required,
  type,
  labelTitle,
  disabled,
  label,
  value,
  valueWidth,
  customWidth,
  setPassword,
}) => (
  <InputContent customWidth={customWidth}>
    <Label theme={theme}>{labelTitle}</Label>
    <Field
      valueWidth={valueWidth}
      value={value}
      disabled={disabled}
      type={type}
      theme={theme}
      {...register(label, { required })}
      onChange={e => setPassword ? setPassword(e.target.value) : null}
    />
  </InputContent>
);

const Input = (props) => {
  const {
    label,
    register,
    required,
    theme,
    type,
    labelTitle,
    iconName,
    onClick,
    disabled,
    value,
    defaultValue,
    customWidth
  } = props;
  const width = useTextWidth({ text: !disabled ? value + 'sfgdrgfdg' : defaultValue, font: "20px Times" });
  const widthInt = Math.ceil(width);
  const [password, setPassword] = useState("")

  return iconName ? (
    <InputWithIcon
      type={type}
      label={label}
      labelTitle={labelTitle}
      disabled={disabled}
      register={register}
      theme={theme}
      required={required}
      iconName={iconName}
      defaultValue={defaultValue}
      value={value}
      onClick={onClick}
      valueWidth={widthInt}
      
    />
  ) : (
    <>
    <InputWithoutIcon
      type={type}
      label={label}
      labelTitle={labelTitle}
      disabled={disabled}
      register={register}
      theme={theme}
      required={required}
      onClick={onClick}
      value={value}
      valueWidth={widthInt}
      customWidth={customWidth}
      setPassword={setPassword}
    />
    {label === 'password' && <PasswordChecklistStyled
    theme={theme}
				rules={["minLength","number","capital"]}
				minLength={6}
				value={password}
				messages={{
					minLength: "La contraseña tiene más de 6 caracteres.",
					number: "La contraseña tiene un número.",
					capital: "La contraseña tiene una letra mayúscula.",
				}}
			/>}
    </>
  );
};

export default Input;
