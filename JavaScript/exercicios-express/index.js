const express = require('express')
const app = express()
const saudacao = require('./saudacaoMid')
const bodyParser = require('body-parser')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app, 'com param!')

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(saudacao('Adan Einstein'))

app.use('/opa', (req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte){
    //     corpo += parte
    // })
    // req.on('end', function(){
    //     res.send(corpo)
    // })
    res.send(JSON.stringify(req.body))
})

app.get('/clientes/:id', (req, res, next) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.get('/opa', (req, res, next) => {
    // res.send('Estou bem!')
    // res.json({
    //     name: 'iPad 16Gb',
    //     price: 1899,
    //     discount: 0.12
    // })
    console.log('Durante......')
    next()
    res.json([
        { id: 7, name: "Ana", position: 1 },
        { id: 34, name: "Bia", position: 2 },
        { id: 73, name: "Carlos", position: 3 }
    ])
})

app.use('/opa', (req, res) => {
    console.log('Depois.....')
})

app.listen(3000, () => {
    console.log('Backend executando....')
})