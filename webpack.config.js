const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({mode}) => {
  return webpackMerge({
    mode,
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader' }
      ]
    },
    plugins: [ new HtmlWebpackPlugin({ template: 'src/index.html'}) ]
  });
};
