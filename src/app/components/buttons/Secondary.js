import React from "react";
import { SecondaryContainer, TextSecondary } from "./styles";

const SecondaryBtn = (props) => {
  const { label, onClick, disabled } = props;
  return (
    <SecondaryContainer
      onClick={!disabled && onClick}
      onKeyPress={!disabled && onClick}
      aria-label={label}
      role="button"
    >
      <TextSecondary>{label}</TextSecondary>
    </SecondaryContainer>
  );
};

export default SecondaryBtn;
