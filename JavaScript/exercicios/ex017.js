function aumento(plano, salario) {
    switch (plano) {
        case 'A':
        case 'a':
            return (salario * (1 + 0.10)).toFixed(2)
            break;
        case 'B':
        case 'b':
            return (salario * (1 + 0.15)).toFixed(2)
            break;
        case 'C':
        case 'c':
            return (salario * (1 + 0.20)).toFixed(2)
            break;
        default:
            return 'Parametros inválidos'
            break;
    }
}

console.log(aumento('c', 1500))