const debug = require('debug')

// models
const { patchValues } = require('../models/patch_values')

/**
 * @param {ExpressRequest} req
 * @param {ExpressResponse} res
 * @param {function} next
 * @return {Promise.<void>}
 */
module.exports.patch = (req, res, next) => {
  debug('patch values')

  const context = res.context
  const requestBody = {
    accessToken: req.headers.authorization || '',
    key: req.body.value || ''
  }

  return patchValues(context, requestBody)
    .then((response) => {
      res.status(200)
      res.send(response)
    })
    .catch((err) => next(err))
}
