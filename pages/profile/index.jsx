import React, { PureComponent } from 'react';
import { instance } from '../../services';
import { formatDateLLSimple } from '../../static/utils';
import PropTypes from 'prop-types';
import MainLayout from '../../components/Layout/MainLayout';
import GroupInfoCard from '../../components/Profile/Card/GroupInfoCard';
import UserInfoCard from '../../components/Profile/Card/UserInfoCard';

class Profile extends PureComponent {
  state = {
    userName: '',
    memberSinceDate: '',
    groupCode: '',
    members: [],
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('currentUser')).data;
    this.setState({ userName: user.full_name, memberSinceDate: formatDateLLSimple(user.updated_at)});

    instance.get(`/groups/${user.group_id}`)
      .then(res => {
        let members = res.data.data.members.map(member => member.full_name);
        this.setState({ groupCode: res.data.data.code, members });
      });
  };

  render() {
    const { userName, memberSinceDate, groupCode, members } = this.state;
    const { avatar } = this.props;

    return (
      <MainLayout title="My profile" active="profile">
        <UserInfoCard avatar={avatar} userName={userName} date={memberSinceDate} />
        <GroupInfoCard groupCode={groupCode} 
          members={<p>{members.join()}</p>}
        />
      </MainLayout>
    );
  };
};

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
