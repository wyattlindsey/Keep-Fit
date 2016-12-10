var path = require('path');

var config = {
  context: path.join(__dirname, 'client'),
  entry: ['./app.js'],
  output: {
    path: path.join(__dirname, 'client'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  },
  resolveLoader: {
    root: [path.join(__dirname, 'node_modules')]
  },
  resolve: {
    root: [path.join(__dirname, 'node_modules')]
  }
};

module.exports = config;
