function saudacao(nome){
    return function (req, res, next){
        console.log(`Saudação ${nome} seja bem vindo!`)
        next()
    }
}

module.exports = saudacao