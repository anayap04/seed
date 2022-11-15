import React from "react";
import { SecondaryContainer, TextSecondary } from "./styles";

const SecondaryBtn = (props) => {
  const { label, onClick, disabled, theme, fontSize, width } = props;
  return (
    <SecondaryContainer
      theme={theme}
      onClick={!disabled && onClick}
      onKeyPress={!disabled && onClick}
      aria-label={label}
      width={width}
      role="button"
    >
      <TextSecondary fontSize={fontSize} theme={theme}>
        {label}
      </TextSecondary>
    </SecondaryContainer>
  );
};

export default SecondaryBtn;
