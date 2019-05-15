import React, { PureComponent }  from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import Card from '../../components/Todo/Card';
import { instance } from '../../services';
import { formatDateLL } from '../../static/utils';

class ToDo extends PureComponent {
  state = {
    toDos: [],
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('currentUser')).data;

    instance.get(`/groups/${user.group_id}/tasks`)
      .then( res => this.setState({ toDos: res.data.todos }));
  };

  finishTask = ev => {
    const user = JSON.parse(localStorage.getItem('currentUser')).data;
    const requestPayload = {
      id: parseInt(ev.target.name),
      finished_by: user.id
    };

    instance.post(`/tasks/finish`, requestPayload)
      .then(res => console.log(res));
  };

  render() {
    const { toDos } = this.state;

    return (
      <MainLayout title="To-do's" footer="No more to-do's" hasAddButton active="To-do's">
        {toDos.map(task => (
          <Card 
            key={task.id}
            name={task.id}
            item={task.description}
            dueDate={formatDateLL(task.due_date)}
            text={"Asignee: " + task.asignee.full_name}
            finished={task.finished == 1}
            handler={this.finishTask.bind(this)}
          />
        ))}
      </MainLayout>
    );
  }
}

ToDo.displayName = 'ToDo';

export default ToDo;
