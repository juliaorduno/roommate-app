import React from 'react';
import PropTypes from 'prop-types';
import MainCard from '../MainCard';
import Title from './Title';
import { colors } from '../../../../../static/styleConstants';

const TodoCard = ({ avatar, userName, date, item }) => (
  <MainCard
    avatar={avatar}
    icon="check"
    Title={<Title userName={userName} item={item} />}
    color={colors.greenColor}
    date={date}
  />
);

TodoCard.displayName = 'TodoCard';

TodoCard.propTypes = {
  avatar: PropTypes.string,
  date: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired
};

TodoCard.defaultProps = {
  avatar: ''
};

export default TodoCard;
