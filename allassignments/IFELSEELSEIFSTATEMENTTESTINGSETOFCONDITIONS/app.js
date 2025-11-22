// let input = prompt("Enter something: ")
// //First check if its a number

// if(isNaN(input)){
//     //isNaN means "is Not a Number" , isNaN(input) tells you if the input can be treated as a number.
//     console.log("Number");
// } else{
//     let ch = input.charCodeAt(0)
//         //charCodeAt(0) gives the ASCII code of the first character.
//     if(ch >= 65 && ch <= 90){
//         console.log("Uppercase letter");
        
//     } else if(ch >= 97 && ch <= 122){
//         console.log("Lowercase letter");
//     } else{
//         console.log("Not a number or letter");
//     }
    
//}
//2

// let num1 = +prompt("Enter first number: ")
// let num2 = +prompt("Enter second number: ")
// //The + before prompt converts the input string to a number.

// if(num1>num2){
//     console.log(num1 + "is greater");
    
// } else if(num2 > num1){
//     console.log(num2 + "is greater");
//     } else{
//         console.log("Both numbers are equal");
        
//     }

//3

// let num = +prompt("Enter a number: ")

// if (num>0){
//     console.log("positive number");
    
// } else if (num<0){
//     console.log("negative number");
    
// }else{
//     log("number is zero");
// }


//4

// let ch = prompt("Enter one character : ").toLowerCase();

// if(ch.length !==1){
//     console.log("Invalid input ");
    
// } else{
//       let isVowel = (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u");
//   console.log(isVowel);
// }


//5

// let correctPassword = "mySecret123";

// let userPassword = prompt("Enter your password:");

// if (!userPassword) {
//   console.log("Please enter your password");
// } else if (userPassword === correctPassword) {
//   console.log("Correct! The password you entered matches the original password");
// } else {
//   console.log("Incorrect password");
// }


//6

// var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// console.log(greeting); // "Good day"

//q7

// let time = +prompt("Enter time in 24-hour format (e.g. 1900):");

// if (time >= 0 && time < 1200) {
//   console.log("Good Morning");
// } 
// else if (time >= 1200 && time < 1700) {
//   console.log("Good Afternoon");
// } 
// else if (time >= 1700 && time < 2100) {
//   console.log("Good Evening");
// } 
// else if (time >= 2100 && time <= 2359) {
//   console.log("Good Night");
// } 
// else {
//   console.log("Invalid time format");
// }
