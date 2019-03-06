import React, { PureComponent } from 'react';
import Link from 'next/link';
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
            <Link href="/signup/join-group">
              <Button width="255px" text="Join Group" onClick={() => {}} addClass="primary" />
            </Link>
            <Link href="/signup/create-group">
              <Button width="255px" text="Create Group" onClick={() => {}} addClass="secondary" />
            </Link>
          </ButtonContainer>
        </FormContainer>
      </React.Fragment>
    );
  }
}

SignUp.displayName = 'SignUp';

export default SignUp;
