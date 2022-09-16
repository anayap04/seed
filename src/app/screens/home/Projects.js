import React from "react";
import { ContainerAbout } from "./styles";

const Projects = (props) => {
  const { theme, projectRef } = props;
  return (
    <ContainerAbout ref={projectRef} theme={theme}>
      {"AH"}
    </ContainerAbout>
  );
};

export default Projects;
