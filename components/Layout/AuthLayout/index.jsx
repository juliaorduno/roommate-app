import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import { MainContainer, Content, FormContainer, FooterContainer } from './styles';

const AuthLayout = ({ children }) => (
  <MainContainer>
    <Content>
      <FormContainer>{children}</FormContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Content>
  </MainContainer>
);

AuthLayout.displayName = 'AuthLayout';

AuthLayout.propTypes = {
  children: PropTypes.node
};

AuthLayout.defaultProps = {
  children: null
};

export default AuthLayout;
