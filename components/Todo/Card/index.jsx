import React from 'react';
import PropTypes from 'prop-types';
import MainCard from '../MainCard';
import Title from './Title';
import { Checkbox } from '../styles';

const Card = ({ item, dueDate, text, finished, handler, name }) => (
  <MainCard 
    title={<Title item={item} dueDate={dueDate}/>}
    text={text}
    finished={finished}
    handler={handler}
    name={name}
    actionElement={<Checkbox type="checkbox" className={ finished ? 'finished' : ''} onChange={handler} name={name} />}
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