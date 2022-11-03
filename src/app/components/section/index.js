import React from "react";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import { SectionContainer } from "./styles";

const Section = (props) => {
  const { theme, children, customWidth } = props;
  const { width } = useWindowDimensions();

  return (
    <SectionContainer screenWidth={customWidth || width} theme={theme}>
      {children}
    </SectionContainer>
  );
};

export default Section;
