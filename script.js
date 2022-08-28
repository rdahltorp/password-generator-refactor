//Avalible character sets
var lowercaseOps = 'abcdefghijklmnopqrstuvwxyz'
var uppercaseOps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbersOps = '0123456789'
var specCharOps = '!@#$%^&*()-_=+`~{}[];:?\/><.,'


//"Generate Password" button code + firing of the "newpass" function
document.getElementById("generate").addEventListener("click", newPass); 

//Function to develop random password
function newPass() {
  //First popup. User dictates number of characters in password
  var passLength = prompt("How many charatcer should the new password be? (Enter between 8 and 128)")
  

  //Rules for the first popup
  if (!passLength) {
    return
  } else if (passLength < 8 || passLength > 128) { 
    alert("Sorry, your password needs to be between 8 and 128 characters. Please try again.")
    return
  } else if (isNaN(passLength)) {     
    alert("Sorry, to generate your password you need to enter in numeric values only. Please try again.")
    return
  }

  //Second popup. Establishes if user wants lowercase characters
  var lowercase = confirm("Would you like to use lowercase letters in your password?")


  //Third popup. Establishes if user wants uppercase characters
  var uppercase = confirm("Would you like to use uppercase letters in your password?")


  //Fourth popup. Establishes if user wants numeric characters 
  var numbers = confirm("Would you like to use numbers in your password?")


  //Fifth popup. Establishes if user wants special characters
  var specChar = confirm("Would you like to use special characters in your password?")


  //Password generating formulas based on character set criteria + 6th and final alert with new password
  if (lowercase && uppercase && numbers && specChar) {
    //Covers all set options 
    function allFourSets(length) {
      var result = '';
      var characters = lowercaseOps.concat(uppercaseOps, numbersOps, specCharOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result) //Passwords are logged in console should the user need to look back at the prior passwords created in the session.
    alert("With your selections of lowercase, uppercase, numbers and special characters, your new password is:\n " + result)
    }
  allFourSets(passLength)
  } else if(lowercase && uppercase && numbers && !specChar) {
    //Covers lowercase, upppercase and number set options
    function lowerUpperNumbs(length) {
      var result = '';
      var characters = lowercaseOps.concat(uppercaseOps, numbersOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("With your selections of lowercase, uppercase, and number characters, your new password is:\n" + result)
    }
    lowerUpperNumbs(passLength)
  } else if(lowercase && uppercase && !numbers && specChar) {
    //Covers lowercase, upppercase and special set options
    function lowerUpperSpec(length) {
      var result = '';
      var characters = lowercaseOps.concat(uppercaseOps, specCharOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("With your selections of lowercase, uppercase, and special characters, your new password is:\n" + result)
    }
    lowerUpperSpec(passLength)
  } else if(lowercase && !uppercase && numbers && specChar) {
    //Covers lowercase, number and special set options
    function lowerNumbsSpec(length) {
      var result = '';
      var characters = lowercaseOps.concat(numbersOps, specCharOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("With your selections of lowercase, numbers, and special characters, your new password is:\n" + result)
    }
    lowerNumbsSpec(passLength)
  } else if(!lowercase && uppercase && numbers && specChar) {
    //Covers upppercase, number, and special set options
    function upperNumbsSpec(length) {
      var result = '';
      var characters = uppercaseOps.concat(numbersOps, specCharOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("With your selections of uppercase, numbers, and special characters, your new password is:\n" + result)
    }
    upperNumbsSpec(passLength)
  } else if(lowercase && uppercase && !numbers && !specChar) {
    //Covers lowercase and uppercase set options
    function lowerUpper(length) {
      var result = '';
      var characters = lowercaseOps.concat(uppercaseOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("With your selections of lowercase and uppercase characters, your new password is:\n" + result)
    }
    lowerUpper(passLength)
  } else if(lowercase && !uppercase && numbers && !specChar) {
    //Covers lowercase and numbers set options
    function lowerNumbs(length) {
      var result = '';
      var characters = lowercaseOps.concat(numbersOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("With your selections of lowercase and number characters, your new password is:\n" + result)
    }
    lowerNumbs(passLength)
  } else if(lowercase && !uppercase && !numbers && specChar) {
    //Covers lowercase and special set options
    function lowerSpec(length) {
      var result = '';
      var characters = lowercaseOps.concat(specCharOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("With your selections of lowercase and special characters, your new password is:\n" + result)
    }
    lowerSpec(passLength)
  } else if(!lowercase && uppercase && numbers && !specChar) {
    //Covers uppercase and number set options
    function upperNumbs(length) {
      var result = '';
      var characters = uppercaseOps.concat(numbersOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("With your selections of uppercase and number characters, your new password is:\n" + result)
    }
    upperNumbs(passLength)
  } else if(!lowercase && uppercase && !numbers && specChar) {
    //Covers uppercase and special set options
    function upperSpec(length) {
      var result = '';
      var characters = uppercaseOps.concat(specCharOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("With your selections of uppercase and special characters, your new password is:\n" + result)
    }
    upperSpec(passLength)
  } else if(!lowercase && !uppercase && numbers && specChar) {
    //Covers number and special set options
    function numbsSpec(length) {
      var result = '';
      var characters = numbersOps.concat(specCharOps);
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("With your selections of number and special characters, your new password is:\n" + result)
    }
    numbsSpec(passLength)
  } else if(lowercase && !uppercase && !numbers && !specChar) {
    //Covers just lowercase set option
    function lowerOnly(length) {
      var result = '';
      var characters = lowercaseOps;
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("With your selection of lowercase characters, your new password is:\n" + result)
    }
    lowerOnly(passLength)
  } else if(!lowercase && uppercase && !numbers && !specChar) {
    //Covers just uppercase set option
    function upperOnly(length) {
      var result = '';
      var characters = uppercaseOps;
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("With your selection of uppercase characters, your new password is:\n" + result)
    }
    upperOnly(passLength)
  } else if(!lowercase && !uppercase && numbers && !specChar) {
    //Covers just numbers set option
    function numbsOnly(length) {
      var result = '';
      var characters = numbersOps;
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("With your selection of number characters, your new password is:\n" + result)
    }
    numbsOnly(passLength)
  } else if(!lowercase && !uppercase && !numbers && specChar) {
    //Covers just special set option
    function specOnly(length) {
      var result = '';
      var characters = specCharOps;
      for (var i, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      };
      console.log(result)
    alert("With your selection of special characters, your new password is:\n" + result)
    }
    specOnly(passLength)
  } else {
    //Notifies users if no character set was selected that they need to choose at least one
    alert("Sorry! You need to select at least one character set to generate a password. Please try again.")
    return
  }
}