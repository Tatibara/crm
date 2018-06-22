const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/app.js',

  output: {
    path: path.resolve(__dirname, 'public'),
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

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  }
};
