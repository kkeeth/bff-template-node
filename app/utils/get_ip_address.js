/**
 * Get client's IP Address
 *
 * @param {Object} req
 * @return {String} (no varriable) ip address
 */
module.exports.getIpAddress = (req) => {
  if (req.headers['x-forwarded-for']) {
    return parseIpAddress(req.headers['x-forwarded-for'])
  }
  if (req.connection && req.connection.remoteAddress) {
    return parseIpAddress(req.connection.remoteAddress)
  }
  if (req.connection.socket && req.connection.socket.remoteAddress) {
    return parseIpAddress(req.connection.socket.remoteAddress)
  }
  if (req.socket && req.socket.remoteAddress) {
    return parseIpAddress(req.socket.remoteAddress)
  }
}

/**
 * Parse IP Address
 *
 * @param {String} str
 * @return {String} ip
 */
const parseIpAddress = (str) => {
  // ループバックアドレスのチェック
  if (str === '::1') {
    return '127.0.0.1'
  } else {
    const ip = str.match(/\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/)
    return ip[0]
  }
}
