// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
// prompts the user to select the length of their password.
  var passwordLength = parseInt(window.prompt("How many characters would you like your password to be?"))

// Tells user if password isn't a number and that the length of the password must be between 8 to 128 characters long.
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Password length must be a number between 8 and 128 characters")
    return
  }
// variables containing all the options for a user to select in their password.
var criteria = window.confirm("Your password must contain at at least ONE of the following criteria, Numbers, Characters, Lower or Uppercase letters.")
  var numbers = window.confirm("Would you like numbers in you password?")
  var symbols = window.confirm("Would you like symbols in you password?")
  var lowerCase = window.confirm("Would you like lowercase letters in you password?")
  var upperCase = window.confirm("Would you like uppercase letters in you password?")

  // Arrays with all the possible characters that can be generated in the password if user selected the option.
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "$", "#", "%", "&"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  // The Array that gets arrays concatenated to it if users selects a certain criteria.
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
 
// For loop to generate random characters from the newly concatenated array
  for (var i = 0; i < passwordLength; i++) {
    generatedPassword += userOptions[Math.floor(Math.random() * userOptions.length)]
  }
console.log(generatedPassword)
return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
