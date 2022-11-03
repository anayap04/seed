import React from "react";
import { LinkContainer, TextLink } from "./styles";

const LinkBtn = (props) => {
  const { label, onClick, disabled, theme, fontSize } = props;
  return (
    <LinkContainer
      theme={theme}
      onClick={!disabled && onClick}
      onKeyPress={!disabled && onClick}
      aria-label={label}
      role="button"
    >
      <TextLink fontSize={fontSize} theme={theme}>{label}</TextLink>
    </LinkContainer>
  );
};

export default LinkBtn;
