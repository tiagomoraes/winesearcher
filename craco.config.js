const cracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        baseUrl: './',
        aliases: {
          '@': './src',
          '@components': './src/components',
          '@pages': './src/pages',
          '@services': './src/services',
          '@routes': './src/routes',
          '@assets': './src/assets',
        },
      },
    },
  ],
};
