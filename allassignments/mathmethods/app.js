//1
// var num = parseFloat(prompt("Enter a positive number:"));

// var roundOff = Math.round(num);
// var floorVal = Math.floor(num);
// var ceilVal = Math.ceil(num);

// document.querySelector("#result").innerHTML =
//     "Number: " + num + "<br>" +
//     "Round off value: " + roundOff + "<br>" +
//     "Floor value: " + floorVal + "<br>" +
//     "Ceil value: " + ceilVal;

//2
// var num = parseFloat(prompt("Enter a negative floating point number:"));

// var roundOff = Math.round(num);
// var floorVal = Math.floor(num);
// var ceilVal = Math.ceil(num);

// document.querySelector("#result").innerHTML =
//     "Number: " + num + "<br>" +
//     "Round off value: " + roundOff + "<br>" +
//     "Floor value: " + floorVal + "<br>" +
//     "Ceil value: " + ceilVal;


//3

// var num = parseFloat(prompt("Enter any number:"));

// var absolute = Math.abs(num);

// document.querySelector("#result").innerHTML =
//     "The absolute value of " + num + " is: " + absolute;

//4
// Generate a random number between 1 and 6
// var dice = Math.floor(Math.random() * 6) + 1;

// document.querySelector("#result").innerHTML =
//     "You rolled a dice and got: " + dice;

//5
// Generate 0 or 1 randomly
// var toss = Math.floor(Math.random() * 2);

// var result = toss === 0 ? "Heads" : "Tails";

// document.querySelector("#result").innerHTML =
//     "You tossed a coin and got: " + result;

//6
// Generate a random number between 1 and 100
// var randomNumber = Math.floor(Math.random() * 100) + 1;

// document.querySelector("#result").innerHTML =
//     "Random number between 1 and 100: " + randomNumber;

//7
// var weightInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");

// // Extract numeric value from input
// var weight = parseFloat(weightInput);

// document.querySelector("#result").innerHTML =
//     "Your weight is: " + weight + " kilograms";

//8

// Generate secret number between 1 and 10
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var userGuess = parseInt(prompt("Guess the secret number (1-10):"), 10);

// if (userGuess === secretNumber) {
//     document.querySelector("#result").innerHTML =
//         "Congratulations! You guessed the secret number: " + secretNumber;
// } else {
//     document.querySelector("#result").innerHTML =
//         "Try again! The secret number was: " + secretNumber;
// }
