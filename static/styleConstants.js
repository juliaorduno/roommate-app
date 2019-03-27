import styled from 'styled-components';

export const buttonsBorderRadius = '30px';

export const colors = {
  accentColor: '#ff507c',
  backgroundColor: '#f6f6f6',
  blackColor: '#333333',
  pinkColor: '#faadff',
  placeholderColor: '#cecece',
  primaryColor: '#fb861d',
  primaryGradient: 'linear-gradient(270deg, #FFA50E 0%, #F65335 100%);',
  primaryTextColor: '#5f6266',
  purpleColor: '#5257f2',
  darkPurpleColor: '#424dbf',
  secondaryColor: '#6b70f8',
  secondaryTextColor: '#a7a9ac',
  warningColor: '#e45160',
  whiteColor: '#ffffff'
};

export const defaultBorderRadius = '10px';

export const defaultBoxShadow = '0 2px 6px 2px rgba(0,0,0,0.1)';

export const CardContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.1);
  background-color: ${colors.whiteColor};

  &:not(:first-child) {
    margin-top: 30px;
  }
`;
