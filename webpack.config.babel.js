import { resolve } from 'path';

export default {
  context: resolve('src'),
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  }
};
