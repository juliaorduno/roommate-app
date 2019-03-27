import styled from 'styled-components';
import { colors } from '../../../../static/styleConstants';

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  width: 100%;
  background-color: ${colors.whiteColor};
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.1);
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

  &.active {
    color: ${colors.primaryColor};
  }

  &:not(.active) {
    color: ${colors.blackColor};
  }
`;
