import moment from 'moment';

export const formatDateLLL = rawDate => `${moment(rawDate).format('LLL')}`;

export const formatDateLL = rawDate => `${moment(rawDate).format('dddd')}, ${moment(rawDate).format('LL')}`;

export const getCardType = typeId => {
  switch(typeId) {
    case 1:
      return 'announcement';
    case 2:
      return 'meeting';
    case 3:
      return 'shopping';
    default:
      return 'todo';
  }
};