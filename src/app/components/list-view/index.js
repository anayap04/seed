import React from "react";
import { ListContainer, Item } from "./styles";

const ListView = (props) => {
  const { arrayItems, theme, setList } = props;
  
  const clicked = item => {
    item.onClick()
    setList(false)
  }

  const renderItems = (item) => (
    <Item theme={theme} onClick={item.onClick ? () => clicked(item) : null}>
      {item.label}
    </Item>
  );
  return (
    <ListContainer theme={theme}>
      {arrayItems.map((i) => renderItems(i))}
    </ListContainer>
  );
};

export default ListView;
