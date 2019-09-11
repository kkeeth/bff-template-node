const debug = require('debug')

// models
const { getAccessToken, getEncryptedToken } = require('../models/get_tokens')

/**
 * @param {ExpressRequest} req
 * @param {ExpressResponse} res
 * @param {function} next
 * @return {Promise.<void>}
 */
module.exports.getEncryptedToken = (req, res, next) => {
  debug('get access token')
  const context = res.context
  const requestBody = {
    accessToken: req.headers.authorization || ''
  }

  return getEncryptedToken(context, requestBody)
    .then((response) => {
      res.status(201)
      res.send(response)
    })
    .catch((err) => next(err))
}

/**
 * @param {ExpressRequest} req
 * @param {ExpressResponse} res
 * @param {function} next
 * @return {Promise.<void>}
 */
module.exports.getAccessToken = (req, res, next) => {
  debug('get access token')
  const context = res.context
  const requestBody = {
    accessToken: req.headers.authorization || ''
  }

  return getAccessToken(context, requestBody)
    .then((response) => {
      res.status(201)
      res.send(response)
    })
    .catch((err) => {
      debug(err)
      if (err.statusCode >= 500) {
        res.status(err.statusCode)
        res.send({ error: '通信エラー' })
        return
      }

      res.status(401)
      res.send({ error: 'UNAUTHORIZED' })
    })
}
