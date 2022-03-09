function gerarAleatorio(min, max, numeroProibidos){
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        if(numeroProibidos.includes(aleatorio)){
            reject('Número repitido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1){
    try {
        const numeros = []
        for (let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarAleatorio(1, 60, numeros))
        }
        return numeros        
    } catch (error) {
        if(tentativas > 10){
            throw 'Não deu certo!'
        } else {
            return gerarMegaSena(qtdNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(15).then(console.log).catch(console.log)