const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const { merge: webpackMerge } = require('webpack-merge');
const configCommon = require('./webpack.common');

module.exports = webpackMerge(configCommon, {
  devServer: {
    contentBase: './src/static',
    compress: true,
    port: 3900,
    historyApiFallback: true,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: { files: '.eslintrc.js' },
    }),
    new ForkTsCheckerNotifierWebpackPlugin({ title: 'E-Commerce Project', excludeWarnings: false }),
  ],
});
