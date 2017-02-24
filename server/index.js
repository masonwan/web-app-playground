const winston = require('winston')

const app = require('./app')

tryListenPort(3000)

function tryListenPort(port) {
  listenPort(port)
    .catch((err) => {
      if (err.code === 'EADDRINUSE') {
        port += 1
        return tryListenPort(port)
      }
    })
}

function listenPort(port) {
  return new Promise((resolve, reject) => {
    app
      .listen(port, resolve)
      .on('error', reject)
  })
    .then(() => {
      winston.info(`Listening to port ${port}`)
    })
}
