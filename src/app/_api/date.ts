import { format } from "date-fns";
import { ptBR } from 'date-fns/locale/pt-BR';

export const getDateWithHour = (date: Date) => {
  return format(new Date(date), 'dd/MM/yyyy HH:mm', {
    locale: ptBR
  });
}