import React, { Component } from 'react';
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
    return (
      <ButtonContainer>
        <GroupContainer>
          <Button onClick={this.handleOnClick} className={opened ? 'clicked' : ''}>
            <FontAwesomeIcon icon="plus" />
          </Button>
          <Menu opened={opened} />
        </GroupContainer>
      </ButtonContainer>
    );
  }
}

AddButton.displayName = 'AddButton';

export default AddButton;
