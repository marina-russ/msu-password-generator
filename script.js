// LINK JAVASCRIPT VARIABLE TO HTML BUTTON; ADD EVENT LISTENER TO BUTTON
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", displayPassword);

// DISPLAY PASSWORD TO USER
function displayPassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
};

/**********************************/

// ARRAYS CONTAINING POSSIBLE OPTIONS
let optionsUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let optionsLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let optionsNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let optionsSpecial = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `_`, `-`, `+`, `=`, `.`];

// GATHER USER INPUT TO DETERMINE PASSWORD CRITERIA
function generatePassword() {
  
  // STORE NUMERIC VALUE FOR PASSWORD LENGTH
  let userLengthChosen = prompt("Enter below the desired number of characters for password. \nNote: Password must be at least 8 characters and no more than 128 characters.");

  if ((userLengthChosen < 8) || (userLengthChosen > 128)) {
    alert("Your password must be between 8-128 characters long!");
    // return prevents the rest of the prompts from being asked
    //TODO: Can i send user back to the first prompt?
    return;
  }

  // confirm() results in a boolean:
  let selectUpperCase = confirm("Do you want to include uppercase characters?");
  let selectLowerCase = confirm("Do you want to include lowercase characters?");
  let selectNumber = confirm("Do you want to include numbers?");
  let selectSpecial = confirm("Do you want to include special characters? \nOptions are: ! @ # $ % ^ & * ( ) _ - + = .");
  let masterArray = [];

  // POPULATE MASTER ARRAY WITH SELECTED OPTIONS
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

  if ((selectUpperCase == false) && (selectLowerCase == false) && (selectNumber == false) && (selectSpecial == false)) {
    alert("You need to choose at least one option!");
  }

  let passwordLoop = [];
  // 3-2. LOOP AS MANY TIMES AS USER CHOSE
  for (let i = 0; i < userLengthChosen; i++) {
    let randomCharPicked = masterArray[Math.floor(Math.random() * masterArray.length)];
    passwordLoop.push(randomCharPicked);
  };
  console.log(passwordLoop);
  // .join() concatenates all elements in an array and returns them as a single string
  return passwordLoop.join("");
};

console.log(password);

//TODO: ensure at least one character from each selected array is included.
// Maybe something like, divide passwordLength into the # of arrays, modulo % any remainder to lowercase letters?