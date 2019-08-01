const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = ({ mode, analyze }) => {
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
          {
            test: /\.jpe?g$/,
            use: [
              {
                loader: 'url-loader',
                options: { limit: 8000, outputPath: 'static' }
              }
            ]
          }
        ]
      },
      plugins
    },
    require(`./webpack.${mode}`)
  );
};
