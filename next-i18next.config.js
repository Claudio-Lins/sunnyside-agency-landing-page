const path = require('path')

module.exports = {
  i18n: {
    locales: ['en', 'fr', 'es', 'pt'],
    defaultLocale: 'en',
    localeDetection: false,
    localePath: path.resolve('./public/locales'),
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}