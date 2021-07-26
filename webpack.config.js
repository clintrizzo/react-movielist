const HtmlWebPackPlugin = require('html-webpack-plugin')

const HtmlPlugin = new HtmlWebPackPlugin ({
    template: './src/index.html',
    filename: './index.html'
})

module.exports = {
  module: {
    rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
          }
        }
      ],
  },
    plugins: [HtmlPlugin],
}