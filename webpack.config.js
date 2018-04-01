const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/styles/index.scss',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        // use style-loader in development
        fallback: "style-loader"
      })
    }]
  },
  plugins: [
    extractSass,      
    new HtmlWebpackPlugin({
      title: 'Korus test',
      template: './src/index.html'
    })
  ]
};