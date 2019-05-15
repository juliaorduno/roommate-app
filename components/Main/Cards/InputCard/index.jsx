import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ButtonContainer,
  PostButton,
  CancelButton,
  Input,
} from './styles';
import { CardContainer } from '../../../../static/styleConstants';

const InputCard = ({ placeholder, value, onChange, onPostClick, onCancelClick }) => (
  <CardContainer>
    <Container>
      <Input placeholder={placeholder} value={value} onChange={onChange}/>
      <ButtonContainer>
        <CancelButton onClick={onCancelClick}>CANCEL</CancelButton>
        <PostButton onClick={onPostClick}>POST</PostButton>
      </ButtonContainer>
    </Container>
  </CardContainer>
);

InputCard.displayName = 'InputCard';

InputCard.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onPostClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
};

InputCard.defaultProps = {
  placeholder: '',
};

export default InputCard;
