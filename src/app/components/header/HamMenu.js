import React from 'react';
import { useTheme } from 'styled-components';

import { slide as Menu } from 'react-burger-menu';
import { MenuItem } from './styles';
import icon from '../../../assets/imgs/svg/menu.svg';
import cross from '../../../assets/imgs/svg/cross.svg';

const HamMenu = (props) => {
  const { navArr } = props;
  const theme = useTheme();
  const styles = {
    bmMenu: {
      background: theme.colors.white,
      padding: '2.5em 1em 0',
      fontSize: '1.15em'
    },
    bmBurgerButton: {
      position: 'absolute',
      width: 36,
      height: 30,
      right: 10,
      top: 10
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    },
    bmBurgerBars: {
      background: theme.colors.white
    },
    bmItemList: {
      color: theme.colors.nero,
      paddingTop: 10
    },
    bmItem: {
      paddingTop: 10
    }
  };

  const mapMenu = (item) => (
    <MenuItem key={item.id} alt={item.label} onClick={() => item.onClick()}>
      {item.label}
    </MenuItem>
  );

  return (
    <Menu
      right
      styles={styles}
      customBurgerIcon={<img alt="Menu" src={icon} />}
      customCrossIcon={<img alt="Cerrar" src={cross} />}>
      {navArr.map((nav) => mapMenu(nav))}
    </Menu>
  );
};

export default HamMenu;
