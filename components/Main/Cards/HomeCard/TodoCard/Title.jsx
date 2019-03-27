import React from 'react';
import PropTypes from 'prop-types';
import { BoldText, Highlight, NormalText } from '../styles';

const Title = ({ userName, item }) => (
  <React.Fragment>
    <BoldText>{userName}</BoldText>
    <NormalText>&ensp;added&ensp;</NormalText>
    <BoldText>{item}</BoldText>
    <NormalText>&ensp;to the&ensp;</NormalText>
    <Highlight>todo list.</Highlight>
  </React.Fragment>
);

Title.propTypes = {
  userName: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired
};

export default Title;
