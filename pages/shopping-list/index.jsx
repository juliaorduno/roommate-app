import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';

const ShoppingList = () => (
  <MainLayout
    title="Shopping List"
    footer="No more items in the shopping list"
    hasAddButton
    active="Shopping List"
  />
);

ShoppingList.displayName = 'ShoppingList';

export default ShoppingList;
