const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './build'),
    clean: true,
  },
};
