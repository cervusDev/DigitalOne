// function with curryng

function sum(a) {
  return function(b) {
    return a+b
  }
}

const soma = sum(2)

console.log(soma(3))
console.log(soma(4))
console.log(soma(5))

// the same function without curryng

function sum(x,y) {
  return x+y
}

console.log(sum(2,3))
console.log(sum(2,4))
console.log(sum(2,5))