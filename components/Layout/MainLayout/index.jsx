import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Title from './Title';
import { MainContainer, Content, HeaderContainer, TitleContainer, CenteredContent } from './styles';
import AddButton from './AddButton';

const MainLayout = ({ children, title, hasAddButton, active }) => (
  <MainContainer>
    <HeaderContainer>
      <Navigation active={active} />
    </HeaderContainer>
    <Content>
      <CenteredContent>
        <TitleContainer>
          {title && <Title title={title} />}
          {hasAddButton && <AddButton />}
        </TitleContainer>
        {children}
      </CenteredContent>
    </Content>
  </MainContainer>
);

MainLayout.displayName = 'MainLayout';

MainLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  hasAddButton: PropTypes.bool,
  active: PropTypes.string.isRequired
};

MainLayout.defaultProps = {
  children: null,
  title: '',
  hasAddButton: false
};

export default MainLayout;
