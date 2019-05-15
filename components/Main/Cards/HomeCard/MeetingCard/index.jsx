import React from 'react';
import PropTypes from 'prop-types';
import MainCard from '../MainCard';
import Title from './Title';
import { colors } from '../../../../../static/styleConstants';

const MeetingCard = ({ avatar, userName, date, item }) => (
  <MainCard
    avatar={avatar}
    icon="calendar-alt"
    Title={<Title userName={userName} item={item} />}
    color={colors.primaryColor}
    date={date}
  />
);

MeetingCard.displayName = 'ShoppingCard';

MeetingCard.propTypes = {
  avatar: PropTypes.string,
  date: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired
};

MeetingCard.defaultProps = {
  avatar: ''
};

export default MeetingCard;
