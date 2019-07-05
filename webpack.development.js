module.exports = {
  output: {
    filename: 'static/main.js'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
