var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin')
var UnusedFilesWebpackPlugin = require('unused-files-webpack-plugin').default

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['babel?presets[]=es2015&plugins[]=transform-runtime'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new UnusedFilesWebpackPlugin({
      pattern: 'src/**/*.*'
    }),
    new BellOnBundlerErrorPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      title: 'Eedrah',
      filename: 'index.html',
      inject: false,
      template: 'node_modules/html-webpack-template/index.ejs',
      appMountId: 'app'
    })
  ],
  progress: true
}
