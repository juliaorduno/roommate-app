import React from 'react';
import PropTypes from 'prop-types';
import { TitleContainer, CardContainer, CardContent, CardText, CheckboxContainer,
  InfoContainer } from './styles';

const MainCard = ({ children, title, text, finished, handler, name, actionElement }) => (
  <CardContainer>
    <CardContent>
      <CheckboxContainer>
        {actionElement}
      </CheckboxContainer>
      <InfoContainer>
        <TitleContainer>{title}</TitleContainer>
        <CardText>{text}</CardText>
      </InfoContainer>
    </CardContent>
    {children}
  </CardContainer>
);

MainCard.displayName = 'Card';

MainCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  text: PropTypes.string
};

MainCard.defaultProps = {
  children: null,
  title: 'Default title',
  text: 'Card subtext'
};

export default MainCard;