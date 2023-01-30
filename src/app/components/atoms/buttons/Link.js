import React from "react";
import { LinkContainer, TextLink } from "./styles";

const LinkBtn = (props) => {
  const { label, onClick, disabled, theme, fontSize, width, hasBackground, margin } =
    props;
  return (
    <LinkContainer
      theme={theme}
      hasBackground={hasBackground}
      onClick={!disabled && onClick}
      onKeyPress={!disabled && onClick}
      width={width}
      aria-label={label}
      margin={margin}
      role="button"
    >
      <TextLink hasBackground={hasBackground} fontSize={fontSize} theme={theme}>
        {label}
      </TextLink>
    </LinkContainer>
  );
};

export default LinkBtn;
