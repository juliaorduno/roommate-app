import styled, { keyframes } from 'styled-components';
import { colors } from '../../../../static/styleConstants';

const menuAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: ${colors.purpleColor};
  height: 40px;
  width: 40px;
  margin-bottom: 5px;
  border-radius: 22.53px;
  color: ${colors.whiteColor};
  cursor: pointer;

  &.clicked {
    background-color: ${colors.darkPurpleColor};
  }

  && > svg {
    height: 18px;
    width: 100%;
  }

  &:focus {
    outline: 0;
  }
`;

export const ButtonContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
`;

export const GroupContainer = styled.div`
  display: inline-block;
`;

export const MenuContainer = styled.div`
  position: fixed;
  margin-left: -103px;
  visibility: hidden;
  opacity: 0;
  background-color: ${colors.blackColor};
  border-radius: 10px;
  height: 130px;
  width: 143px;
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.1);

  &.visible {
    visibility: visible;
    animation: ${menuAnimation} ease-in 0.2s;
    opacity: 1;
  }
`;

export const MenuItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 7px;

  &:first-child {
    margin-top: 14px;
  }

  &:last-child {
    margin-bottom: 15px;
  }
`;

export const MenuItem = styled.button`
  height: 20px;
  width: fit-content;
  color: ${colors.whiteColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  text-align: right;
  background: none;
  border: 0;
  margin-right: 17px;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: ${colors.primaryColor};
  }

  &:focus {
    outline: 0;
  }
`;
