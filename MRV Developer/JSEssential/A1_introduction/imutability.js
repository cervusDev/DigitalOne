// to interact on a variable you need to create a new object

// objective : Aside effects

//example one
const user = {
  name: 'Gustavo',
  lastName: 'Henrique'
};

function getUserWithFullName(user) {
  return {
    ...user,
    fullName: `${user.name} ${user.lastName}`
  }
}

const userWithFullName = getUserWithFullName(user)
console.log(userWithFullName, user)

//example two
const characters = [
  {
    name: 'Mrs. Anderson',
    power: 2000
  },
  {
    name: 'Morpheus',
    power: 1800
  },
  {
    name: 'Agent Smith',
    power: 2000
  }
];

function getMostPower(characterList) {
  let filter = characterList.filter(character => (characters.power >= 1800))
  return filter
}

console.log('Most Powerfull')
console.log(getMostPower(characters))

console.log('Character List')
console.log(characters)