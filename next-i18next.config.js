module.exports = {
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    localeDetection: true,
  },
  fallbackLng: {
    default: ['de'],
  },
  debug: process.env.NODE_ENV === 'development',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
}
