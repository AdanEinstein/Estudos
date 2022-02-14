var numero = window.document.querySelector('#container > form:nth-child(3) > input:nth-child(2)')
var btnTabuar = window.document.querySelector('#container > form:nth-child(3) > input:nth-child(3)')
var resultado = window.document.querySelector('#resultado')
var selectTab = window.document.querySelector('#taubada')
btnTabuar.addEventListener('click', tabuar)

function tabuar() {
    if (valorPossivel()) {
        resultado.style.display = 'block'
        var n = Number(numero.value)
        selectTab.innerText = ''
        for(var i = 0; i <= 10; i++){
            var item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            selectTab.appendChild(item)
        }
    }
}

function valorPossivel(){
    if (numero.value.length == 0) {
        window.alert('Por favor! Digite algum número')
        return false
    } else if (Number.isNaN(Number(numero.value))) {
        window.alert('Por favor! Digite um valor numérico')
        return false
    } else {
        return true
    }
}