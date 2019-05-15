import React, { PureComponent } from 'react';
import moment from 'moment';
import { instance } from '../../services';
import MainLayout from '../../components/Layout/MainLayout';
import AnnouncementCard from '../../components/Main/Cards/HomeCard/AnnouncementCard';

class Announcements extends PureComponent {

  state = {
    announcements: [],
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('currentUser')).data;

    instance.get(`/groups/${user.group_id}/announcements`)
      .then(res => this.setState({ announcements: res.data.announcements }));
  };

  formatDate = rawDate => `${moment(rawDate).format('LLL')}`;

  render() {

    const { announcements } = this.state;

    return (
      <MainLayout title="Announcements" footer="No more announcements" active="Announcements">
        {announcements.map(announcement => (
          <AnnouncementCard 
            key={announcement.id}
            announcement={announcement.content}
            userName={announcement.posted_by.full_name}
            date={this.formatDate(announcement.created_at)}
            showIcon={false}
            text="posted:"
          />
        ))}
      </MainLayout>
    );
  };
};

Announcements.displayName = 'Announcements';

export default Announcements;
