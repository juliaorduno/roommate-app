import React, { PureComponent } from 'react';
import { instance } from '../../services';
import MainLayout from '../../components/Layout/MainLayout';
import ShoppingCard from '../../components/Todo/ShoppingCard';

class ShoppingList extends PureComponent {
  state = {
    shoppingList: [],
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('currentUser')).data;

    instance.get(`/groups/${user.group_id}/shoppingItems`)
      .then( res => this.setState({ shoppingList: res.data.shopping_items }));
  };

  finishItem = ev => {
    const user = JSON.parse(localStorage.getItem('currentUser')).data;
    const requestPayload = {
      id: parseInt(ev.target.name),
      finished_by: user.id
    };

    instance.post(`/shoppingItems/finish`, requestPayload)
      .then(res => console.log(res));
  };

  render() {

    const { shoppingList } = this.state;

    return (
      <MainLayout
        title="Shopping List"
        footer="No more items in the shopping list"
        hasAddButton
        active="Shopping List"
      >
        {shoppingList.map(item => (
          <ShoppingCard
            key={item.id}
            name={item.id}
            item={item.description}
            text={"Added by: " + item.added_by.full_name}
            handler={this.finishItem.bind(this)}
          />
        ))}
      </MainLayout>
    );
  }
};

ShoppingList.displayName = 'ShoppingList';

export default ShoppingList;
