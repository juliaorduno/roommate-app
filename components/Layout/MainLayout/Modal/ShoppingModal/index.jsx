import React, { Component } from 'react';
import { instance } from '../../../../../services';
import PropTypes from 'prop-types';
import MainModal from '../MainModal';
import { Field, Label, TextInput, FieldsContainer } from '../styles';

class ShoppingModal extends Component {
  state = {
    item: '',
  };

  onConfirm = () => {
    const { item } = this.state;

    if (item.length > 0) {
      const user = JSON.parse(localStorage.getItem('currentUser')).data;

      const newItem = {
        description: item,
        group_id: parseInt(user.group_id),
        created_by: parseInt(user.id),
        finished: 0,
      };
      
      instance.post(`/shoppingItems`, newItem)
        .then(() => {});
    }
  };

  onChange = (name, value) => {
    this.setState({ [[name]]: value });
  };

  handleOnChange = (e) => {
    this.onChange(e.target.name, e.target.value);
  }

  onCancel = () => {
    this.setState({
      item: '',
    })
  }

  render() {
    const { isShoppingOpen, toggleModal } = this.props
    const { item } = this.state;

    return (
      <MainModal isOpen={isShoppingOpen} title="New meeting" onCancelClick={this.onCancel} onConfirmClick={this.onConfirm} toggleModal={() => toggleModal('Meeting')}>
        <FieldsContainer>
          <Field>
            <Label>Item</Label>
            <TextInput name="item" type="text" value={item} onChange={this.handleOnChange} placeholder="Type the item"/>
          </Field>
        </FieldsContainer>
      </MainModal>
    );
  }
}

ShoppingModal.propTypes = {
  isShoppingOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default ShoppingModal;
