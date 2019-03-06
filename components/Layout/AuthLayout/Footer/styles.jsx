import styled from 'styled-components';
import { colors } from '../../../../static/styleConstants';

const Container = styled.div`
  display: flex;
  color: ${colors.secondaryTextColor};
  font-size: 12px;
`;

export const CopyrightContainer = styled(Container)`
  justify-content: center;
`;

export const ActionsContainer = styled(Container)`
  margin-top: 20px;
  justify-content: space-between;
`;
