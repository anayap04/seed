import React from "react";
import { LinkContainer, TextLink } from "./styles";

const LinkBtn = (props) => {
  const { label, onClick, disabled } = props;
  return (
    <LinkContainer
      onClick={!disabled && onClick}
      onKeyPress={!disabled && onClick}
      aria-label={label}
      role="button"
    >
      <TextLink>{label}</TextLink>
    </LinkContainer>
  );
};

export default LinkBtn;
