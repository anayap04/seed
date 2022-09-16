import React from "react";
import { ContainerHowTo } from "./styles";
const HowTo = (props) => {
  const { howRef, theme } = props;
  return (
    <ContainerHowTo ref={howRef} theme={theme}>
      {"AH"}
    </ContainerHowTo>
  );
};

export default HowTo;
