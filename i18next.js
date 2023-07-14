const i18next = require('i18next');
const Backend = require('i18next-node-fs-backend');
const path = require('path');

i18next
  .init({
    lng: 'es', // Idioma predeterminado
    fallbackLng: 'es', // Idioma de respaldo en caso de que no se encuentre una traducción
    resources: {
      en: {
        translation: require(path.join(__dirname, 'locales/en/translation.json'))
      },
      es: {
        translation: require(path.join(__dirname, 'locales/es/translation.json'))
      },
    }
  });

module.exports = i18next;