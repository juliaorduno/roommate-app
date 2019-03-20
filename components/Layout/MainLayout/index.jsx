import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Title from './Title';
import { MainContainer, Content, HeaderContainer, CenteredContent } from './styles';

const MainLayout = ({ children, title, active }) => (
  <MainContainer>
    <HeaderContainer>
      <Navigation active={active} />
    </HeaderContainer>
    <Content>
      <CenteredContent>
        {title && <Title title={title} />}
        {children}
      </CenteredContent>
    </Content>
  </MainContainer>
);

MainLayout.displayName = 'MainLayout';

MainLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  active: PropTypes.string.isRequired
};

MainLayout.defaultProps = {
  children: null,
  title: ''
};

export default MainLayout;
