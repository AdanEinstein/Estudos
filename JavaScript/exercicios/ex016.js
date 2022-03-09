function calculadora(n1 = 0, operacao = '+', n2 = 0) {
    switch (operacao) {
        case '+':
            return  n1 + n2
            break;
        case '-':
            return n1 - n2
            break;
        case '*':
            return n1 * n2
            break;
        case '/':
            return n1 / n2
            break;
        default:
            return 'Parametros inválidos'
            break;
    }
}
console.log(calculadora(80, '/', 10))