import moment from 'moment-timezone';

moment.locale(process.env.dateLang);

export const getDateWithHour = (date: Date) => {

  return moment.tz(date, 'America/Sao_Paulo').format('DD/MM/yyyy HH:mm');
}