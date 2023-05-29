import React, { useEffect, useState } from 'react';
import { ChipDiv, ChipText } from './styles';

const Chip = (props) => {
  const { label, selected } = props;
  const [selectedState, setSelected] = useState(selected);

  useEffect(() => {
    setSelected(selected);
  }, [selected]);

  return (
    <ChipDiv onClick={() => setSelected(!selectedState)} selected={selectedState}>
      <ChipText>{label}</ChipText>
    </ChipDiv>
  );
};

export default Chip;
