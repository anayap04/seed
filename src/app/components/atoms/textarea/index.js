import React from 'react';
import { Subtitle } from '../../foundation/Typography';
import { RootTextArea, Content } from './styles';

const TextArea = (props) => {
  const { text, labelTitle, width, register, label, required } = props;

  return (
    <Content>
      <Subtitle>{labelTitle}</Subtitle>
      <RootTextArea {...register(label, { required })} width={width}>
        {text}
      </RootTextArea>
    </Content>
  );
};

export default TextArea;
