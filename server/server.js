const path = require('path')
const express = require('express')
const codes = require('./routes/codes')

const server = express()

server.use(express.json())
server.use('/api/v1', codes)
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
