// spread (...)
var partes = ['ombro', 'joelho']
var musica = ['cabeça', ...partes, 'pé']

console.log(musica)

function fn(...args) {

  console.log(...args)
}

let xpto = [0, 1, 2, 4, 5 ];
fn(xpto)