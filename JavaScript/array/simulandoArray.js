const print = (...params) => params.forEach(p => console.log(p))
const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'}
print(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

print(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
print(quaseArray.toString(), meuArray)