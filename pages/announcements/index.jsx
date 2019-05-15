import React, { PureComponent } from 'react';
import { instance } from '../../services';
import { formatDateLLL } from '../../static/utils';
import MainLayout from '../../components/Layout/MainLayout';
import AnnouncementCard from '../../components/Main/Cards/HomeCard/AnnouncementCard';
import InputCard from '../../components/Main/Cards/InputCard';

class Announcements extends PureComponent {

  state = {
    announcements: [],
    newAnnouncement: '',
  };

  handleOnPostClick = () => {
    const user = JSON.parse(localStorage.getItem('currentUser')).data;
    const { newAnnouncement, announcements } = this.state;

    if (newAnnouncement.length > 0) {
      const announcement = {
        group_id: parseInt(user.group_id),
        content: newAnnouncement,
        created_by: parseInt(user.id),
      };
  
      instance.post(`/announcements`, announcement)
        .then(res => {
          let newAnn = res.data.new_announcement;
          newAnn.posted_by = user;
  
          const updatedAnnouncements = [newAnn, ...announcements];
          this.setState({ newAnnouncement: '', announcements: updatedAnnouncements })
        });
    }
    
  }

  handleOnCancelClick = () => {
    this.setState({ newAnnouncement: '' });
  }

  handleOnInputChange = ev => {
    this.setState({ newAnnouncement: ev.target.value });
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('currentUser')).data;

    instance.get(`/groups/${user.group_id}/announcements`)
      .then(res => this.setState({ announcements: res.data.announcements }));
  };

  render() {

    const { announcements, newAnnouncement } = this.state;

    return (
      <MainLayout title="Announcements" footer="No more announcements" active="Announcements">
        <InputCard
          placeholder="Type an announcement..."
          value={newAnnouncement}
          onChange={this.handleOnInputChange}
          onPostClick={this.handleOnPostClick}
          onCancelClick={this.handleOnCancelClick}
        />
        {announcements.map(announcement => (
          <AnnouncementCard 
            key={announcement.id}
            announcement={announcement.content}
            userName={announcement.posted_by.full_name}
            date={formatDateLLL(announcement.created_at)}
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
