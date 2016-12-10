// This file generates our bundle.js.
// Basically, it searches for any js/jsx file, runs babel on it (so we can use ES6)
// then smooshes it into a single bundle.js file.
// Easiest to run webpack -w to watch during development.

var path = require('path');

var config = {
  context: path.join(__dirname, 'client'),
  entry: ['./components/App.jsx'],
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
