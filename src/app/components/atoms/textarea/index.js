import React from "react";
import { Subtitle } from "../../foundation/Typography";
import { RootTextArea, Content } from "./styles";

const TextArea = (props) => {
  const { theme, text, labelTitle, width, register, label, required } = props;

  return (
    <Content>
      <Subtitle theme={theme}>{labelTitle}</Subtitle>
      <RootTextArea
        {...register(label, { required })}
        width={width}
        theme={theme}
      >
        {text}
      </RootTextArea>
    </Content>
  );
};

export default TextArea;
