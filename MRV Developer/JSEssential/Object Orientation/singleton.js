function Pessoa() {
  if (!Pessoa.instance) {
    Pessoa.instance = this;
  } else {
    return Pessoa.instance
  }
}

const p = Pessoa.call({name:'Heitor'})
const p2 = Pessoa.call({name: 'Gustavo'})

console.log(p)
console.log(p2)