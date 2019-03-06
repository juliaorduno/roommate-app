import React from 'react';
import PropTypes from 'prop-types';
import { Header, HeaderContainer } from './styles';

const Title = ({ text }) => (
  <HeaderContainer>
    <Header>{text}</Header>
  </HeaderContainer>
);

Title.displayName = 'Title';

Title.propTypes = {
  text: PropTypes.string.isRequired
};

export default Title;
