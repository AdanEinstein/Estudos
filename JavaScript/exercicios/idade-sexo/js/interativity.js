var idade = document.querySelector('#left input')
var sexoM = document.querySelector('#masc')
var sexoF = document.querySelector('#fem')
var resImg = document.querySelector('#imagem')
var resultado = document.querySelector('#resultado')
var btnVerificar = document.getElementById('verificar')
btnVerificar.addEventListener('click', verificar)
resultado.style.display = 'none'

function verificar(){
    if(idade.value.length != 0 && Number(idade.value) >= 0){
        resultado.style.display = 'block'
        if(Number(idade.value) < 70 && sexoF.checked){
            resImg.setAttribute('src', 'imgs/erika.jpeg')
        } else if(Number(idade.value) < 70 && sexoM.checked){
            resImg.setAttribute('src', 'imgs/adan.jpeg')
        } else if(Number(idade.value) >= 70 && sexoF.checked){
            resImg.setAttribute('src', 'imgs/idosa.webp')
        } else if(Number(idade.value) >= 70 && sexoM.checked){
            resImg.setAttribute('src', 'imgs/idoso.jpg')
        }
    } else {
        alert('Por favor insira um valor válido!!!')
    }
}