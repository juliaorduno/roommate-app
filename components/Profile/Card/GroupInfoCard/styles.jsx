import styled from 'styled-components';
import { colors } from '../../../../static/styleConstants';

export const NormalText = styled.p`
  color: ${colors.primaryTextColor};
  font-size: 12px;
  line-height: 21px;
`;

export const Highlight = styled.p`
  color: ${colors.accentColor};
  font-size: 14px;
  font-weight: 600;
`;
