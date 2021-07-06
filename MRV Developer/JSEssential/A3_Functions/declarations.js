// classic statement
function fn() {
  return 'code here'
}

// ECMA6 - Arrow functions
  // simple expression
    const arrow = () => 'code here'
  // condicional expression
  const secondArrow = () => {
    // if () {

    // }

    // need to use return
    return 'code here'
  }

// functions are objects

function fn() {
  return 'code here'
}

fn.prop = 'i can create properties'
console.log(fn())
console.log(fn.prop)

// recive parameters with arrow function
const logParameter = parametrs => console.log(parametrs)


// recive and return function
const logFnResult = fnParam => console.log(fnParam())
logFnResult('fn')

const controlFnExec = fnParam => allowed => {
  if (allowed) {
    fnParam();
  }
}

const handleFnExecution = controlFnExec(fn)

handleFnExecution(true) // return the function fn
handleFnExecution() // not return 

// function scope 

(()=> {
  this.name = 'arrow function'
  const getNameArrow = () => this.name  // references the this of the creation context

  function getName() {
    return this.name // references the this of the context the function is in 
  }

  const user = {
    name: 'Nome do objeto da execução',
    getNameArrow,
    getName
  }

  console.log(user.getNameArrow())
  console.log(user.getName())
})();