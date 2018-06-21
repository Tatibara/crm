const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/components/Login.js',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundel.js'
  },

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      /* {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: 'eslint-loader',
      } */
    ]
  },

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  }
};
