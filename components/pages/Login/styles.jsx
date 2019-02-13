import styled from 'styled-components';
import media from 'styled-media-query';
import { Grid, Checkbox, Button, Image } from 'semantic-ui-react';

export const LoginGrid = styled(Grid)`
  &.ui.grid {
    min-height: 100vh;
    margin: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url('../../../static/images/login-bg.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
  }
`;
export const FormContainer = styled.div`
  & {
    margin: 20% 0;
  }
`;
export const LogoImage = styled(Image)`
  &.ui.image {
    max-width: 50%;
    margin: 10% 25%;
  }
`;
export const InputContainer = styled.div`
  & {
    width: 100%;
    background-color: #ffff;
    border-radius: 0.28571429rem;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.21428571em;
    padding: 1.2em 1.5em;
    margin-bottom: 1.5em;
    -webkit-box-shadow: 0px 0px 30px -6px rgba(255, 255, 255, 1);
    -moz-box-shadow: 0px 0px 30px -6px rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 30px -6px rgba(255, 255, 255, 1);
  }

  & .ui.input > input {
    border: none;
    padding: 0;
  }

  && .required.field > label:after {
    display: none;
  }
`;
export const RememberCheckbox = styled(Checkbox)`
  &.ui.checkbox label,
  &.ui.checkbox input:active ~ label,
  &.ui.checkbox input:focus ~ label {
    color: #ffff;
    transition: none;
  }

  &.ui.checkbox label:before,
  &.ui.checkbox label:active::before {
    background-color: rgba(0, 0, 0, 0);
  }

  ${media.lessThan('medium')`
		&.ui.checkbox label {
			font-size: 13px;
		}
  `}
`;
export const ForgotContainer = styled(Grid.Column)`
  & {
    text-align: right;
  }

  & a {
    cursor: pointer;
    color: #ffff;
  }

  ${media.lessThan('medium')`
		& a {
			font-size: 13px;
		}
	`}
`;
export const LoginButton = styled(Button)`
  &&.ui.button,
  &&.ui.button:hover {
    width: 100%;
    margin-top: 1em;
    text-transform: uppercase;
    padding: 1.5em;
    border-radius: 2em;
    color: #ffff;
    background-color: #6b70f8;
  }

  &&.ui.button.login,
  &&.ui.button.login:hover {
    background-image: linear-gradient(to right, #f25335, #f9811f);
    margin-top: 2em;
  }
`;
export const Footer = styled.div`
  & {
    text-align: center;
    font-size: 12px;
    line-height: 1.5rem;
    color: #ffff;
    margin-bottom: 10%;
  }
`;
export const FooterLinks = styled.div`
  & {
    margin-top: 1em;
    display: flex;
    justify-content: space-between;
    padding: 0 3em;
  }

  ${media.lessThan('medium')`
		& {
			padding: 0;
		}
  `}
`;
