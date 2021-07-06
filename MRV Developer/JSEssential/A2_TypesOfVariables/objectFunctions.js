const user = {
  name: 'Gustavo',
  lasName: 'Cervera'
}

// return object key
console.log(Object.keys(user))

// return values into object keys
console.log(Object.values(user))

// return an array of arrays
console.log(Object.entries(user))

// Merge properties in the object
Object.assign(user, {fullName: 'Gustavo Cervera'})
console.log(user)

// creating properties and new object from merge
const newUser = Object.assign({}, user, {age:26})
console.log(newUser)
console.log(user) 


// does not allow any further changes to the object
const object = {
  user: '@gucervus'
}

Object.freeze(object)

object.user = '@law'
console.log(object)

// 