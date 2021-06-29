
// this is an global scope
{
  //this is an block scope
}

function f() {
  // this is an function scope
}

// example one: with "type var"

var test = 'example'

(()=> { 
  console.log(`value inside the function: ${test}`)

  if (true) {
    var test = 'example'
    console.log(`value inside to if: ${test}`)
  }

  console.log(`value after if: ${test}`)
})() // this is a imediatly execution function  

//note: var does not respect the block scope, only the global and function scope


// example two: with "let"
(()=>{
  let test = 'function value'
  console.log(`value inside the function: ${test}`)

  if (true) {
    let test = 'if value'
    console.log(`value inside the conditional: ${test}`)
  }

  console.log(`value after conditional: ${test}`)
})()

//note: let respect the block scope, so does const 
