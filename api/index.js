const express = require('express')
const { api: meta } = require('../config')
const cors = require('cors')
const api = express.Router()

api.use(cors())

api.all('/', (req, res) => {
  res.json(meta)
})

module.exports = api
