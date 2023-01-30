import React, { useState } from "react";
import 'react-phone-number-input/style.css'

import { InputContent, Label, Phone } from "./styles";

const PhoneNumberInput = (props) => {
  const { theme, defaultCountry = 'US', customWidth, label } = props;
  const [value, setValue] = useState();

  return (
      <InputContent customWidth={customWidth}>
        <Label>{label}</Label>
      <Phone theme={theme} defaultCountry={defaultCountry} value={value} onChange={setValue} />
      </InputContent>
  );
};

export default PhoneNumberInput;
