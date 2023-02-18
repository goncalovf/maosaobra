const { merge } = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, '_site/'),
    port: 8080,
    hot: true,
  },
});
