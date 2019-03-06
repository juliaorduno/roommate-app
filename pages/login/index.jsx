import React from 'react';
import AuthLayout from '../../components/Layout/AuthLayout';
import Login from '../../components/Auth/Login';

const LoginPage = () => (
  <AuthLayout>
    <Login />
  </AuthLayout>
);

LoginPage.displayName = 'LoginPage';

export default LoginPage;
