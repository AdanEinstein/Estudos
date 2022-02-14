var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são exatamente ${horas} hora(s)`)
if(horas >= 6 && horas <= 12){
    console.log('Bom dia!')
} else if(horas > 12 && horas <= 18){
    console.log('Boa tarde!')
} else if(horas > 18 && horas < 24){
    console.log('Boa noite!')
} else if(horas <= 24 || horas < 6){
    console.log('Boa madrugada!')
} else {
    console.error('Errou!!')
}