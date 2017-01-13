import { resolve } from 'path';

export default {
  entry: './src/js/script.js',
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  }
};
