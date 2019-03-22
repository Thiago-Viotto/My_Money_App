const mongoose = require('mongoose')

// Evita warnings no console
mongoose.Promise = global.Promise

// Exporta a conexão do mongod
module.exports = mongoose.connect('mongodb://localhost/mymoney')
