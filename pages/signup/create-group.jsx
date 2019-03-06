import React from 'react';
import AuthLayout from '../../components/Layout/AuthLayout';
import CreateGroup from '../../components/Auth/CreateGroup';

const CreateGroupPage = () => (
  <AuthLayout>
    <CreateGroup />
  </AuthLayout>
);

CreateGroupPage.displayName = 'CreateGroupPage';

export default CreateGroupPage;
