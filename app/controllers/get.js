const debug = require('debug')

// models
const { getValues } = require('../models/get_values')

/**
 * @param {ExpressRequest} req
 * @param {ExpressResponse} res
 * @param {function} next
 * @return {Promise.<void>}
 */
module.exports.get = (req, res, next) => {
  debug('getValues')
  const context = res.context
  const requestBody = {
    accessToken: req.headers.authorization || '',
    key: req.body.value || ''
  }

  return getValues(context, requestBody)
    .then((response) => {
      res.status(200)
      res.send(response)
    })
    .catch((err) => {
      next(err)
    })
}
