import React from "react";
import { PrimaryContainer, TextButton } from "./styles";

const PrimaryBtn = (props) => {
  const { label } = props;
  return (
    <PrimaryContainer>
      <TextButton>{label}</TextButton>
    </PrimaryContainer>
  );
};

export default PrimaryBtn;
