import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import esConstants from './esConstants';
import enConstants from './enConstants';
import ptConstants from './ptConstants';

const resources = {
  es: {
    translation: esConstants
  },
  en: {
    translation: enConstants
  },
  pt: {
    translation: ptConstants
  }
};
i18next.use(initReactI18next).init({
  resources,
  lng: navigator.languages[1],
  interpolation: {
    escapeValue: false
  }
});
export default i18next;
