const user = {
  name: 'Gustavo'
}

// changing the properties of an object
user.name = 'other name'
console.log(user)
user['name'] = 'new other name'

console.log(user)

const prop = 'name'
user[prop] = 'other name'

console.log(user)

// creating properties
user.lastName = 'Cervera'
console.log(user)

// delete properties
delete user.name
console.log(user)