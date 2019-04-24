const express = require('express')
const { server: configuration } = require('./config')
const api = require('./api')
const app = express()

app.use('/', api)

app.listen(configuration.port, () => {
  console.log('Server Ready')
})

module.exports = app
