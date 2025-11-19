// let city = prompt("Enter city name: ");
// city = city.toLowerCase();
// if(city === "karachi"){
//     document.querySelector("#welcome").innerHTML = "Welcome to the city of lights";
// }else{
//     document.querySelector("#welcome").innerHTML = "Welcome to " + city;
// }


//q2

// let gender = prompt("Enter your gender : ");
// gender = gender.toLowerCase()
// if(gender === "male"){
//     document.querySelector("#welcome").innerHTML = "Good Morning Sir.";
// } else {
//     document.querySelector("#welcome").innerHTML = "Good Morning Ma'am.";
// }


//q3
// let color = prompt("Enter traffic signal color (Red, Yellow, Green):");

//     // Normalize input (handles RED, red, ReD, etc.)
//     color = color.toLowerCase();

//     // Decide message based on color
//     if (color === "red") {
//         document.querySelector("#signal").innerHTML = "Must Stop";
//     }
//     else if (color === "yellow") {
//         document.querySelector("#signal").innerHTML = "Ready to move";
//     }
//     else if (color === "green") {
//         document.querySelector("#signal").innerHTML = "Move now";
//     }
//     else {
//         document.querySelector("#signal").innerHTML = "Invalid signal color.";
//     }

//q4
// Ask the user for remaining fuel
    // let fuel = prompt("Enter remaining fuel in litres:");

    // // Convert input to a number
    // fuel = Number(fuel);

    // // Check for valid number and low fuel
    // if (isNaN(fuel)) {
    //     document.querySelector("#fuelMsg").innerHTML = "Invalid input. Enter a number.";
    // }
    // else if (fuel < 0.25) {
    //     document.querySelector("#fuelMsg").innerHTML = "Please refill the fuel in your car";
    // }
    // else {
    //     document.querySelector("#fuelMsg").innerHTML = "Fuel level is okay";
    // }

    //q5
// var a = 4
// if (++a === 5){
//     alert("given condition for variable a is true");
// }
// var b = 82
// if(b++ === 83){
//     alert("given condition for variable b is true");

// }
// var c = 12
// if(c++=== 13){
//     alert("condition 1 is true");

// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }

// var materialcost = 20000;
// var laborcost = 2000;
// var totalcost = materialcost + laborcost;
// if (totalcost === laborcost + materialcost){
//     alert("The cost equals");
// }


//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }


//  if("car" < "cat"){
// alert("car is smaller than cat");
// }


//q6

 // 1. Take marks of 3 subjects
       // let sub1 = Number(prompt("Enter marks of Subject 1:"));
        // let sub2 = Number(prompt("Enter marks of Subject 2:"));
        // let sub3 = Number(prompt("Enter marks of Subject 3:"));

        // // 2. Take total marks
        // let totalMarks = Number(prompt("Enter total marks:"));

        // // 3. Calculate obtained marks
        // let obtained = sub1 + sub2 + sub3;

        // // 4. Calculate percentage
        // let percentage = (obtained / totalMarks) * 100;

        // // 5. Round to 2 decimals
        // percentage = percentage.toFixed(2);

        // // 6. Compute grade based on percentage
        // let grade = "";

        // if (percentage >= 80) {
        //     grade = "A-one";
        // } else if (percentage >= 70) {
        //     grade = "A";
        // } else if (percentage >= 60) {
        //     grade = "B";
        // } else {
        //     grade = "Fail";
        // }

        // // 7. Show result on page
        // document.getElementById("output").innerHTML =
        // "<b>Obtained Marks:</b> " + obtained + "<br>" +
        //     "<b>Percentage:</b> " + percentage + "%<br>" +
        //     "<b>Grade:</b> " + grade;


        //q7

          // Secret number between 1 and 10
    //const secret = 7;

    // // Ask user for guess
    // const guess = Number(prompt("Guess a number between 1 and 10:"));

    // // Check exact match
    // if (guess === secret) {
    //     document.querySelector("#result").innerHTML = "Bingo! Correct answer";
    
    // // Check close guess (guess + 1 = secret)
    // } else if (guess + 1 === secret) {
    //     document.querySelector("#result").innerHTML = "Close enough to the correct answer";
    
    // // Otherwise wrong
    // } else {
    //     document.querySelector("#result").innerHTML = "Wrong guess!";
    // }


    //q8

        // Ask user for a number
    // const num = Number(prompt("Enter a number:"));

    // // Check divisibility
    // if (num % 3 === 0) {
    //     document.querySelector("#result").innerHTML = num + " is divisible by 3";
    // } else {
    //     document.querySelector("#result").innerHTML = num + " is NOT divisible by 3";
    // }


    //q9
        // Take number input from user
    // const num = Number(prompt("Enter a number:"));

    // // Check even or odd
    // if (num % 2 === 0) {
    //     document.querySelector("#result").innerHTML = num + " is Even";
    // } else {
    //     document.querySelector("#result").innerHTML = num + " is Odd";
    // }

    //q10

    // const T = Number(prompt("Enter temperature:"));

    // if (T > 40) {
    //     document.querySelector("#result").innerHTML = "It is too hot outside.";
    // } 
    // else if (T > 30) {
    //     document.querySelector("#result").innerHTML = "The Weather today is Normal.";
    // } 
    // else if (T > 20) {
    //     document.querySelector("#result").innerHTML = "Today’s Weather is cool.";
    // } 
    // else if (T > 10) {
    //     document.querySelector("#result").innerHTML = "OMG! Today’s weather is so Cool.";
    // } 
    // else {
    //     document.querySelector("#result").innerHTML = "It's very cold.";
    // }

    //q11

    // Take input from the user
// var num1 = Number(prompt("Enter the first number:"));
// var num2 = Number(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// Perform calculation based on the operation
// var result;

// if (operation === "+") {
//     result = num1 + num2;
// } else if (operation === "-") {
//     result = num1 - num2;
// } else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
//     if (num2 === 0) {
//         result = "Error! Division by zero.";
//     } else {
//         result = num1 / num2;
//     }
// } else if (operation === "%") {
//     if (num2 === 0) {
//         result = "Error! Division by zero.";
//     } else {
//         result = num1 % num2;
//     }
// } else {
//     result = "Invalid operation!";
// }

// // Display the result
// alert("Result: " + result);
