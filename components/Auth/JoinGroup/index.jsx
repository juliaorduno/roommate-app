import React, { PureComponent } from 'react';
import { instance } from '../../../services';
import Router from 'next/router';
import { FormContainer } from '../styles';
import ButtonContainer from './styles';
import Field from '../Field';
import Button from '../Button';
import Title from '../Title';

class JoinGroup extends PureComponent {
  state = {
    groupCode: ''
  };

  onChange = (name, value) => {
    this.setState({ [[name]]: value });
  };

  joinGroup = ev => {
    ev.preventDefault();

    const user = JSON.parse(localStorage.getItem('currentUser')).data;
    const { groupCode } = this.state;
    const payload = {
      group_code: groupCode,
      member_id: user.id,
    };
    instance.post(`/members/joinGroup`, payload)
      .then(res => {
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        Router.push('/home');
      });
  };

  render() {
    const { groupCode } = this.state;

    return (
      <React.Fragment>
        <Title text="JOIN GROUP" />
        <FormContainer>
          <Field
            label="Group Code"
            name="groupCode"
            id="groupCode"
            type="text"
            placeholder="Type your group code"
            value={groupCode}
            onChange={this.onChange}
            required
          />
          <ButtonContainer>
            <Button width="265px" text="Join" onClick={this.joinGroup} addClass="primary" />
          </ButtonContainer>
        </FormContainer>
      </React.Fragment>
    );
  }
}

JoinGroup.displayName = 'JoinGroup';

export default JoinGroup;
