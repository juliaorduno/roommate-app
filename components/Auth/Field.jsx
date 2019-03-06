import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { InputContainer, Input, Label } from './styles';

class Field extends PureComponent {
  handleOnChange(e) {
    const { onChange } = this.props;
    onChange(e.target.name, e.target.value);
  }

  render() {
    const { name, label, id, type, placeholder, value, required } = this.props;
    return (
      <InputContainer>
        <Label htmlFor={name}>
          {label}
          <Input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={e => this.handleOnChange(e)}
            required={required}
          />
        </Label>
      </InputContainer>
    );
  }
}

Field.displayName = 'Field';

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool
};

Field.defaultProps = {
  required: false
};

export default Field;
