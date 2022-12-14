import React from "react";
import { ListContainer, Item } from "./styles";

const ListView = (props) => {
  const { arrayItems, theme, setList, width, setValue } = props;
  
  const clicked = item => {    
    if (setValue) {
      setValue(item)
    } else {
      item.onClick()
    }
    setList(false)
  }

  const renderItems = (item, index) => (
    <Item key={index} theme={theme} onClick={item.onClick || setValue ? () => clicked(item) : null}>
      {item.label ? item.label : item}
    </Item>
  );
  return (
    <ListContainer width={width} theme={theme}>
      {arrayItems.map((i, index) => renderItems(i, index))}
    </ListContainer>
  );
};

export default ListView;
