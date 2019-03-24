// Cria o serviço restful indicando os métodos HTTP
// a serem trabalhados

const BillingCycle = require('./billingCycle')
BillingCycle.methods(['get', 'post', 'put', 'delete'])

// valida o retorno dos registros atualizados
BillingCycle.updateOptions({ new: true, runValidators: true })

module.exports = BillingCycle