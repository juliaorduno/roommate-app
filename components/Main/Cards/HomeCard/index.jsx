import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCard from './ShoppingCard';
import AnnouncementCard from './AnnouncementCard';
import MeetingCard from './MeetingCard';
import TodoCard from './TodoCard'

const HomeCard = ({ data }) => {
  switch (data.type) {
    case 'shopping':
      return (
        <ShoppingCard
          avatar={data.avatar ? data.avatar : ''}
          userName={data.userName}
          date={data.date}
          item={data.item}
        />
      );
    case 'announcement':
      return (
        <AnnouncementCard
          avatar={data.avatar ? data.avatar : ''}
          userName={data.userName}
          date={data.date}
          announcement={data.announcement}
        />
      );
    case 'todo':
      return (
        <TodoCard
          avatar={data.avatar ? data.avatar : ''}
          userName={data.userName}
          date={data.date}
          item={data.item}
        />
      );
    case 'meeting':
      return (
        <MeetingCard
          avatar={data.avatar ? data.avatar : ''}
          userName={data.userName}
          date={data.date}
          name={data.name}
        />
      );
    default:
      return null;
  }
};

HomeCard.displayName = 'HomeCard';

HomeCard.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    item: PropTypes.string,
    announcement: PropTypes.string,
    avatar: PropTypes.string
  }).isRequired
};

export default HomeCard;
