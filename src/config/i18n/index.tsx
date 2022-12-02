import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en';
import ar from './ar';
import {store} from '../../redux/store';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources: {
      ar: ar,
      en: en,
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
