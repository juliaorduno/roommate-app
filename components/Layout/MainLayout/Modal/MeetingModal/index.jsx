import React, { Component } from 'react';
import { instance } from '../../../../../services';
import PropTypes from 'prop-types';
import MainModal from '../MainModal';
import { Field, Label, TextInput, NumberInput, Numbers, FieldsContainer } from '../styles';

class MeetingModal extends Component {
  state = {
    name: '',
    day: '',
    month: '',
    year: '',
    hour: '',
    minute: '',
  };

  onConfirm = () => {
    const { name, day, month, year, hour, minute} = this.state;

    if(name.length > 0) {
      const user = JSON.parse(localStorage.getItem('currentUser')).data;

      const newMeeting = {
        event: name,
        group_id: parseInt(user.group_id),
        created_by: parseInt(user.id),
        start_date: `20${year}-${month}-${day}T${hour}:${minute}:00-05:00`,
        end_date: `20${year}-${month}-${day}T${hour}:${minute}:00-05:00`,
      };

      instance.post(`/meetings`, newMeeting)
        .then(() => {});
    }
  }

  onChange = (name, value) => {
    this.setState({ [[name]]: value });
  };

  handleOnChange = (e) => {
    this.onChange(e.target.name, e.target.value);
  }

  onNumberChange = (name, value) => {
    if (value.length <= 2) {
      this.setState({ [[name]]: value });
    }
  };

  handleOnNumberChange = (e) => {
    this.onNumberChange(e.target.name, e.target.value);
  }

  onCancel = () => {
    this.setState({
      name: '',
      day: '',
      month: '',
      year: '',
      hour: '',
      minute: '',
    })
  }

  render() {
    const { isMeetingOpen, toggleModal } = this.props
    const { name, day, month, year, hour, minute } = this.state;

    return (
      <MainModal isOpen={isMeetingOpen} title="New meeting" onCancelClick={this.onCancel} onConfirmClick={this.onConfirm} toggleModal={() => toggleModal('Meeting')}>
        <FieldsContainer>
          <Field>
            <Label>Meeting name</Label>
            <TextInput name="name" type="text" value={name} onChange={this.handleOnChange} placeholder="Type the name of the meeting"/>
          </Field>
        </FieldsContainer>
        <FieldsContainer>
          <Field>
            <Label>Select date</Label>
            <Numbers>
              <NumberInput name="day" type="number" max={31} min={0} placeholder="DD" value={day} onChange={this.handleOnNumberChange}/>
              &ensp;/&ensp;
              <NumberInput name="month" type="number" max={31} min={0} placeholder="MM" value={month} onChange={this.handleOnNumberChange}/>
              &ensp;/&ensp;
              <NumberInput name="year" type="number" min={19} placeholder="YY" value={year} onChange={this.handleOnNumberChange}/>
            </Numbers>
          </Field>
          <Field>
            <Label>Choose time</Label>
            <Numbers>
              <NumberInput name="hour" type="number" max={23} min={0} placeholder="HH" value={hour} onChange={this.handleOnNumberChange}/>
              &ensp;:&ensp;
              <NumberInput name="minute" type="number" max={59} min={0} placeholder="MM" value={minute} onChange={this.handleOnNumberChange}/>
            </Numbers>
          </Field>
        </FieldsContainer>
      </MainModal>
    );
  }
}

MeetingModal.propTypes = {
  isMeetingOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default MeetingModal;
