const HttpStatus = require('http-status-codes')

const { ErrorWithStatus } = require('../utils/error_handler')
const { decrypt } = require('./decrypt')

module.exports.validateToken = (accessToken, encryptedToken) => {
  const decryptedToken = decrypt(encryptedToken)
  accessToken = accessToken.replace(/Bearer/, '').trim()

  if (accessToken === decryptedToken) {
    return true
  } else {
    throw new ErrorWithStatus('invalid token', HttpStatus.UNAUTHORIZED)
  }
}
