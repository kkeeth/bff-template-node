const express = require('express')
const cookieParser = require('cookie-parser')
const HttpStatus = require('http-status-codes')
const { errorHandler, logErrors } = require('./utils/error_handler')

const createContext = require('./utils/create_context')
const route = require('./routes')
const app = express()

// header settings
app.disable('x-powered-by')

app.use(createContext)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(route)
app.use(logErrors)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(HttpStatus.NOT_FOUND)
  res.send({ err: 'Not Found' })
})
// any error handler
app.use(errorHandler)

module.exports = app
