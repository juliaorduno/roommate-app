import React, { PureComponent } from 'react';
import { instance } from '../../services';
import MainLayout from '../../components/Layout/MainLayout';
import MeetingCard from '../../components/Todo/MeetingCard';
import moment from 'moment';

class Meetings extends PureComponent {

  state = {
    meetings: [],
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('currentUser')).data;

    instance.get(`/groups/${user.group_id}/meetings`)
      .then(res => this.setState({ meetings: res.data.meetings }));
  };

  formatDate = rawDate => `${moment(rawDate).format('dddd')}, ${moment(rawDate).format('LL')}`;

  render() {
    const { meetings } = this.state;

    return (
      <MainLayout
        title="Upcoming Meetings"
        footer="No more upcoming meetings"
        hasAddButton
        active="Meetings"
      >
        {meetings.map(meeting => (
          <MeetingCard 
            key={meeting.id}
            event={meeting.event}
            text={"Organizer: " + meeting.organizer.full_name}
            dueDate={this.formatDate(meeting.due_date)}
          />
        ))}
      </MainLayout>
    );
  };
};

Meetings.displayName = 'Meetings';

export default Meetings;
