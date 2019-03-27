import styled from 'styled-components';
import { colors } from '../../../../static/styleConstants';

export const Avatar = styled.img`
  height: 54px;
  width: 54px;
  border-radius: 50%;
`;

export const Container = styled.div`
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: row;
`;

export const Date = styled.p`
  color: ${colors.primaryTextColor};
  font-size: 12px;
  line-height: 18px;
  margin: 0;
`;

export const DateContainer = styled.div`
  margin-top: 2px;
`;

export const InfoContainer = styled.div`
  width: calc(100% - 70px);
  margin-left: 16px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const ItemTypeOuter = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 10px 0 rgba(14, 14, 14, 0.1);

  position: absolute;
  top: 17px;
  right: 17px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ItemTypeInner = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${props => props.color || colors.primaryColor};
  box-shadow: 0 2px 11px 0 #f5f5f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const ItemTypeIcon = styled.span`
  color: ${colors.whiteColor};
  font-size: 12px;
`;

export const TitleContainer = styled.div`
  width: fit-content;
  display: flex;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 21px;
  margin: 0;
`;

export const NormalText = styled(Text)`
  color: ${colors.primaryTextColor};
`;

export const BoldText = styled(Text)`
  color: ${colors.primaryTextColor};
  font-weight: 600;
`;

export const Highlight = styled(Text)`
  color: ${colors.purpleColor};
  font-weight: 600;
`;

export const PositionItemType = styled.div`
  position: relative;
  float: right;
  width: 0;
  height: 0;
`;
