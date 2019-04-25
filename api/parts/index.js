const { Router } = require('express')
const partsRouter = Router()
const search = require('./search')

partsRouter.post('/search', search)

module.exports = partsRouter
