import React from 'react';
import PropTypes from 'prop-types';
import { BoldText, NormalText } from '../styles';

const Title = ({ userName }) => (
  <React.Fragment>
    <BoldText>{userName}</BoldText>
    <NormalText>&ensp;sent an announcement.</NormalText>
  </React.Fragment>
);

Title.propTypes = {
  userName: PropTypes.string.isRequired
};

export default Title;
