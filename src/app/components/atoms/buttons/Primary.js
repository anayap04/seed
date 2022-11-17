import React from "react";
import { PrimaryContainer, TextButton } from "./styles";

const PrimaryBtn = (props) => {
  const { label, onClick, disabled, theme, width, margin } = props;
  return (
    <PrimaryContainer
      disabled={disabled}
      theme={theme}
      width={width}
      onClick={!disabled ? onClick : null}
      onKeyPress={!disabled ? onClick: null}
      aria-label={label}
      role="button"
      margin={margin}
    >
      <TextButton theme={theme}>{label}</TextButton>
    </PrimaryContainer>
  );
};

export default PrimaryBtn;
