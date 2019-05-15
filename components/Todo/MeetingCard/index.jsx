import React from 'react';
import PropTypes from 'prop-types';
import { BoldText, OrangeText, CalendarIcon } from '../styles';
import MainCard from '../MainCard';

const MeetingCard = ({ event, dueDate, text, name }) => (
  <MainCard 
    title={<BoldText><OrangeText>!!! </OrangeText>{event} on {dueDate}</BoldText>}
    text={text}
    name={name}
    actionElement={<CalendarIcon icon="calendar-alt" />}
  />
);

MeetingCard.displayName = 'MeetingCard';

MeetingCard.propTypes = {
  event: PropTypes.string,
  text: PropTypes.string
};

MeetingCard.defaultProps = {
  event: 'Event',
  text: 'Assignee'
};

export default MeetingCard;