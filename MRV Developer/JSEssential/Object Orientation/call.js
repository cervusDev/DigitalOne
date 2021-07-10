function Person(name) {
  this.name = name
}

function firstPerson(fome) {
  Person.call(this, 'Eliza')
  this.fome = fome
}

const Eliza = new firstPerson(false)

console.log(Eliza)

// *******************// 

function Professor(cargo) {
  this.cargo = cargo
}

function Alunos(cargo) {
  this.cargo = cargo
}

function primeiroAluno(nome) {
  Alunos.call(this, 'Aluno')
  this.nome = nome
  this.greeting = () => {
    console.log(`${this.cargo} - ${this.nome}`)
  }
}

const gustavo = new primeiroAluno('Gustavo')
console.log(gustavo)
gustavo.greeting()

