import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainModal from '../MainModal';
import { Field, Label, TextInput, FieldsContainer } from '../styles';

class AnnouncementModal extends Component {
  state = {
    announcement: '',
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
      announcement: '',
    })
  }

  render() {
    const { isAnnouncementOpen, toggleModal } = this.props
    const { announcement } = this.state;

    return (
      <MainModal isOpen={isAnnouncementOpen} title="New meeting" confirmMessage="POST" onCancelClick={this.onCancel} onConfirmClick={this.onConfirm} toggleModal={() => toggleModal('Meeting')}>
        <FieldsContainer>
          <Field>
            <Label>Announcement</Label>
            <TextInput name="announcement" type="text" value={announcement} onChange={this.handleOnChange} placeholder="Type your announcement"/>
          </Field>
        </FieldsContainer>
      </MainModal>
    );
  }
}

AnnouncementModal.propTypes = {
  isAnnouncementOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default AnnouncementModal;
