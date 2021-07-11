// Criando um array
const arr = Array.of(1, 2, 3)
console.log(arr)

const arr2 = Array(3)
console.log(arr2)

const arr3 = Array(1,2,3)
console.log(arr3)

// inserindo no final
const frutas = Array.of('bananas', 'melancia')
console.log(frutas)

frutas.push('laranja')
console.log(frutas)

//removendo no final
frutas.pop()
console.log(frutas)

//inserindo no inicio
frutas.unshift('acerola')
console.log(frutas)

// removendo no inicio
frutas.shift()
console.log(frutas)

// concatenar arrays
const salgados = Array.of('coxinha', 'kibe')

const alimentos = frutas.concat(salgados)

console.log(alimentos)

// fatiar um array
const num = [1, 2, 3, 4, 5, 6]
console.log(num.slice(-1))