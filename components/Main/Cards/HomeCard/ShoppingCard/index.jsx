import React from 'react';
import PropTypes from 'prop-types';
import MainCard from '../MainCard';
import Title from './Title';
import { colors } from '../../../../../static/styleConstants';

const ShoppingCard = ({ avatar, userName, date, item }) => (
  <MainCard
    avatar={avatar}
    icon="shopping-basket"
    Title={<Title userName={userName} item={item} />}
    color={colors.accentColor}
    date={date}
  />
);

ShoppingCard.displayName = 'ShoppingCard';

ShoppingCard.propTypes = {
  avatar: PropTypes.string,
  date: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired
};

ShoppingCard.defaultProps = {
  avatar: ''
};

export default ShoppingCard;
