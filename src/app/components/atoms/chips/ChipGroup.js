import React, { useState } from 'react';
import Chip from './Chip';
import { Group, ChipSingle } from './styles';

const ChipGroup = (props) => {
  const { labelsArray, setId, idSelected } = props;
  const [actualChip, setActualChip] = useState(idSelected);

  const setChipSelected = (id) => {
    setActualChip(id);
    setId(id);
  };
  return (
    <Group>
      {labelsArray.map((item, index) => {
        return (
          <ChipSingle
            role="radio"
            aria-checked={actualChip === item.id}
            tabIndex={item.id.toString()}
            onClick={() => setChipSelected(item.id)}
            onKeyPress={() => setChipSelected(item.id)}
            key={item.id}>
            <Chip id={item.id || index} label={item.label} selected={actualChip === item.id} />
          </ChipSingle>
        );
      })}
    </Group>
  );
};

export default ChipGroup;
