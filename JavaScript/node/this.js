const print = (...params) => params.forEach(p => console.log(p))

print(this === global)
print(this === module)

print(this === module.exports)
print(this === exports)

function logThis() {
    print('Dentro de uma função...')
    print(this === exports)
    print(this === module.exports)
    print(this === global)
}

logThis()