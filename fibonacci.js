const fibonacci = new Array()

for (let i = 0; i <= 20; i++) {
    (i <= 1) ?
    fibonacci[i] = i:
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

console.log(fibonacci)