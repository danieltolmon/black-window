const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const path = require('path');

module.exports = withPlugins([[withSass], [withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
  env: {
    REACT_APP_YOUTUBE_API_KEY: 'AIzaSyDTh87vHyQyZb3b5-pNH62qLxNhOoCLYo0',
  },
});
