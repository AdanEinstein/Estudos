// const Pessoa = require('./pessoa')
import Pessoa from './pessoa'
import './assets' //por padrão ele busca o index.js

const atendente = new Pessoa
console.log(atendente.cumprimentar())