import React from 'react';
import PropTypes from 'prop-types';
import { StyledModal, ModalContainer, Title, ButtonContainer, CancelButton, PostButton } from './styles';

const MainModal = ({isOpen, toggleModal, title, children, onCancelClick, onConfirmClick, confirmMessage}) => {
  const cancel = () => {
    onCancelClick();
    toggleModal();
  }

  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
    >
      <ModalContainer>
        <Title>{title}</Title>
        {children}
        <ButtonContainer>
          <CancelButton onClick={cancel}>CANCEL</CancelButton>
          <PostButton onClick={onConfirmClick}>{confirmMessage}</PostButton>
        </ButtonContainer>
      </ModalContainer>
    </StyledModal>
  );
}

MainModal.displayName = "MainModal";

MainModal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  onConfirmClick: PropTypes.func.isRequired,
  confirmMessage: PropTypes.string,
};

MainModal.defaultProps = {
  children: null,
  confirmMessage: 'ADD'
};

export default MainModal;