// Cria o serviço restful indicando os métodos HTTP
// a serem trabalhados

const billingCycle = require('./billingCycle')

billingCycle.methods[['get','post','put','delete']]

// valida o retorno dos registros atualizados
billingCycle.updateOptions[{new: true, runValidators: true}]

module.exports = billingCycle
