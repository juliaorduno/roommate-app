import styled from 'styled-components';
import { colors } from '../../../static/styleConstants';

export const MainContainer = styled.div`
  height: fit-content;
  min-height: 100vh;
  width: 100%;
  background-color: ${colors.backgroundColor};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CenteredContent = styled.div`
  width: 100%;
  max-width: 683px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
`;
