import React from 'react';
import PropTypes from 'prop-types';
import MainCard from '../MainCard';
import Title from './Title';

const Card = ({ item, dueDate, text }) => (
  <MainCard 
    title={<Title item={item} dueDate={dueDate}/>}
    text={text}
  />
);

Card.displayName = 'Card';

Card.propTypes = {
  item: PropTypes.string,
  dueDate: PropTypes.string,
  text: PropTypes.string
};

Card.defaultProps = {
  item: 'Item',
  dueDate: 'Due Date',
  text: 'Assignee'
};

export default Card;