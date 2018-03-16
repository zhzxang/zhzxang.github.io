const path = require('path');

const resolve = asset => path.resolve(__dirname, asset)

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: resolve('dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
      }
    ],
  },
  resolve: {
    extensions: [".js", ".json", ".vue"],
  },
}
