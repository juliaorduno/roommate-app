import React from 'react';
import PropTypes from 'prop-types';
import { BoldText, NormalText } from '../styles';

const Title = ({ userName, item }) => (
  <React.Fragment>
    <BoldText>{userName}</BoldText>
    <NormalText>&ensp;scheduled&ensp;</NormalText>
    <BoldText>{item}</BoldText>
  </React.Fragment>
);

Title.propTypes = {
  userName: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired
};

export default Title;
