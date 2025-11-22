// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName + " " + lastName;

// alert("Hello " + fullName + "!");

//2

// var model = prompt("Enter your favorite mobile phone model:");
// document.querySelector("#result").innerHTML =
//     "Your input: " + model + "<br>Length: " + model.length;

//3
// var word = "Pakistani";
// var index = word.indexOf("n");

// document.querySelector("#result").innerHTML =
//     "Index of 'n' in 'Pakistani' is: " + index;

//4
// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");

// document.querySelector("#result").innerHTML =
//     "Last index of 'l' in 'Hello World' is: " + lastIndex;

//5
// var word = "Pakistani";
// var charAt3 = word.charAt(3);

// document.querySelector("#result").innerHTML =
//     "Character at index 3 in 'Pakistani' is: " + charAt3;

//6

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName.concat(" ", lastName);

// document.querySelector("#result").innerHTML =
//     "Hello " + fullName + "!";


//7

// var city = "Hyderabad";
// var replaced = city.replace("Hyder", "Islam");

// document.querySelector("#result").innerHTML =
//     "After replacement: " + replaced;


//8
// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var updated = message.replaceAll("and", "&");

// document.querySelector("#result").innerHTML =
//     "Updated message:<br>" + updated;

//9
// var str = "472";
// var num = Number(str);

// document.querySelector("#result").innerHTML =
//     "Value (string): " + str + " — Type: " + typeof str + "<br>" +
//     "Value (number): " + num + " — Type: " + typeof num;

//10
// var userInput = prompt("Enter any text:");
// var upperCaseInput = userInput.toUpperCase();

// document.querySelector("#result").innerHTML =
//     "Your input in capital letters: " + upperCaseInput;

//11

// var userInput = prompt("Enter any text:");

// // Split the input into words
// var words = userInput.toLowerCase().split(" ");

// // Capitalize first letter of each word
// for (var i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }

// var titleCase = words.join(" ");

// document.querySelector("#result").innerHTML =
//     "Your input in title case: " + titleCase;

//12

// var num = 35.36;

// // Convert to string and remove the dot
// var str = num.toString().replace(".", "");

// document.querySelector("#result").innerHTML =
//     "Number as string without dot: " + str;

//13
// var username = prompt("Enter your username:");

// // Function to check for invalid characters
// function hasInvalidChars(name) {
//     for (var i = 0; i < name.length; i++) {
//         var code = name.charCodeAt(i);
//         if (code === 33 || code === 44 || code === 46 || code === 64) {
//             return true;
//         }
//     }
//     return false;
// }

// while (hasInvalidChars(username)) {
//     username = prompt("Invalid username! Please enter a valid username without [@ . , !]:");
// }

// document.querySelector("#result").innerHTML =
//     "Your valid username is: " + username;

//14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:").toLowerCase();

// var found = false;

// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     document.querySelector("#result").innerHTML =
//         userInput + " is available in the list.";
// } else {
//     document.querySelector("#result").innerHTML =
//         userInput + " is not available in the list.";
// }


//15
// function isValidPassword(password) {
//     if (password.length < 6) {
//         return false; // Too short
//     }

//     // Check if first character is a number
//     var firstCharCode = password.charCodeAt(0);
//     if (firstCharCode >= 48 && firstCharCode <= 57) {
//         return false;
//     }

//     // Check for at least one letter and one number
//     var hasLetter = false;
//     var hasNumber = false;

//     for (var i = 0; i < password.length; i++) {
//         var code = password.charCodeAt(i);

//         if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//             hasLetter = true;
//         } else if (code >= 48 && code <= 57) {
//             hasNumber = true;
//         }
//     }

//     return hasLetter && hasNumber;
// }

// var password = prompt("Enter your password:");

// while (!isValidPassword(password)) {
//     password = prompt(
//         "Invalid password! Must be at least 6 characters, contain letters and numbers, and not start with a number.\nEnter again:"
//     );
// }

// document.querySelector("#result").innerHTML =
//     "Your valid password is: " + password;

//16

// var university = "University of Karachi";

// // Convert string to array of characters
// var arr = university.split("");

// var output = "";
// for (var i = 0; i < arr.length; i++) {
//     output += arr[i] + "<br>";
// }

// document.querySelector("#result").innerHTML = output;


//17
// var userInput = prompt("Enter any text:");

// var lastChar = userInput.charAt(userInput.length - 1);

// document.querySelector("#result").innerHTML =
//     "The last character of your input is: " + lastChar;

//18
// var str = "The quick brown fox jumps over the lazy dog";

// // Convert string to lowercase for case-insensitive search
// var lowerStr = str.toLowerCase();
// var count = 0;

// // Split the string into words
// var words = lowerStr.split(" ");

// for (var i = 0; i < words.length; i++) {
//     if (words[i] === "the") {
//         count++;
//     }
// }

// document.querySelector("#result").innerHTML =
//     "The word 'the' occurs " + count + " times in the string.";

