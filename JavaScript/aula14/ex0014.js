var n = 20
var fat = n
console.log(`Vamos calcular o fatorial de ${n}`)
for (var i = n - 1; i >= 1; i--) {
    fat = fat * i
}
console.log(`${n}! = ${fat}`)