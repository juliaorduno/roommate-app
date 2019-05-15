import styled from 'styled-components';
import { colors, buttonsBorderRadius } from '../../../../static/styleConstants';

export const Container = styled.div`
  height: 98px;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.textarea`
  resize: none;
  font-size: 14px;
  line-height: 21px;
  width: 100%;
  height: 70px;
  margin-bottom: 10px;
  border: 0;
  color: ${colors.primaryTextColor};

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: #A1A1A1;
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