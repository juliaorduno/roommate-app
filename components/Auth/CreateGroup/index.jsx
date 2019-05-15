import React, { PureComponent } from 'react';
import { instance } from '../../../services';
import Router from 'next/router';
import { FormContainer } from '../styles';
import ButtonContainer from './styles';
import Field from '../Field';
import Button from '../Button';
import Title from '../Title';

class CreateGroup extends PureComponent {
  state = {
    groupName: '',
    roommatesNumber: ''
  };

  onChange = (name, value) => {
    this.setState({ [[name]]: value });
  };

  joinHandler = ev => {
    ev.preventDefault();
    let user = JSON.parse(localStorage.getItem('currentUser'));
    const { data } = user;
    const { groupName, roommatesNumber } = this.state;
    const newGroup = {
      name: groupName,
      size: parseInt(roommatesNumber),
      created_by: data.id,
      admin: data.id,
    };

    instance.post(`/groups`, newGroup)
      .then(res => {
        user.data.group_id = res.data.new_rgroup.id;
        localStorage.setItem('currentUser', JSON.stringify(user));
        Router.push('/home');
      });

  }

  render() {
    const { groupName, roommatesNumber } = this.state;

    return (
      <React.Fragment>
        <Title text="CREATE GROUP" />
        <FormContainer>
          <Field
            label="Group Name"
            name="groupName"
            id="groupName"
            type="text"
            placeholder="Type the name of the group"
            value={groupName}
            onChange={this.onChange}
            required
          />
          <Field
            label="Number of roommates"
            name="roommatesNumber"
            id="roommatesNumber"
            type="text"
            placeholder="Optional"
            value={roommatesNumber}
            onChange={this.onChange}
          />
          <ButtonContainer>
            <Button width="256px" text="Join" onClick={this.joinHandler} addClass="secondary" />
          </ButtonContainer>
        </FormContainer>
      </React.Fragment>
    );
  }
}

CreateGroup.displayName = 'CreateGroup';

export default CreateGroup;
