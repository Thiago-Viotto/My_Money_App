const express = require('express')

module.exports = function(server){

    //Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api',router)

    // Rotas de Ciclo de Pagamento
    const billingCycle = require('../api/billingCycle/billingCycleService')
    billingCycle.register(router,'/billingCycles')
}