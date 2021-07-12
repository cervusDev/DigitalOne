// estrutura for para um array
const arr = [1, 2, 3, 4, 5]

arr.forEach((value, number, array)=>{
  console.log(`${number}: ${value} [${array}]`)
})

console.log()

// iterando sobre um array
arr.map(value => {
  console.log(value*2)
})

// desfragmentando um array
const idade = [16, 20, 34, [23, 56, [45,43,21]]]
console.log(idade.flat(1))

// acessar a chave de um array
const array = Array.of(1,2,3,4,5,6)
const iterator = array.keys()

console.log(iterator.next())

// acessar o valor de um array
const array = Array.of(1,2,3,4,5,6)
const iterator = array.values()

console.log(iterator.next())

// retorna o par chave valor
const array = Array.of(1,2,3,4,5,6)
const iterator = array.entries()

console.log(iterator.next())

// retorna o primeiro valor que corresponde a uma condição
const array = Array.of(10,20,30,40,50)
console.log(array.find(value => value > 20))

// retorna o primeiro index que corresponde a uma condição
const array = Array.of(10,20,30,40,50)
console.log(array.findIndex(value => value > 20))

// novo array que corresponde a condição
const array = Array.of(10,20,30,40,50)
console.log(array.filter(value => value > 20))

// retorna o primeiro indice que o elemento pode ser encontrado
const array = Array.of(10,20,30,40,50)
console.log(array.indexOf(20))

// retorna um boleano para saber se o valor existe no array
const array = Array.of(10,20,30,40,50)
console.log(array.includes(60))

//buscar elementos a partir de uma condição e retorna um boleano
const array = Array.of(10,20,30,40,50)
console.log(array.some(value => value % 2 == 0))

// veridicar se todos os elementos do array correspondem a uma condição
const array = Array.of(11,20,30,40,50)
console.log(array.every(value => value % 2 == 0))


const colaboradores = [
  { nome: "Cris", horasTrabalhadas: 220 },
  { nome: "Rebeca", horasTrabalhadas: 210 }
];

function adicionaSalario(colaborador) {
  const salario = colaborador.horasTrabalhadas * 50;
  colaborador.salario = salario;

  return {
    salario: salario
  };
}

const colaboradoresComSalario = colaboradores.map(adicionaSalario);

console.log(colaboradoresComSalario);

const familiaPai = ["Avó Zeca", "Avô Aroldo"];
const familiaMae = ["Avô Carlos", "Primo João Paulo"];

const familiaFilho = familiaPai.concat(familiaMae);

console.log(familiaPai);
console.log(familiaMae);
console.log(familiaFilho);

  const alunos = [
    { nome: "Cris", nota: 10 },
    { nome: "Alexandre", nota: 7 },
    { nome: "Pablo", nota: 4 }
  ];

  function alunoAprovado(aluno) {
    return aluno.nota >= 7;
  }

  console.log(alunos.filter(alunoAprovado));
  console.log(alunos.some(alunoAprovado));
  console.log(alunos.every(alunoAprovado));


