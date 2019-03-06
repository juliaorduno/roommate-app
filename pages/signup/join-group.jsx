import React from 'react';
import AuthLayout from '../../components/Layout/AuthLayout';
import JoinGroup from '../../components/Auth/JoinGroup';

const JoinGroupPage = () => (
  <AuthLayout>
    <JoinGroup />
  </AuthLayout>
);

JoinGroupPage.displayName = 'JoinGroupPage';

export default JoinGroupPage;
