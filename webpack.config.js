const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = ({mode, analyze}) => {
  const plugins = [ new HtmlWebpackPlugin({ template: 'src/index.html'}) ];

  if(analyze) {
    plugins.push(new BundleAnalyzerPlugin());
  }

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
    plugins
  });
};
