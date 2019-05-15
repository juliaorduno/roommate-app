import React from 'react';
import PropTypes from 'prop-types';
import { BoldText, NormalText } from '../styles';

const Title = ({ userName, name }) => (
  <React.Fragment>
    <BoldText>{userName}</BoldText>
    <NormalText>&ensp;scheduled&ensp;</NormalText>
    <BoldText>{name}</BoldText>
  </React.Fragment>
);

Title.propTypes = {
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Title;
