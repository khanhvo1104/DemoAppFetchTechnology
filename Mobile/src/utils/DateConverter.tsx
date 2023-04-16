import moment from 'moment';

export const convertTimestampToDate = (timestamp: number): String => {
  var newDate = moment(timestamp * 1000).format('DD/MM/YYYY');
  return newDate;
};
