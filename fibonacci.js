// Utilizando if
const fibonacci = new Array()
for (let i = 0; i <= 20; i++) {
    if (i <= 1) {
        fibonacci[i] = i
    } else {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }
}

console.log('Utilizando operador if:')
console.log(fibonacci)

// Utilizando operador ternário
const fibonacci2 = new Array()
for (let i = 0; i <= 20; i++) {
    (i <= 1) ?
    fibonacci2[i] = i:
        fibonacci2[i] = fibonacci2[i - 1] + fibonacci2[i - 2]
}

console.log('Utilizando operador ternário:')
console.log(fibonacci2)

// Utilizando while
const fibonacci3 = new Array()
let i = 0
while (i <= 20) {
    (i <= 1) ?
    fibonacci3[i] = i:
        fibonacci3[i] = fibonacci3[i - 1] + fibonacci3[i - 2]

    i = i + 1
}

console.log('Utilizando while:')
console.log(fibonacci3)