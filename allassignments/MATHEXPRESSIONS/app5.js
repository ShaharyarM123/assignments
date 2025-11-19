// var num1 = 3;
// var num2 = 5;
// var total = num1 + num2;
// document.querySelector("#sum").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + total;

//q2

//  var num1 = 3;  // you can change this
//         var num2 = 5;   // you can change this

//         // Perform operations
//         var sum = num1 + num2;
//         var difference = num1 - num2;
//         var product = num1 * num2;
//         var quotient = num1 / num2;
//         var remainder = num1 % num2;

//         // Display results using querySelector
//         var resultsDiv = document.querySelector('#results');
//         resultsDiv.innerHTML = 
//             "Addition: " + num1 + " + " + num2 + " = " + sum + "<br>" +
//             "Subtraction: " + num1 + " - " + num2 + " = " + difference + "<br>" +
//             "Multiplication: " + num1 + " × " + num2 + " = " + product + "<br>" +
//             "Division: " + num1 + " ÷ " + num2 + " = " + quotient + "<br>" +
//             "Modulus: " + num1 + " % " + num2 + " = " + remainder + "<br>";

//q3
//   var outputDiv = document.querySelector('#results');

//         // a. Declare a variable
//         var num;

//         // b. Show the value after declaration
//         outputDiv.innerHTML = "Value after variable declaration is: " + num + "<br>";

//         // c. Initialize the variable
//         num = 5;

//         // d. Show initial value
//         outputDiv.innerHTML += "Initial value: " + num + "<br>";

//         // e. Increment the variable
//         num++;

//         // f. Show value after increment
//         outputDiv.innerHTML += "Value after increment is: " + num + "<br>";

//         // g. Add 7 to the variable
//         num += 7;

//         // h. Show value after addition
//         outputDiv.innerHTML += "Value after addition is: " + num + "<br>";

//         // i. Decrement the variable
//         num--;

//         // j. Show value after decrement
//         outputDiv.innerHTML += "Value after decrement is: " + num + "<br>";

//         // k. Show remainder after dividing by 3
//         var remainder = num % 3;

//         // l. Output remainder
//         outputDiv.innerHTML += "The remainder is: " + remainder + "<br>";

//q4

//var price = 600;
// var quantity = 5;
// var product = price * quantity;
// document.querySelector("#results").innerHTML = "Total cost to buy " + quantity + " tickets to a movie is : " + product + " PKR";

//q5
// var tablegg = document.querySelector("#table");
// var tableof = 10;
//         tablegg.innerHTML = "<h2>Multiplication Table of " + tableof + "</h2>";

//         for(var i = 1; i<=10; i++){
//               tablegg.innerHTML += tableof + " × " + i + " = " + (tableof * i) + "<br>";
//         }


//q6
// var outputDiv = document.querySelector('#output');

//         // a. Store a Celsius temperature
//         var celsius = 30;

//         // b. Convert Celsius to Fahrenheit: F = (C × 9/5) + 32
//         var fahrenheitFromC = (celsius * 9/5) + 32;
//         outputDiv.innerHTML = celsius + "°C is " + fahrenheitFromC + "°F<br>";

//         // c. Store a Fahrenheit temperature
//         var fahrenheit = 86;

//         // d. Convert Fahrenheit to Celsius: C = (F - 32) × 5/9
//         var celsiusFromF = (fahrenheit - 32) * 5/9;
//         outputDiv.innerHTML += fahrenheit + "°F is " + celsiusFromF + "°C<br>";

//q7

//   var receiptDiv = document.querySelector('#receipt');

//         // Store prices and quantities
//         var priceItem1 = 500;     // Price of item 1
//         var priceItem2 = 300;     // Price of item 2
//         var quantityItem1 = 2;    // Ordered quantity of item 1
//         var quantityItem2 = 3;    // Ordered quantity of item 2
//         var shippingCharges = 100;

//         // Calculate total cost
//         var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

//         // Display the receipt
//         receiptDiv.innerHTML = "<h2>Receipt</h2>" +
//                                "Price of item 1: $" + priceItem1 + "<br>" +
//                                "Quantity of item 1: " + quantityItem1 + "<br>" +
//                                "Price of item 2: $" + priceItem2 + "<br>" +
//                                "Quantity of item 2: " + quantityItem2 + "<br>" +
//                                "Shipping Charges: $" + shippingCharges + "<br><br>" +
//                                "<strong>Total Cost: $" + totalCost + "</strong>";

//q8
// var resultDiv = document.querySelector('#result');

//         // Store total marks and marks obtained
//         var totalMarks = 500;
//         var marksObtained = 420;

//         // Compute percentage
//         var percentage = (marksObtained / totalMarks) * 100;

//         // Display the result
//         resultDiv.innerHTML = "Total Marks: " + totalMarks + "<br>" +
//                               "Marks Obtained: " + marksObtained + "<br>" +
//                               "Percentage: " + percentage.toFixed(2) + "%";


//q9

//   var conversionDiv = document.querySelector('#conversion');

//         var usd = 10;
//         var sar = 25;

//         // Conversion rates
//         var usdToPkr = 104.80;
//         var sarToPkr = 28;

//         // Total in PKR (single expression)
//         var totalPkr = (usd * usdToPkr) + (sar * sarToPkr);

//         conversionDiv.innerHTML = "Total currency in Pakistani Rupees: PKR " + totalPkr;

//q10

//  var resultDiv = document.querySelector('#result');

//         // Initialize variable
//         var num = 8;

//         // Perform all calculations in a single expression: ((num + 5) * 10) / 2
//         var finalResult = ((num + 5) * 10) / 2;

//         // Display the result
//         resultDiv.innerHTML = "Initial Number: " + num + "<br>" +
//                               "After adding 5, multiplying by 10, and dividing by 2: " + finalResult;
  

//q11

//  var ageDiv = document.querySelector('#ageOutput');

//         // a. Store the current year
//         var currentYear = 2025;

//         // b. Store birth year
//         var birthYear = 1995;

//         // c. Calculate possible ages
//         var age1 = currentYear - birthYear;
//         var age2 = age1 - 1;  // If birthday hasn't occurred yet this year

//         // Display the result
//         ageDiv.innerHTML = "They are either " + age2 + " or " + age1 + " years old.";

//q12
//   var circleDiv = document.querySelector('#circleOutput');

//         // a. Store radius
//         var radius = 7;

//         // b. Calculate circumference: 2 * π * r
//         var pi = 3.142;
//         var circumference = 2 * pi * radius;

//         // Calculate area: π * r^2
//         var area = pi * radius * radius;

//         // Display results
//         circleDiv.innerHTML = "Radius of the circle: " + radius + "<br>" +
//                               "The circumference is: " + circumference + "<br>" +
//                               "The area is: " + area;

//q13

//  var supplyDiv = document.querySelector('#supplyOutput');

//         // a. Favorite snack
//         var favoriteSnack = "Chocolate Chip Cookies";

//         // b. Current age
//         var currentAge = 25;

//         // c. Maximum age
//         var maxAge = 80;

//         // d. Estimated amount per day
//         var amountPerDay = 3;

//         // e. Calculate total needed
//         var yearsLeft = maxAge - currentAge;
//         var totalNeeded = yearsLeft * 365 * amountPerDay; // ignoring leap years

//         // Display result
//         supplyDiv.innerHTML = "You will need " + totalNeeded + " " + favoriteSnack + 
//                               " to last you until the ripe old age of " + maxAge + ".";
