import styled from 'styled-components';
import Modal from 'styled-react-modal'
import { colors, buttonsBorderRadius } from '../../../../static/styleConstants';

export const StyledModal = Modal.styled`
  border-radius: 10px;
  box-shadow: 0 2px 6px 2px rgba(0,0,0,0.1);
  background-color: ${colors.whiteColor};

  position: absolute;
  top: 112px;
  width: 100%;
  max-width: 683px;
`

export const ModalContainer = styled.div`
  padding: 32px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${colors.primaryColor};
  font-size: 14px;
  font-weight: 600;
`;

export const Label = styled.h1`
  color: ${colors.primaryTextColor};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  margin-top: 16px;
`;

export const TextInput = styled.input`
  font-size: 14px;
  width: 100%;
  margin-bottom: 16px;
  border: 0;
  color: ${colors.primaryTextColor};

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: #A1A1A1;
  }
`;

export const NumberInput = styled.input`
  font-size: 14px;
  border: 0;
  color: ${colors.primaryTextColor};
  width: 23.5px;

  &[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: #A1A1A1;
  }
`;

export const FieldsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Numbers = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 21px;

  &:last-child {
    margin-bottom: 31px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const PostButton = styled.button`
  text-transform: uppercase;
  border-radius: ${buttonsBorderRadius};
  color: ${colors.whiteColor};
  background-color: ${colors.secondaryColor};
  border: 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  height: 30px;
  width: 100px;

  &:focus {
    outline: 0;
  }
`;

export const CancelButton = styled.button`
  text-transform: uppercase;
  color: ${colors.secondaryColor};
  background: none;
  border: 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  height: 30px;
  width: 100px;

  &:focus {
    outline: 0;
  }
`;