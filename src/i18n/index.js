import { createI18n } from 'vue-i18n';
import en from './en.json';
import el from './el.json';
import ru from './ru.json';

const i18n = createI18n({
  legacy: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    el,
    ru
  }
});

export default i18n;
