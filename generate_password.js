// define sample function to randomly return an item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generatePassword(options) {
  // define essential option for user to use
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'
  
  // create a collection to store things picked up by user
  let collection = []

  // if lowerCaseLetters option is on
  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }
  
  // if upperCaseLetters option is on
  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }
  
  // if numbers option is on
  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }
  
  // if symbols option is on
  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }
  
  // excluded characters appointed by user
  collection = collection.filter(
    character => !options.excludeCharacters.includes(character)
  )

  // return error notice if collection is empty
  if (collection.length === 0) {
    return 'There is no valid character in your selection.'
  }

  // generate password
  let password = ''
  for (let i = 1; i <= options.length; i++) {
    password += sample(collection)
  }

  // return password
  return password
}

module.exports = generatePassword