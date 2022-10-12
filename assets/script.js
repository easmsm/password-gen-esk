//note: I am coming back to this after a few months of JS
//note: in future development, I want to change the options in the alert from cancel to no

// Assignment code here
var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");

let btn = document.createElement("button");
btn.innerHTML = "Generate";
document.body.appendChild(btn);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//call choices for characters in the password, string them together for the random password

//need to break out variables for password into uppercase, lowercase, numbers and special characters
//using boolean options, where if the user selects "yes", the criteria will be added to the password. If the user chooses "no", they will move on to the next criteria


// Write password to the #password input

//get random values for the character options chosen
//'Arr' will be set based on symbols, letters, and/or numbers

function getRandomValue(inputArr) {
  let rand = Math.floor(Math.random()*inputArr.length);
  return inputArr[rand];
}

//character options
const symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// For upper and lowercase letters
const upperCase = letters.map(element => {
  return element.toUpperCase();
});

//prompts with boolean cues with possible character choices, which will be compared to what the user actually chooses to use
function generatePassword () {
  let passwordLength = '';
  let charactersRequired = [];
  let charactersPossible = [];

  //password length criteria
  passwordLength = parseInt(prompt('Please choose password length' + "\n" + "\n" + 'Please select a number between 8 - 128', '8-128'));
  // validate that length chosen is between 8 and 128 characters
  if (Number.isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Error! Please select a number between 8 - 128');
    return null;
  }

  // specific character choices
  let confirmSymbols = confirm ('Click OK to confirm' + "\n" + "\n" + 'Do you want to include special characters?');
  let confirmNumber = confirm ('Click OK to confirm' + "\n" + "\n" + 'Do you want to include numbers');
  let confirmLetters = confirm ('Click OK to confirm' + "\n" + "\n" + 'Do you want to include a set of letters?');


  //catch in case someone doesn't choose any of the options
  if (!confirmSymbols && !confirmNumber && !confirmLetters) {
    alert("We can't make something out of nothing!");
    return null;
  }

  //starting to compile the chosen characters, using concat (I don't think this was in the module but I use it at work in SQL, so I searched how to do it for this project)
  if(confirmSymbols) {
    charactersPossible = charactersPossible.concat(symbols);
    charactersRequired.push(getRandomValue(symbols));
  }

  if(confirmNumber) {
    charactersPossible = charactersPossible.concat(letters);
    charactersRequired.push(getRandomValue(letters));
  }

  if(confirmLetters) {
    charactersPossible = charactersPossible.concat(numbers);
    charactersRequired.push(getRandomValue(numbers));
  }

  //had a for loop in the origin code, but it was only for letters and numbers, fixing that here
  let result = []
  for(let i = 0; i < passwordLength - charactersRequired.length ; i++) {
    let character = getRandomValue(charactersPossible);
    result.push(character);
  }

  //actual password generation and populations
  result = result.concat(charactersRequired);

  document.getElementById ('password').value = result.join("");
  
}

//original formulas
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// function generatePassword() {
//     var password = '';
//     var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
//             'abcdefghijklmnopqrstuvwxyz0123456789@#$';

//       // special characters " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" (between double quotes)
//     for (let i = 1; i <= 8; i++) {
//         var char = Math.floor(Math.random()
//                     * str.length + 1);
          
//         password += str.charAt(char)
//     }
      
//     return password;
// }
// Add event listener to generate button - this is no longer appropriate with the different character options (this was appropriate with just letters and numbers)
// document.getElementById("generate").addEventListener("click", writePassword);

