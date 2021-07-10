// Estrutura básica de uma função construtora
function Person(name) { //Criação implicita de uma classe
  this.name = name 
  this.greeting = () =>{ // Função dentro de uma classe
    console.log(`Hi, i'am ${this.name}!`)
  }
}

const firstPerson = new Person('Gustavo') // Instanciando a classe para utilizar seus atributos
const secondPerson = new Person('Duda')

console.log(firstPerson)
console.log(secondPerson)

console.log(firstPerson.name, secondPerson.name)
firstPerson.greeting()
secondPerson.greeting()

function Student(name) {
  this.name = name
  this.office = 'student' // Atributos setados dentro da próŕia classe
  this.greeting = () => {
    console.log(`Hi, i'am ${this.office} and my name is ${this.name}`)
  }
}

const firstStudent = new Student('Gustavo')

console.log(firstStudent.name)
console.log(firstStudent.office)
console.log(firstStudent.greeting())

console.log(firstStudent.__proto__ === Student.prototype) // retorna verdadeiro
console.log(Student.__proto__ === Function.prototype) // retorna verdadeiro
console.log(firstStudent instanceof Student) // retorna verdadeiro
console.log(firstStudent instanceof Function) // retorna falso

