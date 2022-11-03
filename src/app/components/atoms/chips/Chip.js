import React, { useEffect, useState } from "react";
import { ChipDiv, ChipText } from "./styles";

const Chip = (props) => {
  const { theme, label, selected } = props;
  const [selectedState, setSelected] = useState(selected);

  useEffect(() => {
    setSelected(selected)
  }, [selected])
  
  return (
    <ChipDiv onClick={() => setSelected(!selectedState)} selected={selectedState} theme={theme}>
      <ChipText theme={theme}>{label}</ChipText>
    </ChipDiv>
  );
};

export default Chip;
