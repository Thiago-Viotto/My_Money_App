const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('../config/cors')

// Faz com que os mecanismos de paginação funcionem (skip e limit) na API
// Testar no PostMan
const queryParser = require('express-query-int')

// Para toda requisição, use o bodyParser para interpretar quando o 
// formato for urlencoded
server.use(bodyParser.urlencoded({ extended: true }))
server.use(allowCors)
server.use(queryParser())

// Faz o parser de uma requisição json
server.use(bodyParser.json())

// Caso a porta funcione
server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}.`)
})

// garante que server seja utilizado em routes
module.exports = server 