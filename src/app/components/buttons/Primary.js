import React from "react";
import { PrimaryContainer, TextButton } from "./styles";

const PrimaryBtn = (props) => {
  const { label, onClick, disabled } = props;
  return (
    <PrimaryContainer
      onClick={!disabled && onClick}
      onKeyPress={!disabled && onClick}
      aria-label={label}
      role="button"
    >
      <TextButton>{label}</TextButton>
    </PrimaryContainer>
  );
};

export default PrimaryBtn;
