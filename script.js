// 1. LINK JAVASCRIPT VARIABLE TO HTML BUTTON; ADD EVENT LISTENER TO BUTTON
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", displayPassword);

// 3. DISPLAY PASSWORD TO USER
function displayPassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
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
  // if (""charLength"" <=128 && >=8)

  // Store boolean values:
  let selectUpperCase = confirm("Do you want to include uppercase characters?");
  let selectLowerCase = confirm("Do you want to include lowercase characters?");
  let selectNumber = confirm("Do you want to include numbers?");
  let selectSpecial = confirm("Do you want to include special characters? \nOptions are: ! @ # $ % ^ & * ( ) _ - + = .");
  
  // 3-1. POPULATE MASTER ARRAY WITH SELECTED OPTIONS
  let masterArray = [];

  if (selectUpperCase == true) { 
    masterArray = masterArray.concat(optionsUpperCase);
  };
  if (selectLowerCase == true) {
    masterArray = masterArray.concat(optionsLowerCase);
  };
  if (selectNumber == true) {
    masterArray = masterArray.concat(optionsNumber);
  };
  if (selectSpecial == true) {
    masterArray = masterArray.concat(optionsSpecial);
  };
  console.log(masterArray);

  let passwordLoop = [];
  // 3-2. LOOP AS MANY TIMES AS USER CHOSE
  for (let i = 0; i < passwordLength; i++) {
    let randomCharPicked = masterArray[Math.floor(Math.random() * masterArray.length)];
    passwordLoop.push(randomCharPicked);

    //TODO: convert passLoop into string with opp of the .split()
  };
  console.log(passwordLoop);
  return passwordLoop;
};

console.log(password);