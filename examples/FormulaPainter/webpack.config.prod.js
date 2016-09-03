/* eslint-disable */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.[hash].js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Example',
      inject: 'body',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash].js'),
    new ExtractTextPlugin('style.[contentHash].css', {
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      '__DEVTOOLS__': false,
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname,
      },
      { test: /\.svg/, loader: "url-loader?limit=26000&mimetype=image/svg+xml" },
      { test: /\.(woff|woff2|ttf|eot)/, loader: "url-loader?limit=1" },
      { test: /\.json$/, loader: "json-loader" },
      {
        test: /\.js$/,
        loader: "eslint-loader?{parser: 'babel-eslint'}",
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader'),
      },
    ],
  },
};
