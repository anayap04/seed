import React, { useMemo, useState } from 'react';
import countryList from 'react-select-country-list';
import { Root, LabelCountry, SelectContent } from './styles';
import { useTheme } from 'styled-components';
import { DefaultTheme } from '../../../../theme/themes';

const SelectCountry = (props) => {
  const { customWidth, setCountry, labelTitle } = props;
  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);
  const theme = useTheme() || DefaultTheme;
  const changeHandler = (value) => {
    const countryCode = countryList().data.filter((x) => {
      return x.label === value.label;
    });
    setValue(countryCode[0]);
    setCountry(countryCode[0].value);
  };

  const colourStyles = {
    menu: () => ({
      color: theme.colors.nero,
      backgroundColor: theme.colors.white,
      width: customWidth + 3,
      height: 200,
      marginLeft: -3,
      zIndex: 100
    }),
    option: () => ({
      color: theme.colors.nero,
      backgroundColor: theme.colors.white,
      padding: 5,
      cursor: 'pointer',
      ':hover': {
        color: theme.colors.green
      }
    }),
    valueContainer: () => ({
      height: 40,
      paddingTop: 10,
      paddingLeft: 5
    }),
    singleValue: () => ({
      color: theme.colors.nero,
      fontSize: 18
    })
  };

  return (
    <Root>
      <LabelCountry>{labelTitle}</LabelCountry>
      <SelectContent
        placeholder="Selecciona País"
        customWidth={customWidth}
        options={options}
        value={value}
        styles={colourStyles}
        onChange={changeHandler}
      />
    </Root>
  );
};

export default SelectCountry;
