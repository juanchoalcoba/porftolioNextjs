// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: require('./locales/es/translation.json'),
  },
  pt: {
    translation: require('./locales/pt/translation.json'),
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Establece el idioma predeterminado
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;