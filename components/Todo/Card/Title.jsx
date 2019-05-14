import React from 'react';
import PropTypes from 'prop-types';
import { BoldText, Highlight, NormalText } from '../styles';

const Title = ({ item, dueDate }) => (
  <React.Fragment>
    <BoldText>{item}</BoldText>
    <NormalText>&ensp;-&ensp;</NormalText>
    <Highlight>Due on {dueDate}</Highlight>
    <NormalText>.</NormalText>
  </React.Fragment>
);

Title.propTypes = {
  item: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired
};

export default Title;