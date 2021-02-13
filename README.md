# password-generator
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

## :book: Table of Contents
1. [Objectives](#objectives)
2. [Code Functionality](#code)
4. [Deployed Web App](#deployed)

### :star: Objectives:<a name="objectives"></a>
* Web application should generate a randomized secure password. 
* User can determine the length of the password.
* User can select which criteria to include in the password (uppercase letters, numbers, etc.) via prompts.

### :mage_woman: Code Functionality:<a name="code"></a>
* When User clicks on the generate password button, they are prompted to enter a desired password length between 8-128 characters. If the User enters in a number outside of that range, an alert informs the User of the password length requirement and stops further questions from prompting.
* If User does not choose at least one of the 4 criteria (uppercase letters, lowercase letters, numbers, special characters), an alert informs User that they need to pick at least one of the criteria options.
* Once User selects their desired password length and criteria, the code generates a `masterArray` of all possible options that meets that criteria. Random characters are selected from the `masterArray` and the code loops for the desired password length.

### :triangular_ruler: Deployed App:<a name="deployed"></a>

[Deployed Application](https://marina-russ.github.io/password-generator/)
![Screenshot of Deployed App](assets/screenshot.png)
