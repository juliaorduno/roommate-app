import styled from 'styled-components';
import { colors } from '../../../static/styleConstants';

export const LogoImage = styled.img`
  max-width: 50%;
  margin: 10% 25%;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
  margin-bottom: 25px;
`;

export const RememberContainer = styled.div`
  display: flex;
`;

export const RememberCheckbox = styled.input`
  width: 16px;
  height: 16px;
  margin: 0;

  &:focus: {
    offset: 0;
  }
`;

export const Remember = styled.p`
  color: ${colors.secondaryTextColor};
  font-size: 12px;
  line-height: 18px;
  margin: 0;
  margin-left: 8px;
`;

export const Forgot = styled.a`
  color: ${colors.secondaryTextColor};
  font-size: 12px;
  line-height: 18px;
`;
