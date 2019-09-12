/**
 * @param {Number} diff expire (seconds)
 * @return {Number} timestamp (milli seconds)
 */
module.exports.createTimestamp = (diff) => {
  return diff * 1000 + new Date().getTime()
}
