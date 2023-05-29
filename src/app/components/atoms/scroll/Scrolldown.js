import React from 'react';
import Icon from '../../foundation/Icon';
import { AngleDown, ScrollDownContainer } from './styles';

const ScrollDown = (props) => {
  const { color } = props;
  return (
    <ScrollDownContainer color={color}>
      <AngleDown>
        <Icon iconName="ArrowDown" tintColor={color} />
      </AngleDown>
    </ScrollDownContainer>
  );
};

export default ScrollDown;
