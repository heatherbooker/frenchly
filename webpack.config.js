var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: 'build',
    filename: "index.js"
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
        //or to use hmr: presets: ['es2015', 'react', 'react-hmre']
      }
    }, {
      test: /\.svg$/,
      loader: 'file'
    }, {
      test: /\.json$/,
      loader: 'strip-json-comments-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};