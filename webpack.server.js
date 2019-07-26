const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'none',
  entry: './server.js',
  output: {
    path: __dirname,
    filename: 'server.bundle.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }]
  }
};
