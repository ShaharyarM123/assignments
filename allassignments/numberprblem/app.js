//1

// let num = 4.7;
// let rounded = Math.round(num);
// console.log(rounded);


//2

// let num = 5.3;
// let rounded = Math.ceil(num);
// console.log(rounded);

//3

// let num = 8.9;
// let rounded = Math.floor(num);
// console.log(rounded);

//4
// function getrandomnum(){
//     return Math.random();
// }

// //example usage
// let randomnum = getrandomnum();
// console.log("Random number between 0 and 1: " , randomnum);

//5

// function getrandomnum0to10(){
//     return Math.floor(Math.random() * 10) 
// }

// //example usage
// let randomnum1to10 = getrandomnum0to10();
// console.log("Random number between 0 and 10: " , randomnum1to10);

//6

// function getrandomnum1to100(){
//     return Math.floor(Math.random()*100) + 1;
// }

// //example usage
// let randomnum1to100 = getrandomnum1to100();
// console.log("Random number between 1 and 100: " , randomnum1to100);

// //7
// let str = "42";
// let num = parseInt(str);

// console.log("string" , str);
// console.log("number", num);


//8

// let floatstr = "3.14159"
// let floatnum = parseFloat(floatstr);
// console.log("Float str", floatstr);
// console.log("float num", floatnum);

//9

// function randomNum(){
//     let num = parseFloat(document.querySelector("#numberInput").value)
//     let roundednum = Math.round(num);
//     document.querySelector("#result").innerHTML = "The rounded number is: " + roundednum;
// }

//10

// function rollDice(){
//     return Math.floor(Math.random()*6)+1;
// }

// let diceRoll = rollDice();
// console.log("You rolled a " + diceRoll);

// 11

//Temperature Rounding
// let temperature = 36.6;
// let roundedTemp = Math.round(temperature);

// console.log("Original temperature:", temperature);
// console.log("Rounded temperature:", roundedTemp);

//12

// let productPrice = 9.25;
// let chargedPrice = Math.ceil(productPrice);
// console.log("Charged Price:", chargedPrice); // Output: 10


//13
// Parse and Add
// let strInt = "10";
// let strFloat = "5.5";

// let num1 = parseInt(strInt);    // converts "10" → 10
// let num2 = parseFloat(strFloat); // converts "5.5" → 5.5

// let sum = num1 + num2;

// console.log("Sum:", sum);  // 15.5

//14
// Random Even Number (2–20)
// function getRandomEven() {
//     // Generate random integer between 1 and 10, then multiply by 2
//     return Math.floor(Math.random() * 10 + 1) * 2;
// }

// // Example usage
// let evenNumber = getRandomEven();
// console.log("Random even number (2–20):", evenNumber);


//15
// Check if parsed value is a number
// function isValidNumber(input) {
//     let num = parseInt(input);
//     return !isNaN(num);
// }

// // Example usage
// console.log(isValidNumber("42"));    // true
// console.log(isValidNumber("abc"));   // false
// console.log(isValidNumber("12px"));  // true (parseInt stops at first non-digit)


//16

// Round all prices in an array
// function roundPrices(prices) {
//     return prices.map(price => Math.round(price));
// }

// // Example usage
// let prices = [10.2, 5.7, 3.141, 8.9];
// let roundedPrices = roundPrices(prices);
// console.log("Original prices:", prices);
// console.log("Rounded prices:", roundedPrices);


//17
// Simulate Coin Toss
// function coinToss() {
//     return Math.random() < 0.5 ? "Heads" : "Tails";
// }

// // Example usage
// let result = coinToss();
// console.log("Coin toss result:", result);

//18
// Random integer between min and max (inclusive)
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Example usage
// console.log(getRandomInt(1, 10));  // random integer between 1 and 10
// console.log(getRandomInt(50, 100)); // random integer between 50 and 100

//19

// Extract number from text
// let text = "Total: 45.90 USD";
// let number = parseFloat(text);

// console.log("Extracted number:", number);  // 45.9

//20

// Round to nearest 0.5
// function roundToHalf(num) {
//     return Math.round(num * 2) / 2;
// }

// // Example usage
// console.log(roundToHalf(4.3));  // 4.5
// console.log(roundToHalf(4.1));  // 4.0
// console.log(roundToHalf(5.75)); // 6.0
