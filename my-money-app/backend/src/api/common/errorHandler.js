const _ = require('lodash')

// Middleware que pega os erros
module.exports = (req,resp,next) => {
    const bundle = resp.locals.bundle //lista de erros
    if(bundle.errors){
        const errors = parseErrors(bundle.errors)
        resp.status(500).json({errors})
    } else {
        next() //vai para o próximo middleware
    }
}

// Transforma o array de erros em String
const parseErrors = (nodeRestfulErrors) => {
    const errors = [];

    // Percorre o array de errors e retorna a mensagem
    _.forIn(nodeRestfulErrors, error => errors.push(error.message));
    return errors
}