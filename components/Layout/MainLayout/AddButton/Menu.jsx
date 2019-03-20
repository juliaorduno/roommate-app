import React from 'react';
import PropTypes from 'prop-types';
import { items } from './menu.json';
import { MenuContainer, MenuItem, MenuItemContainer } from './styles';

const Menu = ({ opened }) => (
  <MenuContainer className={opened ? 'visible' : ''}>
    {items.map(item => (
      <MenuItemContainer key={item.label}>
        <MenuItem>{item.label}</MenuItem>
      </MenuItemContainer>
    ))}
  </MenuContainer>
);

Menu.displayName = 'Menu';

Menu.propTypes = {
  opened: PropTypes.bool.isRequired
};

export default Menu;
