// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min - 0
  }

  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}
  

function generatePassword() {

  var passwordLength = parseInt(window.prompt("How long do you want you password to be?"))


  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Password length must be a number between 8 and 128 characters")
    return
  }

  var numbers = window.confirm("Would you like numbers in you password?")
  var symbols = window.confirm("Would you like symbols in you password?")
  var lowerCase = window.confirm("Would you like lowercase letters in you password?")
  var upperCase = window.confirm("Would you like uppercase letters in you password?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "$", "#", "%", "&"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var userOptions = []


  if (numbers) {
    userOptions = userOptions.concat(numberList)
  }

  if (symbols) {
    userOptions = userOptions.concat(symbolList)
  }

  if (lowerCase) {
    userOptions = userOptions.concat(lowercaseList)
  }

  if (upperCase) {
    userOptions = userOptions.concat(uppercaseList)
  }
  console.log(userOptions)
  
  var generatedPassword = ""
 

  for (var i = 0; i < passwordLength; i++) {
    // var randomList = getRandomItem(userOptions)
    // var randomChar = getRandomItem(randomList)
    password += generatedPassword
  }
console.log(generatePassword)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
