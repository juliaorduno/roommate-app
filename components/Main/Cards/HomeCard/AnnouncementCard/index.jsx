import React from 'react';
import PropTypes from 'prop-types';
import MainCard from '../MainCard';
import Title from './Title';
import { AnnouncementContainer, Announcement } from './styles';
import { colors } from '../../../../../static/styleConstants';

const AnnouncementCard = ({ avatar, announcement, userName, date, showIcon, text }) => (
  <MainCard
    avatar={avatar}
    icon="bullhorn"
    Title={<Title userName={userName} text={text}/>}
    color={colors.purpleColor}
    date={date}
    showIcon={showIcon}
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
  avatar: '',
  showIcon: true
};

export default AnnouncementCard;
