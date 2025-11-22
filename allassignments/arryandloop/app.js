// var emptyarry = [[],[],[],[]]

//2
// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];


// console.log(matrix);

//3

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

//4

// Program to print multiplication table using for loop

// Take input from user
// const number = parseInt(prompt("Enter the number for multiplication table:"));
// const length = parseInt(prompt("Enter the length of the table:"));

// console.log(`\nMultiplication Table of ${number}:`);

// // Using for loop to generate the multiplication table
// for (let i = 1; i <= length; i++) {
//     const result = number * i;
//     console.log(`${number} × ${i} = ${result}`);
// }

//5
// const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// console.log("Fruits with their positions:");

// // Displaying with index numbers
// for (let i = 0; i < fruits.length; i++) {
//     console.log(`Item ${i + 1}: ${fruits[i]}`);
// }

//6

//Counting (1 → 15)
// var output = document.querySelector("#output");

// // a. Counting
// output.innerHTML += "<p><strong>Counting:</strong> ";
// for (var i = 1; i <= 15; i++) {
//     output.innerHTML += i + (i < 15 ? ", " : "");
// }
// output.innerHTML += "</p>";

// // b. Reverse Counting
// output.innerHTML += "<p><strong>Reverse Counting:</strong> ";
// for (var i = 10; i >= 1; i--) {
//     output.innerHTML += i + (i > 1 ? ", " : "");
// }
// output.innerHTML += "</p>";

// // c. Even
// output.innerHTML += "<p><strong>Even:</strong> ";
// for (var i = 0; i <= 20; i += 2) {
//     output.innerHTML += i + (i < 20 ? ", " : "");
// }
// output.innerHTML += "</p>";

// // d. Odd
// output.innerHTML += "<p><strong>Odd:</strong> ";
// for (var i = 1; i <= 19; i += 2) {
//     output.innerHTML += i + (i < 19 ? ", " : "");
// }
// output.innerHTML += "</p>";

// // e. Series (2k, 4k, ...)
// output.innerHTML += "<p><strong>Series:</strong> ";
// for (var i = 2; i <= 20; i += 2) {
//     output.innerHTML += i + "k" + (i < 20 ? ", " : "");
// }
// output.innerHTML += "</p>";

//7

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// document.querySelector("#btn").addEventListener("click", function () {
//     var userInput = document.querySelector("#searchBox").value.toLowerCase();
//     var result = document.querySelector("#result");

//     if (A.includes(userInput)) {
//         result.innerHTML = userInput + " is <b>available</b> in the list.";
//     } else {
//         result.innerHTML = userInput + " is <b>NOT</b> available in the list.";
//     }
// });

//8

// var tableNum = Number(prompt("Enter table number:"));
// var tableLength = Number(prompt("Enter table length:"));
// var output = "";

// for (var i = 1; i <= tableLength; i++) {
//     output += tableNum + " x " + i + " = " + (tableNum * i) + "<br>";
// }

// document.querySelector("#result").innerHTML = output;

//9

// var A = [24, 53, 78, 91, 12];

// // Assume the first element is the smallest
// var smallest = A[0];

// // Loop through the array to find the smallest
// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }

// console.log("The smallest number is: " + smallest);

//10

// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }
