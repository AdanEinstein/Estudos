const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const isMulher = o => o.genero == 'F'
    const isChina = o => o.pais == 'China'
    const menorSalario = (func, funcAtual) => func.salario <= funcAtual.salario ? func : funcAtual
    const funcionariosArray = [].concat(funcionarios)
    const resutado = funcionariosArray.filter(isMulher).filter(isChina).reduce(menorSalario)
    console.log(resutado)
})