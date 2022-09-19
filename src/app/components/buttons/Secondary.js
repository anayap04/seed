import React from "react";
import { SecondaryContainer, TextSecondary } from "./styles";

const SecondaryBtn = (props) => {
  const { label, onClick, disabled, theme, fontSize } = props;
  return (
    <SecondaryContainer
      
      theme={theme}
      onClick={!disabled && onClick}
      onKeyPress={!disabled && onClick}
      aria-label={label}
      role="button"
    >
      <TextSecondary fontSize={fontSize} theme={theme}>{label}</TextSecondary>
    </SecondaryContainer>
  );
};

export default SecondaryBtn;
