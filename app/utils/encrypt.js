const crypto = require('crypto')
const debug = require('debug')
const { cryptConfig } = require('../config')
const { ErrorWithStatus } = require('../utils/error_handler')
/**
 * encrypt
 *
 * @param {String} text: crypting target strings
 * @return {String} crypted: crypted strings
 */
module.exports.encrypt = (text) => {
  text = text.replace(/Bearer/, '').trim()
  try {
    const cipher = crypto.createCipheriv(cryptConfig.algorithm, cryptConfig.key, cryptConfig.iv)
    let crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex')
    return crypted
  } catch (err) {
    debug(err)
    throw new ErrorWithStatus(err, err.statusCode)
  }
}
