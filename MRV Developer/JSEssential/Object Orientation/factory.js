function Pessoa(customProperties) {
  return {
    nome: 'Gustavo',
    idade: 26,
    ...customProperties
  }
}

const primeiro = Pessoa({nome: 'Valter', cargo: 'Motoboy'})
console.log(primeiro)