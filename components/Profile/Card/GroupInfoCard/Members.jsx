import React from 'react';
import PropTypes from 'prop-types';
import { NormalText, Highlight } from './styles';

const Members = ({ members }) => (
  <React.Fragment>
    <NormalText>Members:</NormalText>
    <Highlight>{members}</Highlight>
  </React.Fragment>
);

Members.propTypes = {
  members: PropTypes.node.isRequired
};

export default Members;