const moment = require('moment')

/**
 * Extended error class
 *
 * @param {String} message
 * @param {Integer} statusCode
 */
class ErrorWithStatus extends Error {
  constructor(message, statusCode = 500) {
    super(message)
    this.statusCode = statusCode
  }
}
module.exports.ErrorWithStatus = ErrorWithStatus

// the generic logErrors that interrupt errorHandler
module.exports.logErrors = (err, req, res, next) => {
  const dateFormat = `[${moment().format('YYYY/MM/DD HH:mm:ss')}]`
  console.log(`${dateFormat} ${err.stack}`)
  next(err)
}

// errorHandler with statusCode and response body as JSON format
module.exports.errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).send({ err: err.message })
}
