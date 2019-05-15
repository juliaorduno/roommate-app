import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '../../../../static/styleConstants';

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  width: 100%;
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.1);
`;

export const IconContainer = styled.div`
  width: 85px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  right: 45px;
  top: 20px;
  height: 20px;
`;

export const Icon = styled(FontAwesomeIcon)`
  &&.bell {
    height: 20px;
    width: 16.67px;
  }

  &&.user {
    height: 20px;
    width: 19.17px;
    cursor: pointer;
  }

  &>path {
    fill: ${colors.primaryTextColor};
  }

  &.active>path {
    fill: ${colors.primaryColor};
  }

  &.disabled>path {
    fill: #CECECE;
  }
`;

export const LogoImg = styled.img`
  width: 134px;
  position: absolute;
  left: 45px;
  top: 18px;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 683px;
`;

export const LinkContainer = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

export const LinkItem = styled.a`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  cursor: pointer;

  &.active {
    color: ${colors.primaryColor};
  }

  &:not(.active) {
    color: ${colors.blackColor};
  }
`;
