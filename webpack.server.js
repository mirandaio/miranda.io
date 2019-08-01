const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'none',
  entry: './server.js',
  output: {
    path: __dirname,
    filename: 'server.build.js'
  },
  target: 'node',
  // see https://webpack.js.org/configuration/node/#node__dirname
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      {
        test: /\.jpe?g$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              outputPath: 'static',
              emitFile: false
            }
          }
        ]
      }
    ]
  }
};
