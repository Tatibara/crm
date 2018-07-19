const path = require('path');

module.exports = {
  entry: './src/app.js',

  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'bundel.js'
  },

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
      /* {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: 'eslint-loader',
      } */
    ]
  },

};
