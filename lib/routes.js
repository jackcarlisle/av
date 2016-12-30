'use strict'

var home = require('./handlers/home.js')
var path = require('path')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: home
  },
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, '../public'),
        listing: false,
        index: true
      }
    }
  }
]
