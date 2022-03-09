const print = _ => console.log(_)
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

print(moduloA.bemVindo)
print(moduloA.legal)
print(moduloA.ola)

print(moduloB.bomDia)
print(moduloB.boaNoite())