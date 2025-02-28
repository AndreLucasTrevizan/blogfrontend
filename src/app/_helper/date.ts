import moment from 'moment/min/moment-with-locales';

moment.locale(process.env.dateLang);

export const getDateWithHour = (date: Date) => {

  return moment(date).tz('America/Sao_Paulo').format('LLL');
}