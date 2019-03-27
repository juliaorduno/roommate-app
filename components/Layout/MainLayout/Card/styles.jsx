import styled from 'styled-components';
import { colors } from '../../../../static/styleConstants';

export const CardContainer = styled.div`
  min-height: 118px;
  height: auto;
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 6px 2px rgba(0,0,0,0.1);
`;

export const CardContent = styled.div`
  padding: 40px;
  vertical-align: middle;
`;

export const CardTitle = styled.h1`
  color: ${colors.primaryTextColor};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  margin: 0px;
`;

export const CardText = styled.p`
  color: ${colors.primaryTextColor};
  font-family: Poppins;
  font-size: 12px;
  line-height: 18px;
  margin: 0px;
`;
