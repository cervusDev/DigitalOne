const myNumber = 12.458

// transform number into string
const numberAsString = myNumber.toString()
console.log(typeof(numberAsString))

// return number into decimal numbers
const fixedTwoDecimals = myNumber.toFixed(2)
console.log(fixedTwoDecimals)

// transfor string into interger number
const number = parseInt('15.78')
console.log(typeof(number), number)

// transform string into floating number
const secondNumber = parseFloat('14.544')
console.log(typeof(secondNumber), secondNumber)