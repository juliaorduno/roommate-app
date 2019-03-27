import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Title from './Title';
import {
  MainContainer,
  Content,
  HeaderContainer,
  TitleContainer,
  CenteredContent,
  FooterContainer,
  Footer
} from './styles';
import AddButton from './AddButton';

const MainLayout = ({ children, title, footer, hasAddButton, active }) => (
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
        {footer && (
          <FooterContainer>
            <Footer>{footer}</Footer>
          </FooterContainer>
        )}
      </CenteredContent>
    </Content>
  </MainContainer>
);

MainLayout.displayName = 'MainLayout';

MainLayout.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.string,
  title: PropTypes.string,
  hasAddButton: PropTypes.bool,
  active: PropTypes.string.isRequired
};

MainLayout.defaultProps = {
  children: null,
  footer: '',
  title: '',
  hasAddButton: false
};

export default MainLayout;
