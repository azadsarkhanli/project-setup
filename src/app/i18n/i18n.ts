import dateFnsFormat from 'date-fns/format';
import dateFnsEnLocale from 'date-fns/locale/en-GB';
import dateFnsNoLocale from 'date-fns/locale/nb';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'intl-pluralrules';

import { resources } from './resources';

type DateFormats = {
  date: string;
  dateTime: string;
  dateExtended: string;
  dateWithDow: string;
};

type AvailableDateFormats =
  | 'date'
  | 'dateTime'
  | 'dateExtended'
  | 'dateWithDow';

const dateLocales: { [lng: string]: typeof dateFnsNoLocale } = {
  en: dateFnsEnLocale,
  no: dateFnsNoLocale,
};

const dateFormat: { [lng: string]: DateFormats } = {
  en: {
    date: 'dd.MM.yyyy',
    dateTime: 'dd.MM.yyyy HH:mm',
    dateExtended: 'dd. MMMM yyyy',
    dateWithDow: 'EEEE, do MMMM, yyyy',
  },
  no: {
    date: 'dd.MM.yyyy',
    dateTime: 'dd.MM.yyyy HH:mm',
    dateExtended: 'dd. MMMM yyyy',
    dateWithDow: 'EEEE, do MMMM, yyyy',
  },
};

const defaultDateFormat = dateFormat.no.date;

i18n.use(initReactI18next).init({
  lng: 'no',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
    format: (value, format, language?: string) => {
      if (value instanceof Date) {
        const locale = (language && dateLocales[language]) || dateLocales.no;
        const dateFormats = (language && dateFormat[language]) || dateFormat.no;
        const options = { locale };
        const isDateFormat =
          format === 'dateTime' ||
          format === 'dateExtended' ||
          format === 'dateWithDow' ||
          format === 'date';

        return dateFnsFormat(
          value,
          isDateFormat
            ? dateFormats[format as AvailableDateFormats]
            : format || defaultDateFormat,
          options,
        );
      }
      return value;
    },
  },
  resources,
});

export { i18n };
