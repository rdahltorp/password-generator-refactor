//Psudo Code
////User clicks "generate password" button
////Fuction fires 
////Window Prompt apears asking how many characters the user wants in the password
////User enters value between 8 and 128, hits ok
    //////User may also hit cancel to start a return
////A new window appears asking if user would like to use special characters 
////User hits ok for yes, cancel for no.
////A new window appears asking if the user would like to use numeric characters (0-9)
////User hits ok for yes, cancel for no.
////A new window appears asking if the user would like to use lowercase letters
////User hits ok for yes, cancel for no.
////A new window appears asking if the user would like to use uppercase letters 
////User hits ok for yes, cancel for no.
////Once at least one character set has been selected, a random password based on the criteria is generated
////once generated the password is displayed in an alert (or on screen in the box)


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/////////////////////////////////

//Above my code I need to map out options for uppercase, lowercase, numbers, and special characters

//My code
document.getElementById("generate").addEventListener("click", newPass); //This line should react when the button is clicked in the HTML and should fire the function "newPass"

function newPass() {
  //First popup. Sets up var for # of characters.
  var characters = prompt("How many charatcer should the new password be? (Enter between 8 and 128)")
  
  //This is if the user hits cancel it will end the function
  if (!characters) {
    return
  }

  //Second popup. Establishes if user wants lowercase letters and assigns value to "lowercase"
  var lowercase = confirm("Would you like to use lowercase letters in your password?")

  //Third popup. Establishes if user wants uppercase letters and assigns value to "uppercase"
  var uppercase = confirm("Would you like to use uppercase letters in your password?")

  //Fourth popup. Establishes if user wants numbers and assigns value to "numbers"
  var numbers = confirm("Would you like to use numbers in your password?")

  //Fifth popup. Establishes if user wants special characters letters and assigns value to "specChar"
  var specCar = confirm("Would you like to use special characters in your password?")

  //This is likely where the math will go and inputs for what selections they used.

  //Sixth popup. Will show password

}