'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var styleLintPlugin = require('stylelint-webpack-plugin');

require('es6-promise').polyfill();

module.exports = {

  entry: ['./src/js/main.js', './src/js/model.js', './src/js/controller.js'],

  output: {
    path: __dirname,
    filename: 'build/js/app.js'
  },

  plugins: [
    // Specify the resulting CSS filename
    new ExtractTextPlugin('build/css/style.css')//,

    // Stylelint plugin
//    new styleLintPlugin({
//      configFile: '.stylelintrc',
//      context: '',
//      files: '**/*.scss',
//      syntax: 'scss',
//      failOnError: false,
//      quiet: false
//    })
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

  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};