import React, { Component } from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import InputCard from '../../components/Main/Cards/InputCard';

class Announcements extends Component {
  state = {
    newAnnouncement: '',
  }

  handleOnPostClick = () => {
    // Add On Post Click
  }

  handleOnCancelClick = () => {
    this.setState({ newAnnouncement: '' });
  }

  handleOnInputChange = (key, value) => {
    this.setState({ newAnnouncement: value });
  }

  render() {
    const { newAnnouncement } = this.state;
    return (
      <MainLayout title="Announcements" footer="No more announcements" active="Announcements">
        <InputCard
          placeholder="Type an announcement..."
          value={newAnnouncement}
          onChange={this.handleOnInputChange}
          onPostClick={this.handleOnPostClick}
          onCancelClick={this.handleOnCancelClick}
        />
      </MainLayout>
    );
  }
}

Announcements.displayName = 'Announcements';

export default Announcements;
