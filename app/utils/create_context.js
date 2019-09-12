const Context = require('./context')

/**
 * Middleware for expressjs.
 * Inject Context instance into response.context on request scope
 * @param {ExpressRequest} req
 * @param {ExpressResponse} res
 * @param {function} next
 * @return {void}
 */
module.exports = (req, res, next) => {
  res.context = new Context(req, res)
  next()
}
