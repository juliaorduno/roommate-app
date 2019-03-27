import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import Card from '../../components/Todo/Card';

const ToDo = () => (
  <MainLayout title="To-do's" footer="No more to-do's" hasAddButton active="To-do's">
    <Card item="Clean the kitchen" dueDate="Thursday, May 14, 2019" text="Assignee: Julia Paola"/>
  </MainLayout>
);

ToDo.displayName = 'ToDo';

export default ToDo;
