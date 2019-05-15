import React from 'react';
import PropTypes from 'prop-types';
import { BoldText, NormalText } from '../styles';

const Title = ({ userName, text }) => (
  <React.Fragment>
    <BoldText>{userName}</BoldText>
    <NormalText>&ensp;{text}</NormalText>
  </React.Fragment>
);

Title.propTypes = {
  userName: PropTypes.string.isRequired,
  text: PropTypes.string
};

Title.defaultProps = {
  text: 'sent an announcement.'
};

export default Title;
