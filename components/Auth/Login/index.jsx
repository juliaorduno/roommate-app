import React, { PureComponent } from 'react';
import { authenticationService } from '../../../services';
import Router from 'next/router';
import Link from 'next/link';
import {
  LogoImage,
  ActionsContainer,
  RememberContainer,
  RememberCheckbox,
  Remember,
  Forgot
} from './styles';
import { FormContainer } from '../styles';
import Field from '../Field';
import Button from '../Button';

class Login extends PureComponent {
  state = {
    email: '',
    password: '',
    remember: false
  };

  onChange = (name, value) => {
    this.setState({ [[name]]: value });
  };

  handleChecked = () => {
    const { remember } = this.state;
    this.setState({ remember: !remember });
  };

  signIn = ev => {
    ev.preventDefault();

    const { email, password } = this.state;
    authenticationService.login(email, password)
      .then(res => Router.push('/home'));
  };

  render() {
    const { email, password, remember } = this.state;

    return (
      <React.Fragment>
        <LogoImage src="/static/images/roommate-logo-white.png" />
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
          <ActionsContainer>
            <RememberContainer>
              <RememberCheckbox
                id="remember"
                type="checkbox"
                name="remember"
                checked={remember}
                onChange={this.handleChecked}
              />
              <Remember>Remember me</Remember>
            </RememberContainer>
            <Forgot>Forgot your password</Forgot>
          </ActionsContainer>
          <Button width="100%" text="Login" onClick={this.signIn} addClass="primary" />
          <Link href="/signup">
            <Button width="100%" text="Sign up" onClick={() => {}} addClass="secondary" />
          </Link>
        </FormContainer>
      </React.Fragment>
    );
  }
}

Login.displayName = 'Login';

export default Login;
