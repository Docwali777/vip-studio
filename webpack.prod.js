const webpack = require('webpack');
const path = require('path');

var CompressionPlugin = require("compression-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [["es2015", { loose: true, modules: false }], "react", "stage-0"]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true
    },
    output: {
      comments: false
    }
  }),
  new webpack.DefinePlugin({
   'process.env.NODE_ENV': JSON.stringify('production')
 }),
  new webpack.NoEmitOnErrorsPlugin(),
  new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0,
        // deleteOriginalAssets: true
      }),
       new CleanWebpackPlugin(['public'], {
         verbose:  true,
         dry:      false
       })
      //  ,
      //  new HtmlWebpackPlugin({
      //    title: 'VIP LASHES',
      //    template: 'views/index.ejs',
      //    filename: 'views/index.ejs'
      //  })
  ]
}
