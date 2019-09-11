const debug = require('debug')

// models
const { postValues } = require('../models/post_values')

/**
 * @param {ExpressRequest} req
 * @param {ExpressResponse} res
 * @param {function} next
 * @return {Promise.<void>}
 */
module.exports.post = (req, res, next) => {
  debug('post values')

  const context = res.context
  const requestBody = {
    accessToken: req.headers.authorization || '',
    key: req.body.value || ''
  }

  return postValues(context, requestBody)
    .then((response) => {
      res.status(200)
      res.send(response)
    })
    .catch((err) => next(err))
}
