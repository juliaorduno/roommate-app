import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer, CardContent, CardTitle, CardText } from './styles';

const Card = ({ children, title, text}) => (
  <CardContainer>
      <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardText>{text}</CardText>
      </CardContent>
      {children}
  </CardContainer>
);

Card.displayName = 'Card';

Card.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    text: PropTypes.string
};

Card.defaultProps = {
    children: null,
    title: 'Card Title',
    text: 'Card subtext'
};

export default Card;
