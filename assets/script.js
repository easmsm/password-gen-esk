// Assignment code here

let btn = document.createElement("button");
btn.innerHTML = "Generate";
document.body.appendChild(btn);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


/*function gfg_Run() {
  el_down.innerHTML = generateBtn();
}

var el_down = document.getElementById("generate"); */

//Function to generate combination of password

function generatePassword() {
    var password = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';
      
    for (let i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);
          
        password += str.charAt(char)
    }
      
    return password;
}
// Add event listener to generate button
document.getElementById("generate").addEventListener("click", generatePassword);

writePassword();