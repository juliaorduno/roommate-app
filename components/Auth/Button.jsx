import React from 'react';
import PropTypes from 'prop-types';
import { AuthButton } from './styles';

const Button = ({ width, text, onClick, addClass }) => (
  <AuthButton className={addClass} width={width} onClick={onClick}>
    {text}
  </AuthButton>
);

Button.displayName = 'Button';

Button.propTypes = {
  addClass: PropTypes.string,
  width: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  addClass: '',
  width: ''
};

export default Button;
