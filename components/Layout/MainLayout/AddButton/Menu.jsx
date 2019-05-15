import React from 'react';
import PropTypes from 'prop-types';
import { items } from './menu.json';
import { MenuContainer, MenuItem, MenuItemContainer } from './styles';

const Menu = ({ opened, toggleModal, onClick }) => {
  const clickItem = (modal) => {
    toggleModal(modal);
    onClick();
  }

  return (
    <MenuContainer className={opened ? 'visible' : ''}>
      {items.map(item => (
        <MenuItemContainer key={item.label}>
          <MenuItem onClick={() => clickItem(item.modal)}>{item.label}</MenuItem>
        </MenuItemContainer>
      ))}
    </MenuContainer>
  );
};

Menu.displayName = 'Menu';

Menu.propTypes = {
  opened: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Menu;
