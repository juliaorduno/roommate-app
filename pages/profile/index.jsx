import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../../components/Layout/MainLayout';
import GroupInfoCard from '../../components/Profile/Card/GroupInfoCard';
import UserInfoCard from '../../components/Profile/Card/UserInfoCard'

const Profile = ({ avatar, userName, memberSinceDate, groupCode }) => (
  <MainLayout title="My profile" active="profile">
    <UserInfoCard avatar={avatar} userName={userName} date={memberSinceDate} />
    <GroupInfoCard groupCode={groupCode}/>
  </MainLayout>
);

Profile.displayName = 'myProfile';

Profile.propTypes = {
  avatar: PropTypes.string,
  userName: PropTypes.string,
  memberSinceDate: PropTypes.string,
  groupCode: PropTypes.string
};

Profile.defaultProps = {
  avatar: '',
  userName: 'María Gutiérrez',
  memberSinceDate: 'Jan 3, 2019',
  groupCode: '87csfsdfs68ds'
};

export default Profile;
