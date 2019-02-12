import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Grid, Form, Checkbox, Button, Image } from 'semantic-ui-react'
import Link from 'next/link'

class Login extends PureComponent {

	state = {
	  email: '',
		password: '',
		remember: false
	}

	render() {

		const { email, password, remember } = this.state

	  return (
			<LoginContainer>
	    <LoginGrid centered columns={1}>
				<Grid.Column width={6}>
					<FormContainer>
						<LogoImage src="../../../static/images/roommate-logo-white.png" />
						<Form>
							<InputContainer>
								<Form.Input
									label="Email"
									value={email}
									name="email"
									type="email"
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
									placeholder="Type your password"
									required
								/>
							</InputContainer>
							<Grid columns={2}>
								<Grid.Column>
									<RememberCheckbox 
										label='Remember me'
										checked={remember}
									/>
								</Grid.Column>
								<ForgotContainer>
									<Link href="/">
										<a>Forgot your password?</a>
									</Link>
								</ForgotContainer>
							</Grid>
							<LoginButton className="login">
								Login
							</LoginButton>
						</Form>
						<LoginButton>
							Sign Up
						</LoginButton>
					</FormContainer>
				</Grid.Column>
	    </LoginGrid>
			</LoginContainer>
	  )
	}
}

const LoginContainer = styled.div`
	{
		background-image: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('../../../static/images/login-bg.jpeg');
		background-repeat: no-repeat;
		background-position: center;
		-webkit-background-size: cover;
		-moz-background-size:  cover;
		-o-background-size: cover;
		background-size: cover;
		background-attachment: fixed;
	}
`

const LoginGrid = styled(Grid)`
  &.ui.grid {
    height: 100vh;
		margin: 0;
  }
`
const FormContainer = styled.div`
	& {
		margin: 20% 0;
	}
`
const LogoImage = styled(Image)`
	&.ui.image {
		max-width: 50%;
		margin: 10% 25%;
	}
`
const InputContainer = styled.div`
	& {
		width: 100%;
		background-color: #ffff;
		border-radius: .28571429rem;
		font-size: 1em;
		font-weight: 400;
		line-height: 1.21428571em;
		padding: 1.2em 1.5em;
		margin-bottom: 1.5em;
		-webkit-box-shadow: 0px 0px 30px -6px rgba(255,255,255,1);
		-moz-box-shadow: 0px 0px 30px -6px rgba(255,255,255,1);
		box-shadow: 0px 0px 30px -6px rgba(255,255,255,1);
	}

	& .ui.input>input {
		border: none;
		padding: 0;
	}

	&& .required.field>label:after{
		display: none;
	}
`
const RememberCheckbox = styled(Checkbox)`
	&.ui.checkbox label {
		color: #ffff;
	}

	&.ui.checkbox label:before, 
	&.ui.checkbox label:active::before {
		background-color: rgba(0,0,0,0);
	}
`
const ForgotContainer = styled(Grid.Column)`
	& {
		text-align: right
	}

	& a {
		cursor: pointer;
		color: #ffff;
	}
`
const LoginButton = styled(Button)`
	&&.ui.button, &&.ui.button:hover {
		width: 100%;
		margin-top: 1em;
		text-transform: uppercase;
		padding: 1.5em;
		border-radius: 2em;
		color: #ffff;
		background-color: #6B70F8;
	}

	&&.ui.button.login, 
	&&.ui.button.login:hover {
		background-image: linear-gradient(to right, #F25335, #F9811F);
		margin-top: 2em;
	}

`

export default Login