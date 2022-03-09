function PA(a1, n, r) {
    let termos = ''
    const an = a1 + (n - 1) * r
    const soma = ((a1 + an) * n) / 2
    for(let i = a1; i < an; i++){
        termos += i < an - 1 ? `${i} + ` : `${i} =>`
    }
    return `${termos} ${soma}`
}

function PG(a1, n, q) {
    let termos = ''
    const an = Math.ceil(a1 * (q ** (n - 1)))
    const soma = q > 0 ? (a1 * ((q ** n) - 1)) / (q - 1) : (a1 * (1 - (q ** n))) / (1 - q)
    for(let i = a1; i <= an; i *= q){
        termos += i < an ? `${i} * ` : `${i} =>`
    }
    return `${termos} ${soma}`
}



console.log(PA(2, 7, 2))
console.log(PG(1, 5, 3))