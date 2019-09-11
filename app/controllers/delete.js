const debug = require('debug')

// models
const { deleteValues } = require('../models/delete_values')

/**
 * @param {ExpressRequest} req
 * @param {ExpressResponse} res
 * @param {function} next
 * @return {Promise.<void>}
 */
module.exports.delete = (req, res, next) => {
  debug('delete values')
  const context = res.context
  const requestBody = {
    accessToken: req.headers.authorization,
    key: req.body.value || ''
  }
  return deleteValues(context, requestBody)
    .then((response) => {
      res.status(204)
      res.send(response)
    })
    .catch((err) => {
      next(err)
    })
}
