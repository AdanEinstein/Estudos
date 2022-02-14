var agora = new Date()
var horas = agora.getHours()
var corFundo = document.body
var h1 = document.querySelector('#container>h1')
var frase = document.getElementById('frase')
var imagem = document.querySelector('#imagem-img')
// horas = 19
frase.innerText = `Agora são ${horas}:${agora.getMinutes()} hora(s)`
if(horas < 12) {
    h1.innerHTML = 'Bom dia'
    imagem.setAttribute('src', 'imgs/bomdia.webp')
    corFundo.style.background = 'linear-gradient(to right, rgb(240, 152, 25), rgb(237, 222, 93))'
} else if(horas >= 12 && horas < 18){
    h1.innerHTML = 'Boa tarde'
    imagem.setAttribute('src', 'imgs/boatarde.jpg')
    corFundo.style.background = 'linear-gradient(to right, rgb(255, 81, 47), rgb(240, 152, 25))'
} else if(horas >= 18 && horas <= 24){
    h1.innerHTML = 'Boa noite'
    imagem.setAttribute('src', 'imgs/boanoite.webp')
    corFundo.style.background = 'linear-gradient(to right, rgb(43, 88, 118), rgb(78, 67, 118))'
} else {
    window.alert('Horário inválido!!!')
}

