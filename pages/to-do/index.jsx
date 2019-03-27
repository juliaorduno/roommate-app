import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';

const ToDo = () => (
  <MainLayout title="To-do's" footer="No more to-do's" hasAddButton active="To-do's" />
);

ToDo.displayName = 'ToDo';

export default ToDo;
