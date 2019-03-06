import styled from 'styled-components';
import { colors, buttonsBorderRadius } from '../../static/styleConstants';

export const FormContainer = styled.div`
  margin-bottom: 165px;
`;

export const InputContainer = styled.div`
  background-color: ${colors.whiteColor};
  border-radius: 5px;
  padding: 16px 29px;
  box-shadow: 0px 0px 30px -6px rgba(255, 255, 255, 1);
  display: flex;
  margin-bottom: 17px;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 12px;
  line-height: 18px;
  color: ${colors.primaryTextColor};
  border: 0;

  &::placeholder {
    color: ${colors.placeholderColor};
  }

  &:focus {
    outline: 0;
  }
`;

export const Label = styled.label`
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  line-height: 23px;
  color: ${colors.primaryTextColor};
`;

export const AuthButton = styled.button`
  text-transform: uppercase;
  padding: 1.5em;
  border-radius: ${buttonsBorderRadius};
  color: ${colors.whiteColor};
  margin-bottom: 15px;
  width: ${props => (props.width ? props.width : '100%')};
  border: 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;

  &:focus {
    outline: 0;
  }

  &.primary {
    background: ${colors.primaryGradient};
  }

  &.secondary {
    background-color: ${colors.secondaryColor};
  }
`;

export const Header = styled.h1`
  margin: 0;
  font-size: 42px;
  font-weight: 600;
  line-height: 54px;
  color: ${colors.whiteColor};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 44px;
  margin-top: 44px;
`;
