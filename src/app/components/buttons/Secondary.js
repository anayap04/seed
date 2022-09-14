import React from "react";
import { SecondaryContainer, TextButton } from "./styles";

const SecondaryBtn = props => {
  const {label} = props 
  return (
    <SecondaryContainer>
      <TextButton>{label}</TextButton>
    </SecondaryContainer>
  );
};

export default SecondaryBtn;
