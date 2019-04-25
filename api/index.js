const express = require('express')
const { api: meta } = require('../config')
const cors = require('cors')
const api = express.Router()
const partsRouter = require('./parts')

api.use(cors())
api.use(express.json())

api.all('/', (req, res) => {
  res.json(meta)
})

api.use('/parts', partsRouter)

module.exports = api
