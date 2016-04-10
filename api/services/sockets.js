/**
 * SOCKET FRAMEWORK
 */
export function setup() {

  sails.log.info('socket.io\t\t=>\t(connected)')

  sails.doOnce = true

  sails.io.on('connect', function(socket) {
  })

  return require('bluebird').resolve()
}