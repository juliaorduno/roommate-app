import React from 'react';
import PropTypes from 'prop-types';
import MainCard from '../MainCard';
import Title from './Title';
import { AnnouncementContainer, Announcement } from './styles';
import { colors } from '../../../../../static/styleConstants';

const AnnouncementCard = ({ avatar, announcement, userName, date }) => (
  <MainCard
    avatar={avatar}
    icon="bullhorn"
    Title={<Title userName={userName} />}
    color={colors.purpleColor}
    date={date}
  >
    <AnnouncementContainer>
      <Announcement>{announcement}</Announcement>
    </AnnouncementContainer>
  </MainCard>
);

AnnouncementCard.displayName = 'AnnouncementCard';

AnnouncementCard.propTypes = {
  avatar: PropTypes.string,
  announcement: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
};

AnnouncementCard.defaultProps = {
  avatar: ''
};

export default AnnouncementCard;
