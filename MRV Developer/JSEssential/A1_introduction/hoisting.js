// Hoisting: suspend an object, variable and functions 

  //with hoisting in variables
  function fn() {
    let text;
    console.log(text) // return undefined
    text = 'example'
    console.log(text) // return example
  }

  fn()

  //without hoisting in variables
  function fn() {

    console.log(text) //return before initialization and break
    let text = 'example'
    console.log(text)

  }

  fn()

  // with hoistin in functions
  function fn() {
    log('Hoisting an function');

    function log(value) {
      console.log(value)
    }
  }

  fn()

// hoisting is a possible practice, but not a good practice.