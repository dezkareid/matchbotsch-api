const { Router } = require('express')
const storesRouter = Router()
const find = require('./find')

storesRouter.get('/', find)

module.exports = storesRouter
