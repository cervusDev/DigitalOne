const array = [0, 1, 2, 3, 4, 5, 10, 15]

array.forEach(parameter => {
  if (parameter % 2 === 0){
    console.log(`O numero ${parameter} é par`)
  } else {
    console.log(`O numero ${parameter} é impar`)
  }
})

array.forEach(parameter => {
  if (parameter % 2 === 0) {
    console.log(`O numero ${parameter} é divisivel por 2`)
  } else if(parameter % 3 === 0) {
    console.log(`O numero ${parameter} é divisivel por 3`)
  } else if (parameter % 5 === 0) {
    console.log(`O numero ${parameter} é divisivel por 5`)
  }
})

