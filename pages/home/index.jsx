import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import { cards } from './mockedData.json';
import HomeCard from '../../components/Main/Cards/HomeCard';

const Home = () => (
  <MainLayout title="Recent activity" footer="No more recent activity" hasAddButton active="Home">
    {cards.map(card => (
      <HomeCard key={`${card.type}-${card.userName}-${card.date}`} data={card} />
    ))}
  </MainLayout>
);

Home.displayName = 'Home';

export default Home;
