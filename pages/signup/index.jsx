import React from 'react';
import AuthLayout from '../../components/Layout/AuthLayout';
import SignUp from '../../components/Auth/SignUp';

const SignUpPage = () => (
  <AuthLayout>
    <SignUp />
  </AuthLayout>
);

SignUpPage.displayName = 'SignUpPage';

export default SignUpPage;
