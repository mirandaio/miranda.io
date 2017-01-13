import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  context: resolve('src'),
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};
