const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

// Para toda requisição, use o bodyParser para interpretar quando o 
// formato for urlencoded
server.use(bodyParser.urlencoded({ extended: true }))

// Faz o parser de uma requisição json
server.use(bodyParser.json())

// Caso a porta funcione
server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}.`)
})

