const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundel.js"
  },
  module: {
    rules: [{ test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ }]
  },
  devtool: "cheap-eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  }
};
