import React, { PureComponent } from 'react';
import { instance } from '../../services';
import MainLayout from '../../components/Layout/MainLayout';
import HomeCard from '../../components/Main/Cards/HomeCard';
import { formatDateLLL, getCardType } from '../../static/utils';

class Home extends PureComponent {

  state = {
    feed: [],
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('currentUser')).data;

    instance.get(`/groups/${user.group_id}/logs`)
      .then(res => {
        let logs = res.data.logs;
        let feed = logs.map(log => {
          return {
            userName: log.member.full_name,
            date: formatDateLLL(log.created_at),
            item: log.item,
            type: getCardType(log.type)
          }; 
        });

        this.setState({ feed });
      });
  };

  render() {

    const { feed } = this.state;
    
    return (
      <MainLayout title="Recent activity" footer="No more recent activity" hasAddButton active="Home">
        {feed.map(item => (
          <HomeCard key={`${item.type}-${item.userName}-${item.date}`} data={item} />
        ))}
      </MainLayout>
    );
  };
};

Home.displayName = 'Home';

export default Home;
