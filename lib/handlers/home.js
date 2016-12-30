'use strict'

module.exports = function home (request, reply) {
  reply.file('./public/index.html')
}
