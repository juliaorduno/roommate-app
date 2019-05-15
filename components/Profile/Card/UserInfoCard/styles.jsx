import styled from 'styled-components';
import { AuthButton } from '@solid/react'
import { colors, buttonsBorderRadius } from '../../../../static/styleConstants';

export const SolidButton = styled(AuthButton)`
  text-transform: uppercase;
  border-radius: ${buttonsBorderRadius};
  color: ${colors.whiteColor};
  background-color: ${colors.secondaryColor};
  border: 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  height: 30px;
  width: 100%;

  &:focus {
    outline: 0;
  }
`;

export const SolidMessage = styled.h1`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: ${colors.accentColor}
`;