

//1
// var studentname = [];

//2

// var studentNames = new Array();

//3
// var stringsArray = ["Ali", "Sara", "John"];

//4

// var num = [1,2,3,4]

//5

// var boolean = [true, false , true , false]

//6
// var mixedArray = ["Alice", 25, true, 3.14];

//7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
//         var listDiv = document.querySelector("#qualificationList");

//         for (var i = 0; i < qualifications.length; i++) {
//             listDiv.innerHTML += (i + 1) + ") " + qualifications[i] + "<br>";
//         }

//8
//  var students = ["Ali", "Sara", "John"];
//         var scores = [420, 390, 450];
//         var totalMarks = 500;

//         var resultDiv = document.querySelector("#result");

//         for (var i = 0; i < students.length; i++) {
//             var percentage = (scores[i] / totalMarks) * 100;
//             resultDiv.innerHTML += 
//                 "Score of " + students[i] + " is " + scores[i] + ". Percentage: " + percentage.toFixed(2) + "%<br>";
//         }

//9
// var colors = ["Red", "Green", "Blue", "Yellow"];
//         var colorDiv = document.querySelector("#colorList");

//         function displayArray(message) {
//             colorDiv.innerHTML += message + ": " + colors.join(", ") + "<br>";
//         }

//         // Initial array
//         displayArray("Initial colors");

//         // a. Add color to the beginning
//         var firstColor = prompt("Which color do you want to add to the beginning?");
//         if(firstColor) {
//             colors.unshift(firstColor);
//             displayArray("After adding to beginning");
//         }

//         // b. Add color to the end
//         var lastColor = prompt("Which color do you want to add to the end?");
//         if(lastColor) {
//             colors.push(lastColor);
//             displayArray("After adding to end");
//         }

//         // c. Add two more colors to the beginning
//         colors.unshift("Purple", "Orange");
//         displayArray("After adding two colors to beginning");

//         // d. Delete first color
//         colors.shift();
//         displayArray("After deleting first color");

//         // e. Delete last color
//         colors.pop();
//         displayArray("After deleting last color");

//         // f. Add color at desired index
//         var addIndex = parseInt(prompt("At which index do you want to add a color?"));
//         var addColor = prompt("Which color do you want to add?");
//         if(!isNaN(addIndex) && addColor) {
//             colors.splice(addIndex, 0, addColor);
//             displayArray("After adding color at index " + addIndex);
//         }

//         // g. Delete color(s) from user-defined index
//         var delIndex = parseInt(prompt("At which index do you want to delete color(s)?"));
//         var delCount = parseInt(prompt("How many color(s) do you want to delete?"));
//         if(!isNaN(delIndex) && !isNaN(delCount)) {
//             colors.splice(delIndex, delCount);
//             displayArray("After deleting color(s)");
//         }

//10
// var scores = [420, 390, 450, 380, 410]; // Example scores
//         var scoreDiv = document.querySelector("#sortedScores");

//         // Sorting in ascending order
//         scores.sort(function(a, b) {
//             return a - b;
//         });

//         // Display sorted scores
//         scoreDiv.innerHTML = "Sorted Scores: " + scores.join(", ");

// //11
//  var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
//         var selectedCities = cities.slice(1, 4); // Copies 3 elements: index 1,2,3

//         var citiesDiv = document.querySelector("#citiesDiv");
//         citiesDiv.innerHTML = "Original Cities: " + cities.join(", ") + "<br>";
//         citiesDiv.innerHTML += "Selected Cities: " + selectedCities.join(", ");

//12

//  var arr = ["This ", " is ", " my ", " cat"];
//         var result = arr.join(""); // Join all elements without extra separator

//         document.querySelector("#joinedString").innerHTML = result;
    
//13

    // var fifoQueue = []; // Empty array

    //     // Storing values one by one
    //     fifoQueue.push("Apple");
    //     fifoQueue.push("Banana");
    //     fifoQueue.push("Cherry");

    //     var fifoDiv = document.querySelector("#fifoDiv");

    //     fifoDiv.innerHTML += "Initial Queue: " + fifoQueue.join(", ") + "<br>";

    //     // Accessing values in FIFO order
    //     while(fifoQueue.length > 0) {
    //         var removedItem = fifoQueue.shift(); // Removes first element
    //         fifoDiv.innerHTML += "Removed: " + removedItem + "<br>";
    //     }

//14

//  var devices = ["keyboard", "mouse", "printer", "monitor"];
//         var outputDiv = document.querySelector("#deviceOutput");

//         // Display devices in reverse order (LIFO)
//         while (devices.length > 0) {
//             var removedDevice = devices.pop(); // Remove last element
//             outputDiv.innerHTML += "Out: " + removedDevice + "<br>";
//         }


//15
 // Step 1: Store the phone manufacturers in an array
        // var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

        // // Step 2: Create the dropdown using document.write()
        // document.write("<select>");

        // // Step 3: Loop through the array and add each manufacturer as an option
        // for (var i = 0; i < manufacturers.length; i++) {
        //     document.write("<option>" + manufacturers[i] + "</option>");
        // }

        // document.write("</select>");