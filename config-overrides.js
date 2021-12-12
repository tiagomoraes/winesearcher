const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@': path.resolve(__dirname, 'src'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  };
  return config;
};
