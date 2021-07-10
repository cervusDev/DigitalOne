class Person {
  constructor() {
    this.nome = 'gustavo'
    this.age = 26
    this.gender = 'masculino'
  }
}

//           extendendo os atributos de office com a classe person
class Office extends Person {
  constructor(office) {
    super() // sub-constructor da classe person
    this.office = office
  }
}

const first = new Office('Programming')
console.log(first)