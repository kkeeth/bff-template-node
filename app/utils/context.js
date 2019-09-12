/**
 * The Context class
 */
class Context {
  /**
   * The constructor
   * @param {ExpressRequest} req - the request object
   * @param {ExpressResponse} res - the response object
   * @return {void}
   */
  constructor(req, res) {
    req._startTime = new Date() // request start time
    this.req = req
    this.res = res
  }
}
module.exports = Context
