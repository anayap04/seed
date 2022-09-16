import React from "react";
import { ContainerAbout } from "./styles";

const About = (props) => {
  const { theme, aboutRef } = props;
  return (
    <ContainerAbout ref={aboutRef} theme={theme}>
      {"AH"}
    </ContainerAbout>
  );
};

export default About;
