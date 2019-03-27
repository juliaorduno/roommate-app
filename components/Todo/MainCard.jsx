import React from 'react';
import PropTypes from 'prop-types';
import { TitleContainer, CardContainer, CardContent, CardText } from './styles';

const MainCard = ({ children, title, text }) => (
  <CardContainer>
    <CardContent>
      <TitleContainer>{title}</TitleContainer>
      <CardText>{text}</CardText>
    </CardContent>
    {children}
  </CardContainer>
);

MainCard.displayName = 'Card';

MainCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  text: PropTypes.string
};

MainCard.defaultProps = {
  children: null,
  title: 'Default title',
  text: 'Card subtext'
};

export default MainCard;