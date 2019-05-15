import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainModal from '../MainModal';
import { Field, Label, TextInput, FieldsContainer } from '../styles';

class ToDoModal extends Component {
  state = {
    item: '',
    assignee: '',
  };

  onConfirm = () => {
    // Add function
  }

  onChange = (name, value) => {
    this.setState({ [[name]]: value });
  };

  handleOnChange = (e) => {
    this.onChange(e.target.name, e.target.value);
  }

  onCancel = () => {
    this.setState({
      item: '',
      assignee: '',
    })
  }

  render() {
    const { isToDoOpen, toggleModal } = this.props
    const { item, assignee } = this.state;

    return (
      <MainModal isOpen={isToDoOpen} title="New meeting" onCancelClick={this.onCancel} onConfirmClick={this.onConfirm} toggleModal={() => toggleModal('Meeting')}>
        <FieldsContainer>
          <Field>
            <Label>Item</Label>
            <TextInput name="item" type="text" value={item} onChange={this.handleOnChange} placeholder="Type the to-do"/>
          </Field>
        </FieldsContainer>
        <FieldsContainer>
          <Field>
            <Label>Assignee</Label>
            <TextInput name="assignee" type="text" value={assignee} onChange={this.handleOnChange} placeholder="Type the name of a member"/>
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
