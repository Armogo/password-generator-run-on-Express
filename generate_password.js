// define sample function to randomly return an item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generatePassword() {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // define dummy data
  const options = {
    length: 12,
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    excludeCharacters: '40'
  }
  
  // create a collection to store things picked up by user
  let collection = []

  // length   

  
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
  if(options.excludeCharacters) {  
   collection = collection.filter(
     character => !options.excludeCharacters.includes(character)
   )
  }

  // generate password
  let password = ''
  for (let i = 0; i <= options.length; i++) {
    password += sample(collection)
  }

  // return password
  console.log('collection:', collection)
  console.log('password:', password)
  console.log(`password successfully generated`)
}

generatePassword()