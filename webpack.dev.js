const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  context: path.resolve(__dirname, 'src'),

  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://0.0.0.0:8090',
    'webpack/hot/only-dev-server',
    './entry.js',
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
    pathinfo: true,
    publicPath: '/dist/js',
    sourceMapFilename: '[name].map',
  },

  resolve: {
    extensions: ['*', '.js'],
  },

  devtool: 'eval-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: '0.0.0.0',
    port: '8090',
    hot: true,
    compress: false,
    publicPath: '/dist/js/',
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  watch: true,

  watchOptions: {
    ignored: /node_modules/,
  },
};
