import React from "react";
import { PrimaryContainer, TextButton } from "./styles";

const PrimaryBtn = (props) => {
  const { label, onClick, disabled, theme, width, margin } = props;
  return (
    <PrimaryContainer
      theme={theme}
      width={width}
      onClick={!disabled && onClick}
      onKeyPress={!disabled && onClick}
      aria-label={label}
      role="button"
      margin={margin}
    >
      <TextButton theme={theme}>{label}</TextButton>
    </PrimaryContainer>
  );
};

export default PrimaryBtn;
