var valor1 = window.document.querySelector('#container > form:nth-child(3) > input:nth-child(2)')
var valor2 = window.document.querySelector('#container > form:nth-child(3) > input:nth-child(4)')
var passo = window.document.querySelector('#container > form:nth-child(3) > input:nth-child(6)')
var btnContar = window.document.querySelector('#container > form:nth-child(3) > input:nth-child(7)')
var resultado = window.document.querySelector('#resultado #contagem')
btnContar.addEventListener('click', contar)

function contar(){
    var v1 = Number(valor1.value)
    var v2 = Number(valor2.value)
    var p = Number(passo.value)
    document.getElementById('resultado').style.display = 'block'
    if(temValorNumerico() && p != 0 && ((v2 > v1 && p > 0) || (v2 < v1 && p < 0))){
        var texto = ''
        if((v2 < v1 && p < 0)) {
            var aux = v1
            v1 = v2
            v2 = aux
            p = -p
        }
        for(var i = v1; i <= v2; i += p){
            if(i >= v2){
                texto += i
            } else {
                texto += i + ' 👉 '
            }
        }
        resultado.innerHTML = `${texto}`
    } else {
        resultado.innerHTML = 'Impossível de contar!!!'
    }
}

function temValorNumerico(){
    if(valor1.value.length == 0 || valor2.value.length == 0 || passo.value.length == 0){
        window.alert('Por favor! Informe todos os valores!!!')
        return false
    } else if(Number.isNaN(Number(valor1.value)) || Number.isNaN(Number(valor2.value)) || Number.isNaN(Number(passo.value))){
        window.alert('Por favor! Digite um valor numérico!!!')
        return false
    } else {
        return true
    }
}
