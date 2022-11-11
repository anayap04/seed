import React, { useMemo, useState } from "react";
import countryList from "react-select-country-list";
import { SelectContent } from "./styles";

const SelectCountry = (props) => {
  const { theme, customWidth, setCountry} = props;
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    const countryCode = countryList().data.filter(x => { 
      return x.label === value.label
    })
    setValue(countryCode[0]);
    setCountry(countryCode[0].value)
  };

  const colourStyles = {
    menu: () => ({
      color: theme.fonts,
      backgroundColor: theme.background,
    }),
    option: () => ({
      color: theme.fonts,
      backgroundColor: theme.background,
      padding: 5,
      cursor: "pointer",
      ":hover": {
        color: theme.primaryColor,
      },
    }),
    valueContainer: () => ({
      height: 40,
      paddingTop: 10,
      paddingLeft: 5,
      
    }),
    singleValue: () => ({
      color: theme.fonts,
      fontSize: 18,
    })
  };

  return (
    <SelectContent
      theme={theme}
      customWidth={customWidth}
      options={options}
      value={value}
      styles={colourStyles}
      onChange={changeHandler}
    />
  );
};

export default SelectCountry;
