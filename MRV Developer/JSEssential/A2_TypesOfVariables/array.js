const user = ['Guilherme', 'Pedro', 'Jennifer']

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W')
}

const person = [
  {
    name: 'Guilherme',
    age: 26,
    gender: gender.MAN
  },
  {
    name: 'Pedro',
    age: 43,
    gender: gender.MAN
  },
  {
    name: 'Jennifer',
    age: 18,
    gender: gender.WOMAN
  }
]

// length to array
console.log('Items:', person.length)

// Check is array
console.log('A variável é um array?:', Array.isArray(person))

// iterar os itens do array
person.forEach(person => {
  console.log(`Nome: ${person.name}`)
})

// filter objects in array
const mens =  person.filter(person => person.gender === gender.MAN)
console.log('Nova lista com homens:', mens)

// create a new key and value
const personWithCourse = person.map(person => {
  person.course = 'Introdução ao JavaScript'
  return person
})

console.log('Pessoas com adição de curso:', personWithCourse)

// transform array in other type
const totalAge = person.reduce((age, person) =>{
  age += person.age
  return age
}, 0)

console.log('total da idade:', totalAge)

// possibilits 
const totalEvenAges = person
.filter(person => person.age % 2 == 0)
.reduce((age, person) => {
  age+= person.age
  return age
}, 0)

console.log('soma de idades das pessoas que possuem idade par:', totalEvenAges)
