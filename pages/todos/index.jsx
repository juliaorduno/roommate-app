import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import Card from '../../components/Layout/MainLayout/Card';

const Home = () => (
  <MainLayout title="To-do's" hasAddButton active="Home">
    <Card title="Take out the trash" text="Assignee: Julia Paola"/>
  </MainLayout>
);

Home.displayName = 'Home';

export default Home;
