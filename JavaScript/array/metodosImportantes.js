const print = p => console.log(p)

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro!
print(pilotos)

pilotos.push('Verstappen')
print(pilotos)

pilotos.shift(pilotos) // remove o primeiro
print(pilotos)

pilotos.unshift('Hamilton') // adiciona no indice 0
print(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
print(pilotos)

//remover
pilotos.splice(3, 1) //massa quebrou!
print(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
print(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
print(algunsPilotos2)