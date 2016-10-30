var merge = require('merge-and-concat')
var webpack = require('webpack')

var config = require('./webpack.config.js')

module.exports = merge({}, config, {
  bail: true,
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
})
