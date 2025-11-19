console.log("Hello world");

//Short explanation (1-2 lines each)

// ++a (pre-increment): increments a first, then returns the new value.
// a++ (post-increment): returns the current value first, then increments a.
// --a (pre-decrement): decrements a first, then returns the new value.
// a-- (post-decrement): returns the current value first, then decrements a.


// var a = 10;
// var body = document.querySelector("body");
// body.innerHTML += "The value of a is: " + a + "<br><br>";
// body.innerHTML += "The value of ++a is: " + (++a) + "<br>";
// body.innerHTML += "Now the value of a is: " + a + "<br><br>";
// body.innerHTML += "The value of a++ is: " + (a++) + "<br>";
// body.innerHTML += "Now the value of a is: " + a + "<br><br>";
// body.innerHTML += "The value of --a is: " + (--a) + "<br>";
// body.innerHTML += "Now the value of a is: " + a + "<br><br>";
// body.innerHTML += "The value of a-- is: " + (a--) + "<br>";
// body.innerHTML += "Now the value of a is: " + a + "<br>";


//q2

//   var a = 2;
//     var b = 1;
//     var body = document.querySelector("#body");

//     body.innerHTML += "Initial values: a = " + a + ", b = " + b + "<br><br>";

//     // Step 1: --a
//     var step1 = --a;
//     body.innerHTML += "--a = " + step1 + "<br>";
//     body.innerHTML += "Now a = " + a + ", b = " + b + "<br><br>";

//     // Step 2: --a - --b
//     var step2 = step1 - (--b);
//     body.innerHTML += "--a - --b = " + step2 + "<br>";
//     body.innerHTML += "Now a = " + a + ", b = " + b + "<br><br>";

//     // Step 3: --a - --b + ++b
//     var step3 = step2 + (++b);
//     body.innerHTML += "--a - --b + ++b = " + step3 + "<br>";
//     body.innerHTML += "Now a = " + a + ", b = " + b + "<br><br>";

//     // Step 4: --a - --b + ++b + b--
//     var step4 = step3 + (b--);
//     body.innerHTML += "--a - --b + ++b + b-- = " + step4 + "<br>";
//     body.innerHTML += "Now a = " + a + ", b = " + b + "<br><br>";

//     // Final Result
//     body.innerHTML += "<strong>Final Result = " + step4 

    //q3

    // var bodydiv = document.querySelector("#body")

    // var useint = prompt("Enter your name: ")
    // bodydiv.innerHTML = "Hello, " + useint + "! Welcome to our website.";


 //q5
 
//  var body = document.querySelector("#body");
//  var num = prompt('Enter a number to display its multiplication table:', '5');
 
//  if (num === "" || num === null){
//     num = 5;

//  } else {
//     num = Number(num);
//  }


//  body.innerHTML += "<h2>Multiplication Table of " + num + "</h2>";

//  for (var i = 1; i <= 10; i++) {
//      body.innerHTML += num + " × " + i + " = " + (num * i) + "<br>";
//  }  

//Q6

// 1️⃣ Select the container div where the table will be inserted
var tableDiv = document.querySelector("#marksTable");
// Explanation: 
// document.querySelector("#marksTable") selects the div with id "marksTable".
// This div will hold the dynamically generated table.

// 2️⃣ Ask the user to enter the names of three subjects
var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");
// Explanation:
// prompt() shows a dialog box to the user and returns what they type as a string.
// We store the three subject names in variables subject1, subject2, subject3.

// 3️⃣ Define total marks per subject
var totalMarks = 100;
// Explanation:
// We assume each subject is out of 100 marks. This is constant for all subjects.

// 4️⃣ Ask the user to enter obtained marks for each subject
var marks1 = Number(prompt("Enter obtained marks for " + subject1 + ":"));
var marks2 = Number(prompt("Enter obtained marks for " + subject2 + ":"));
var marks3 = Number(prompt("Enter obtained marks for " + subject3 + ":"));
// Explanation:
// The prompt() returns a string, so we wrap it in Number() to convert it to a number
// so we can do math operations like addition and percentage calculation.

// 5️⃣ Calculate total obtained marks
var totalObtained = marks1 + marks2 + marks3;
// Explanation: add all obtained marks to get the overall total.

// 6️⃣ Calculate total possible marks
var totalPossible = totalMarks * 3;
// Explanation: multiply total marks per subject by the number of subjects to get max marks.

// 7️⃣ Calculate overall percentage
var percentage = (totalObtained / totalPossible) * 100;
// Explanation: percentage = (total obtained / total possible) * 100

// 8️⃣ Start building the table HTML as a string
var tableHTML = "<table>";
// Explanation: Start the table tag

// 9️⃣ Add header row
tableHTML += "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>";
// Explanation:
// <tr> = table row
// <th> = table header cell
// This row shows column names

// 10️⃣ Add first subject row
tableHTML += "<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td><td>" + ((marks1 / totalMarks) * 100).toFixed(2) + "%</td></tr>";
// Explanation:
// <td> = table data cell
// ((marks1 / totalMarks) * 100).toFixed(2) calculates percentage for this subject
// .toFixed(2) rounds it to 2 decimal places

// 11️⃣ Add second subject row
tableHTML += "<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td><td>" + ((marks2 / totalMarks) * 100).toFixed(2) + "%</td></tr>";

// 12️⃣ Add third subject row
tableHTML += "<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td><td>" + ((marks3 / totalMarks) * 100).toFixed(2) + "%</td></tr>";

// 13️⃣ Add total row
tableHTML += "<tr><th>Total</th><th>" + totalPossible + "</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>";
// Explanation:
// The total row uses <th> to make it bold
// Shows total possible, total obtained, and overall percentage

// 14️⃣ Close the table tag
tableHTML += "</table>";

// 15️⃣ Insert the generated table HTML into the container div
tableDiv.innerHTML = tableHTML;
// Explanation:
// innerHTML sets the HTML content of the div
// The table is now visible on the page