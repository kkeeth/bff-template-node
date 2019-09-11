const http = require('http')
const cluster = require('cluster')
const path = require('path')

const port = process.env.PORT || '3000'
const clusterNum = require('os').cpus().length * 2
const app = require('./app')
require('dotenv').config({ path: path.resolve(process.cwd(), `envs/.env.${process.env.DOT_ENV}`) })

/**
 * Event listener for HTTP server "error" event.
 * @param {Error} err
 */
const onError = (err) => {
  if (err.syscall !== 'listen') {
    throw err
  }
  switch (err.code) {
    case 'EACCES':
      process.exit(1)
      break

    case 'EADDRINUSE':
      process.exit(1)
      break

    default:
      throw err
  }
}

app.set('port', port)

// Cluster
if (cluster.isMaster) {
  for (let i = 0; i < clusterNum; ++i) {
    cluster.fork()
  }
} else {
  const server = http.createServer(app)
  server.listen(port)
  console.log(`server is listening on ${port}...`)
  server.on('error', onError)
}
