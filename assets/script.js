// Assignment code here
var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
var listEl = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var li5 = document.createElement("li");
let btn = document.createElement("button");

btn.innerHTML = "Generate";
document.body.appendChild(btn);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//to make the list of variables/password length to select for the password, selections are going to need to be sotred in local storage
h1El.textContent = "Please select your password requirements:";
li1.textContent = "Password Length";
li2.textContent = "Upper Case Letters";
li3.textContent = "Lower Case Letters";
li4.textContent = "Numbers";
li5.textContent = "Special Characters";

favoriteEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
listEl.appendChild(li5);


/*localStorage.setItem(); //store chosen password length
localStorage.setItem(); //store if/not uppercase
localStorage.setItem(); //store if/not lowercase
localStorage.setItem(); //store if/not numbers
localStorage.setItem(); //store if/not special characters

localStorage.getItem(); 

//call choices for characters in the password, string them together for the random password

//need to break out variables for password into uppercase, lowercase, numbers and special characters
*/

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
    var password = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';

      // special characters " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" (between double quotes)
    for (let i = 1; i <= 8; i++) {

      /*
      var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      var lowerChars = "abcdefghijklmnopqrstuvwxyz"
      var numberChars = "0123456789"
      var specialChars = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
      */
        var char = Math.floor(Math.random()
                    * str.length + 1);
          
        password += str.charAt(char)
    }
      
    return password;
}
// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);

