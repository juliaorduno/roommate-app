import React from 'react';
import PropTypes from 'prop-types';
import { TitleContainer, CardContainer, CardContent } from './styles';

const MainCard = ({ children, title }) => (
  <CardContainer>
    <CardContent>
      <TitleContainer>{title}</TitleContainer>
    </CardContent>
    {children}
  </CardContainer>
);

MainCard.displayName = 'MainCard';

MainCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.element
};

MainCard.defaultProps = {
  children: null,
  title: 'Default title',
};

export default MainCard;
