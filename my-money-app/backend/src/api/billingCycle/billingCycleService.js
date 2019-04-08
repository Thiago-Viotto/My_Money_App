// Cria o serviço restful indicando os métodos HTTP
// a serem trabalhados
const errorHandler = require('../common/errorHandler')
const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.after('post',errorHandler).after('put',errorHandler)

// valida o retorno dos registros atualizados
BillingCycle.updateOptions({ new: true, runValidators: true })

// Uma nova rota chamada count com um middleware
BillingCycle.route('count', (req, res, next) => {
    // o .count já retorna a count de registros  
    BillingCycle.count((error, value) => {
        // garante o tratamento de um erro no frontend
        // o frontend receberá um array com os erros
        if (error) {
            res.status(500).json({ error: [error] })
        } else {
            // retorna se não der erro a count de registros
            res.json({ value })
        }
    })
})

BillingCycle.route('summary', (req, res, next) => {
    // o $project extrai um campo do json
    BillingCycle.aggregate([{
        // credit e debt recebem a soma dos valores dos créditos e débitos que estão no JSON
        $project: { credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" } }
    }, {
        // o $group agrupa os valores (group by)
        // o credit recebe a soma de todos os créditos que saíram do $project
        $group: { _id: null, credit: { $sum: "$credit" }, debt: { $sum: "$debt" } }
    }, {
        // projeta os elementos que irão aparecer (0 - false, 1 - true)
        $project: { _id: 0, credit: 1, debt: 1 }
    }]).exec((error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})

module.exports = BillingCycle

