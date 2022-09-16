import React from "react";
import { PrimaryContainer, TextButton } from "./styles";

const PrimaryBtn = (props) => {
  const { label, onClick, disabled, theme } = props;
  return (
    <PrimaryContainer
      theme={theme}
      onClick={!disabled && onClick}
      onKeyPress={!disabled && onClick}
      aria-label={label}
      role="button"
    >
      <TextButton theme={theme}>{label}</TextButton>
    </PrimaryContainer>
  );
};

export default PrimaryBtn;
