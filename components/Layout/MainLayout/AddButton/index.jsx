import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonContainer, GroupContainer } from './styles';
import Menu from './Menu';

class AddButton extends Component {
  state = {
    opened: false
  };

  handleOnClick = () => {
    const { opened } = this.state;
    this.setState({
      opened: !opened
    });
  };

  render() {
    const { opened } = this.state;
    const { toggleModal } = this.props;

    return (
      <ButtonContainer>
        <GroupContainer>
          <Button onClick={this.handleOnClick} className={opened ? 'clicked' : ''}>
            <FontAwesomeIcon icon="plus" />
          </Button>
          <Menu opened={opened} toggleModal={toggleModal} onClick={this.handleOnClick}/>
        </GroupContainer>
      </ButtonContainer>
    );
  }
}

AddButton.displayName = 'AddButton';

AddButton.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default AddButton;
