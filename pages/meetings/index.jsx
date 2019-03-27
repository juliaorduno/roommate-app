import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';

const Meetings = () => (
  <MainLayout
    title="Upcoming Meetings"
    footer="No more upcoming meetings"
    hasAddButton
    active="Meetings"
  />
);

Meetings.displayName = 'Meetings';

export default Meetings;
