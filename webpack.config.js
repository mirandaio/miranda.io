const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const serverConfig = require('./webpack.server');

const browserConfig = ({ mode, analyze }) => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/img/favicon.png'
    })
  ];

  if (analyze) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return webpackMerge(
    {
      mode,
      module: {
        rules: [
          { test: /\.js$/, use: 'babel-loader' },
          { test: /\.jpe?g$/, use: 'url-loader' }
        ]
      },
      plugins
    },
    require(`./webpack.${mode}`)
  );
};

module.exports = [browserConfig, serverConfig];
