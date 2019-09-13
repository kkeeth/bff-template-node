const crypto = require('crypto')
const debug = require('debug')
const { cryptConfig } = require('../config')

/**
 * decrypt
 *
 * @param {String} text
 * @return {String} dec
 */
module.exports.decrypt = (text) => {
  try {
    const decipher = crypto.createDecipheriv(cryptConfig.algorithm, cryptConfig.key, cryptConfig.iv)
    let token = decipher.update(text, 'hex', 'utf8')
    token += decipher.final('utf8')
    return token
  } catch (err) {
    debug(err)
    throw new Error(err)
  }
}
