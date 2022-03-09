function retornarValor(){
    return new Promise(resolve => {
        resolve(10)
    })
}

function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, tempo)
    })
}

async function executar(){
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async / Await ${valor}...`)
    
    await esperarPor(1500)
    console.log(`Async / Await ${valor + 1}...`)
    
    await esperarPor(1500)
    console.log(`Async / Await ${valor + 2}...`)

    return valor + 3
}

executar()