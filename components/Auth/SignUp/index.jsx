import React, { PureComponent } from 'react';
import { instance } from '../../../services';
import Router from 'next/router';
import { FormContainer } from '../styles';
import ButtonContainer from './styles';
import Field from '../Field';
import Button from '../Button';
import Title from '../Title';

class SignUp extends PureComponent {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    username: ''
  };

  onChange = (name, value) => {
    this.setState({ [[name]]: value });
  };

  createUser = (nextRoute) => {
    
    const { email, password, confirmPassword, name, username } = this.state;
    const passwordsMatch = password === confirmPassword;
    const filledFields = email.length > 0 && password.length > 0 && name.length > 0 && username.length > 0;

    if ( passwordsMatch && filledFields ) {
      const user = {
        email,
        password,
        username,
        full_name: name
      };

      instance.post(`/users`, user)
        .then(res => {
          localStorage.setItem('currentUser', JSON.stringify(res.data));
          Router.push(nextRoute);
        });
    }
    
  };

  joinGroupHandler = ev => {
    ev.preventDefault();
    this.createUser('/signup/join-group');
  };

  createGroupHandler = ev => {
    ev.preventDefault();
    this.createUser('/signup/create-group');
  };

  render() {
    const { email, password, confirmPassword, name, username } = this.state;

    return (
      <React.Fragment>
        <Title text="Sign Up" />
        <FormContainer>
          <Field
            label="Email"
            name="email"
            id="email"
            type="email"
            placeholder="Type your email"
            value={email}
            onChange={this.onChange}
            required
          />
          <Field
            label="Password"
            name="password"
            id="password"
            type="password"
            placeholder="Type your password"
            value={password}
            onChange={this.onChange}
            required
          />
          <Field
            label="Confirm password"
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            placeholder="Type your password"
            value={confirmPassword}
            onChange={this.onChange}
            required
          />
          <Field
            label="Name"
            name="name"
            id="name"
            type="text"
            placeholder="Type your full name"
            value={name}
            onChange={this.onChange}
            required
          />
          <Field
            label="Username"
            name="username"
            id="username"
            type="text"
            placeholder="Type your password"
            value={username}
            onChange={this.onChange}
            required
          />
          <ButtonContainer>
            <Button width="255px" text="Join Group" onClick={this.joinGroupHandler} addClass="primary" />
            <Button width="255px" text="Create Group" onClick={this.createGroupHandler} addClass="secondary" />
          </ButtonContainer>
        </FormContainer>
      </React.Fragment>
    );
  }
}

SignUp.displayName = 'SignUp';

export default SignUp;
