var merge = require('merge-and-concat')

var config = require('./webpack.config.js')

module.exports = merge({}, config, {
  output: {
    pathinfo: true
  },
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  // devtool: 'inline-source-map',
  watchOptions: {
    aggregateTimeout: 100
  }
})
