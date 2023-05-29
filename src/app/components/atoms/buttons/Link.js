import React from 'react';
import { LinkContainer, TextLink } from './styles';

const LinkBtn = (props) => {
  const { label, onClick, disabled, fontSize, width, hasBackground, margin } = props;
  return (
    <LinkContainer
      hasBackground={hasBackground}
      onClick={!disabled && onClick}
      onKeyPress={!disabled && onClick}
      width={width}
      aria-label={label}
      margin={margin}
      role="button">
      <TextLink hasBackground={hasBackground} fontSize={fontSize}>
        {label}
      </TextLink>
    </LinkContainer>
  );
};

export default LinkBtn;
