import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  context: resolve('src'),
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  },
  module: {
    loaders: [
      {test: /\.css$/, loaders: ['style-loader', 'css-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};
