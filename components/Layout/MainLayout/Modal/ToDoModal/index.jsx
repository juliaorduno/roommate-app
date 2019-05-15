import React, { Component } from 'react';
import { instance } from '../../../../../services';
import PropTypes from 'prop-types';
import MainModal from '../MainModal';
import { Field, Label, TextInput, FieldsContainer } from '../styles';

class ToDoModal extends Component {
  state = {
    item: '',
    assignee: -1,
    members: [],
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('currentUser')).data;

    instance.get(`/groups/${user.group_id}`)
      .then(res => {
        this.setState({ members: res.data.data.members });
      });
  };

  onConfirm = () => {
    const { assignee, item } = this.state;

    if (assignee >= 0 && item.length > 0) {
      const user = JSON.parse(localStorage.getItem('currentUser')).data;

      const newTask = {
        description: item,
        group_id: parseInt(user.group_id),
        asignee_id: parseInt(assignee),
        due_date: '2019-05-22T01:36:09.5807107-06:00',
        finished: 0,
        created_by: parseInt(user.id),
      };
      
      instance.post(`/tasks`, newTask)
        .then(() => {});
    }
  }

  onChange = (name, value) => {
    this.setState({ [[name]]: value });
  };

  handleOnChange = (e) => {
    this.onChange(e.target.name, e.target.value);
  };

  onCancel = () => {
    this.setState({
      item: '',
      assignee: -1,
    });
  };

  render() {
    const { isToDoOpen, toggleModal } = this.props
    const { item, assignee, members } = this.state;

    return (
      <MainModal isOpen={isToDoOpen} title="Add to-do" onCancelClick={this.onCancel} onConfirmClick={this.onConfirm} toggleModal={() => toggleModal('Meeting')}>
        <FieldsContainer>
          <Field>
            <Label>Item</Label>
            <TextInput name="item" type="text" value={item} onChange={this.handleOnChange} placeholder="Type the to-do"/>
          </Field>
        </FieldsContainer>
        <FieldsContainer>
          <Field>
            <Label>Assignee</Label>
            <select name="assignee" value={assignee} onChange={this.handleOnChange} >
              <option value="-1">Select a member</option>
              {members.map(member => <option key={member.id} value={member.id}>{member.full_name}</option>)}
            </select>
          </Field>
        </FieldsContainer>
      </MainModal>
    );
  }
}

ToDoModal.propTypes = {
  isToDoOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default ToDoModal;
