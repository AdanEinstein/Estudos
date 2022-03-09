function arredondarNota(nota) {
    if(typeof nota != 'number') return undefined
    if (nota < 38) {
        return nota
    } else {
        for(let i = 1; i <= 3; i++){
            nota += 1
        }
        if(nota % 5 != 0){
            while(nota % 5 != 0){
                nota -= 1
            }
        }
        return nota
    }
}

console.log(arredondarNota(67))

