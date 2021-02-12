// 1. LINK JAVASCRIPT VARIABLE TO HTML BUTTON; ADD EVENT LISTENER TO BUTTON
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", displayPassword);

// 3. DISPLAY PASSWORD TO USER
function displayPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

/**********************************/
// 2. GENERATE RANDOM PASSWORD

// 2. ARRAYS CONTAINING POSSIBLE OPTIONS
let optionsUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let optionsLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let optionsNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let optionsSpecial = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `_`, `-`, `+`, `=`, `.`];

// 3. GATHER USER INPUT TO DETERMINE PASSWORD CRITERIA
function generatePassword() {
  // Store numeric value:
  let passwordLength = prompt("Enter below the desired number of characters for password. \nNote: Password must be at least 8 characters and no more than 128 characters.");
  //TODO: make 8-128 character requirement to proceed
  // Store boolean values:
  let selectUpperCase = confirm("Do you want to include uppercase characters?");
  let selectLowerCase = confirm("Do you want to include lowercase characters?");
  let selectNumber = confirm("Do you want to include numbers?");
  //TODO: should i be concerned that selectSpecial has different highlighted syntax?
  let selectSpecial = confirm("Do you want to include special characters? \nOptions are: ! @ # $ % ^ & * ( ) _ - + = .");
  
  // 3-1. POPULATE MASTER ARRAY WITH SELECTED OPTIONS
  let masterArray = [""];

  if (selectUpperCase == true) { 
    masterArray.push(optionsUppercase);
  };
  if (selectLowerCase == true) {
    masterArray.push(optionsLowercase);
  };
  //TODO: or do I do masterArray.concat(selectX)?
  if (selectNumber == true) {
    masterArray.push(optionsNumber);
  };
  if (selectSymbol == true) {
    masterArray.push(optionsSymbol);
  };
  console.log(masterArray);

  // 3-2. LOOP AS MANY TIMES AS USER CHOSE
  for (let i = 0; i < passwordLength.length; i++) {
    masterArray[Math.floor(Math.random() * masterArray.length)];
    password.concat(masterArray);
    //TODO: i need to use Math.floor(Math.random()) to pick a letter
    //TODO: how do i 'save' the result and push it into a new string object?
  };
};
console.log(password);