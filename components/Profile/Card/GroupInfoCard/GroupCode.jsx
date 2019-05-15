import React from 'react';
import PropTypes from 'prop-types';
import { NormalText, Highlight } from './styles';

const GroupCode = ({ groupCode }) => (
  <React.Fragment>
    <NormalText>Group code:</NormalText>
    <Highlight>{groupCode}</Highlight>
  </React.Fragment>
);

GroupCode.propTypes = {
  groupCode: PropTypes.string.isRequired
};

export default GroupCode;
