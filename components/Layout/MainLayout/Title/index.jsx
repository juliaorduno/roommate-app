import React from 'react';
import PropTypes from 'prop-types';
import { TitleContainer, TitleText } from './styles';

const Title = ({ title }) => (
  <TitleContainer>
    <TitleText>{title}</TitleText>
  </TitleContainer>
);

Title.displayName = 'Title';

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
