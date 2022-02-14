var num1 = document.getElementsByName('num1')[0]
var num2 = document.getElementsByName('num2')[0]
var resultado = document.getElementsByName('resultado')[0]

function somar(){
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var soma = n1 + n2
    resultado.value = soma
}
function subtrair(){
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var subtracao = n1 - n2
    resultado.value = subtracao
    
}
function multiplicar(){
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var multiplicacao = n1 * n2
    resultado.value = multiplicacao
    
}
function dividir(){
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var divisao = n1 / n2
    resultado.value = divisao
    
}
