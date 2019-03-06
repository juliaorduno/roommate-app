import React, { PureComponent } from 'react';
import { Grid, Form } from 'semantic-ui-react';
import Link from 'next/link';
import {
  LoginGrid,
  FormContainer,
  LogoImage,
  InputContainer,
  RememberCheckbox,
  ForgotContainer,
  LoginButton,
  Footer,
  FooterLinks
} from './styles';

class Login extends PureComponent {
  state = {
    email: '',
    password: '',
    remember: false
  };

  onChange = (e, { name, value }) => {
    this.setState({ [[name]]: value });
  };

  handleChecked = () => {
    const { remember } = this.state;
    this.setState({ remember: !remember });
  };

  render() {
    const { email, password, remember } = this.state;

    return (
      <LoginGrid centered columns={1}>
        <Grid.Column mobile={15} computer={6}>
          <FormContainer>
            <LogoImage src="../../../static/images/roommate-logo-white.png" />
            <Form>
              <InputContainer>
                <Form.Input
                  label="Email"
                  value={email}
                  name="email"
                  type="email"
                  onChange={this.onChange}
                  placeholder="Type your email"
                  required
                />
              </InputContainer>
              <InputContainer>
                <Form.Input
                  label="Password"
                  type="password"
                  value={password}
                  name="password"
                  onChange={this.onChange}
                  placeholder="Type your password"
                  required
                />
              </InputContainer>
              <Grid columns={2}>
                <Grid.Column>
                  <RememberCheckbox
                    label="Remember me"
                    checked={remember}
                    onChange={this.handleChecked}
                    name="remember"
                  />
                </Grid.Column>
                <ForgotContainer>
                  <Link href="/">
                    <a>Forgot your password?</a>
                  </Link>
                </ForgotContainer>
              </Grid>
              <LoginButton className="login">Login</LoginButton>
            </Form>
            <LoginButton>Sign Up</LoginButton>
          </FormContainer>
          <Footer>
            2019 © Roommate App. All Rights Reserved
            <FooterLinks>
              <div>Privacy Policy</div>
              <div>Terms and Conditions</div>
              <div>Careers</div>
            </FooterLinks>
          </Footer>
        </Grid.Column>
      </LoginGrid>
    );
  }
}

Login.displayName = 'Login';

export default Login;
