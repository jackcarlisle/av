'use strict'

var Hapi = require('hapi')
var Inert = require('inert')

var routes = require('./routes.js')

var server = new Hapi.Server()
server.connection({ port: 8000 })

server.register(Inert, function (err) {
  if (err) {
    throw err
  }

  server.route(routes)
})

server.start(function (err) {
  if (err) {
    throw err
  }
  console.log(`Server running at: ${server.info.uri}`)
})

module.exports = server
