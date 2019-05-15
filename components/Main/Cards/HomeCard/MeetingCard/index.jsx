import React from 'react';
import PropTypes from 'prop-types';
import MainCard from '../MainCard';
import Title from './Title';
import { colors } from '../../../../../static/styleConstants';

const MeetingCard = ({ avatar, userName, date, name }) => (
  <MainCard
    avatar={avatar}
    icon="calendar-alt"
    Title={<Title userName={userName} name={name} />}
    color={colors.primaryColor}
    date={date}
  />
);

MeetingCard.displayName = 'ShoppingCard';

MeetingCard.propTypes = {
  avatar: PropTypes.string,
  date: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

MeetingCard.defaultProps = {
  avatar: ''
};

export default MeetingCard;
