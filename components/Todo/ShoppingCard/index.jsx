import React from 'react';
import PropTypes from 'prop-types';
import { BoldText, Checkbox } from '../styles';
import MainCard from '../MainCard';

const ShoppingCard = ({ item, text, finished, handler, name }) => (
  <MainCard 
    title={<BoldText>{item}</BoldText>}
    text={text}
    finished={finished}
    handler={handler}
    name={name}
    actionElement={<Checkbox type="checkbox" className={ finished ? 'finished' : ''} onChange={handler} name={name} />}
  />
);

ShoppingCard.displayName = 'ShoppingCard';

ShoppingCard.propTypes = {
  item: PropTypes.string,
  text: PropTypes.string
};

ShoppingCard.defaultProps = {
  item: 'Item',
  text: 'Assignee'
};

export default ShoppingCard;