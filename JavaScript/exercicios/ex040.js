function conceito(vetor) {
    for(const i in vetor){
        if(vetor[i]>=0 && vetor[i]<=4.9){
            vetor[i] = 'D'
        } else if(vetor[i]>4.9 && vetor[i]<=6.9){
            vetor[i] = 'C'
        } else if(vetor[i]>6.9 && vetor[i]<=8.9){
            vetor[i] = 'B'
        } else if(vetor[i]>8.9 && vetor[i]<=10){
            vetor[i] = 'A'
        } else {
            vetor[i] = 'NULL'
        }
    }
    return vetor
}

const notas = [10, 6, -8, '', 8, 4, 2, null, 8, -9, 7]
console.log(conceito(notas))