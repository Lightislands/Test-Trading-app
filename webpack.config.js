'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

require('es6-promise').polyfill();

module.exports = {

  entry: ['./src/js/controller.js'],

  output: {
    path: __dirname,
    filename: 'build/js/app.js'
  },

  plugins: [
    new ExtractTextPlugin('build/css/style.css')//,
  ],

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          'svg-url-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  stats: {
    // Colored output
    colors: true
  },
  devtool: 'source-map'
};