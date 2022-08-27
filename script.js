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
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

///////////////////////////////// OLD CODE ABOVE ^

//Above my code I need to map out options for uppercase, lowercase, numbers, and special characters
var lowercaseOps = 'abcdefghijklmnopqrstuvwxyz'
var uppercaseOps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbersOps = '0123456789'
var specCarOps = '!@#$%^&*()-_=+`~{}[];:?\/><.,'

//Test function to generate a random pass. This works!
// function testFunk(length) {
//   var result = ' ';
//   var characters = lowercaseOps
//   for (var i, i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length))
//   }
//   return result
// }

//My code
document.getElementById("generate").addEventListener("click", newPass); //This line should react when the button is clicked in the HTML and should fire the function "newPass"

function newPass() {
  //First popup. Sets up var for # of characters.
  var passLength = prompt("How many charatcer should the new password be? (Enter between 8 and 128)")
  

  //This is if the user hits cancel it will end the function
  if (!passLength) {
    return
  } else if (passLength < 8) { 
    alert("Sorry, your password needs to be at least 8 characters. Please try again.")
    return
  } else if (passLength > 128) {     
    alert("Sorry, your password needs to be less than 128 characters. Please try again.")
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


  //Character set options + 6th and final alert
  if (lowercase && uppercase && numbers && specCar) {
    //Covers all set options 
    function allFourSets(length) {
      var result = '';
      var characters = lowercaseOps.concat(uppercaseOps, numbersOps, specCarOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("Your new password is: " + result)
    }
  allFourSets(passLength)
  } else if(lowercase && uppercase && numbers && !specCar) {
    //Covers all set options minus special
    function lowerUpperNumbs(length) {
      var result = '';
      var characters = lowercaseOps.concat(uppercaseOps, numbersOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("Your new password is: " + result)
    }
    lowerUpperNumbs(passLength)
  } else if(lowercase && uppercase && !numbers && specCar) {
    //Covers all set options minus numbers
    function lowerUpperSpec(length) {
      var result = '';
      var characters = lowercaseOps.concat(uppercaseOps, specCarOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("Your new password is: " + result)
    }
    lowerUpperSpec(passLength)
  } else if(lowercase && !uppercase && numbers && specCar) {
    //Covers all set options minus uppercase
    function lowerNumbsSpec(length) {
      var result = '';
      var characters = lowercaseOps.concat(numbersOps, specCarOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("Your new password is: " + result)
    }
    lowerNumbsSpec(passLength)
  } else if(!lowercase && uppercase && numbers && specCar) {
    //Covers all set options minus uppercase
    function upperNumbsSpec(length) {
      var result = '';
      var characters = uppercaseOps.concat(numbersOps, specCarOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("Your new password is: " + result)
    }
    upperNumbsSpec(passLength)
  } else if(lowercase && uppercase && !numbers && !specCar) {
    //Covers lowercase and uppercase sets
    function lowerUpper(length) {
      var result = '';
      var characters = lowercaseOps.concat(uppercaseOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("Your new password is: " + result)
    }
    lowerUpper(passLength)
  } else if(lowercase && !uppercase && numbers && !specCar) {
    //Covers lowercase and numbers sets
    function lowerNumbs(length) {
      var result = '';
      var characters = lowercaseOps.concat(numbersOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("Your new password is: " + result)
    }
    lowerNumbs(passLength)
  } else if(lowercase && !uppercase && !numbers && specCar) {
    //Covers lowercase and special sets
    function lowerSpec(length) {
      var result = '';
      var characters = lowercaseOps.concat(specCarOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("Your new password is: " + result)
    }
    lowerSpec(passLength)
  } else if(!lowercase && uppercase && numbers && !specCar) {
    //Covers uppercase and number sets
    function upperNumbs(length) {
      var result = '';
      var characters = uppercaseOps.concat(numbersOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("Your new password is: " + result)
    }
    upperNumbs(passLength)
  } else if(!lowercase && uppercase && !numbers && specCar) {
    //Covers uppercase and special sets
    function upperSpec(length) {
      var result = '';
      var characters = uppercaseOps.concat(specCarOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("Your new password is: " + result)
    }
    upperSpec(passLength)
  } else if(!lowercase && !uppercase && numbers && specCar) {
    //Covers number and special sets
    function numbsSpec(length) {
      var result = '';
      var characters = numbersOps.concat(specCarOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("Your new password is: " + result)
    }
    numbsSpec(passLength)
  } else if(lowercase && !uppercase && !numbers && !specCar) {
    //Covers just lowercase set
    function lowerOnly(length) {
      var result = '';
      var characters = lowercaseOps;
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("Your new password is: " + result)
    }
    lowerOnly(passLength)
  } else if(!lowercase && uppercase && !numbers && !specCar) {
    //Covers just uppercase set
    function upperOnly(length) {
      var result = '';
      var characters = uppercaseOps;
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("Your new password is: " + result)
    }
    upperOnly(passLength)
  } else if(!lowercase && !uppercase && numbers && !specCar) {
    //Covers just numbers set
    function numbsOnly(length) {
      var result = '';
      var characters = numbersOps;
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("Your new password is: " + result)
    }
    numbsOnly(passLength)
  } else if(!lowercase && !uppercase && !numbers && specCar) {
    //Covers just special set
    function specOnly(length) {
      var result = '';
      var characters = specCarOps;
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("Your new password is: " + result)
    }
    specOnly(passLength)
  } else {
    //This will notify users if no character set was selected that they need to choose at least one.
    alert("Sorry! You need to select at least one character set to generate a password. Please try again.")
    return
  }
}