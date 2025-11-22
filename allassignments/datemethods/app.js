//  const now = new Date();

//         // Display it in the paragraph with id "datetime"
//         document.getElementById("datetime").innerText

//2
//  const months = [
//             "January", "February", "March", "April", "May", "June",
//             "July", "August", "September", "October", "November", "December"
//         ];

//         // Get current month index (0-11)
//         const currentMonthIndex = new Date().getMonth();

//         // Get month name
//         const currentMonthName = months[currentMonthIndex];

//         // Display it using querySelector
//         document.querySelector("#month").innerText = "Current Month: " + currentMonthName;

//         // Also alert it
//         alert("Current Month: " + currentMonthName);
 
//3
// const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//         // Get current day index (0-6)
//         const currentDayIndex = new Date().getDay();

//         // Get day abbreviation
//         const currentDay = days[currentDayIndex];

//         // Display it on the page
//         document.querySelector("#day").innerText = "Today is: " + currentDay;

//         // Alert the day abbreviation
//         alert("Today is: " + currentDay);

//4
 // Get the current day index (0 = Sunday, 6 = Saturday)
        // const dayIndex = new Date().getDay();

        // // Check if today is Saturday (6) or Sunday (0)
        // if (dayIndex === 0 || dayIndex === 6) {
        //     document.querySelector("#message").innerText = "It's Fun day";
        //     alert("It's Fun day");
        // } else {
        //     document.querySelector("#message").innerText = "It's a regular day";
        // }


 //5
//    const today = new Date().getDate();

//         // Check which part of the month it is
//         let message;
//         if (today < 16) {
//             message = "First fifteen days of the month";
//         } else {
//             message = "Last days of the month";
//         }

//         // Display message on page
//         document.querySelector("#message").innerText = message;

//         // Optional alert
//         alert(message);       


//6

// let now = new Date();

//         // Get time in milliseconds since Jan 1, 1970
//         let millisecondsSinceEpoch = now.getTime();

//         // Convert milliseconds to minutes
//         let minutesSinceEpoch = millisecondsSinceEpoch / (1000 * 60);

//         // Display the result
//         document.querySelector("#minutes").innerText = "Minutes since Jan 1, 1970: " + Math.floor(minutesSinceEpoch);

//         // Optional alert
//         alert("Minutes since Jan 1, 1970: " + Math.floor(minutesSinceEpoch));

//7
// Get the current hour (0-23)
        // const hour = new Date().getHours();

        // // Determine AM or PM
        // const message = (hour < 12) ? "It's AM" : "It's PM";

        // // Display on page
        // document.querySelector("#time-status").innerText = message;

        // // Alert the result
        // alert(message);

 //8
         // Create a Date object for December 31, 2020
        // let laterDate = new Date(2020, 11, 31); // Month is 0-indexed, so 11 = December

        // // Display it
        // document.querySelector("#date").innerText = "Later Date: " + laterDate;

        // // Optional alert
        // alert("Later Date: " + laterDate);
       
//9
        // Create a Date object for 1st Ramadan, June 18, 2015
        // const ramadanStart = new Date(2015, 5, 18); // Month is 0-indexed, so 5 = June

        // // Get today's date
        // const today = new Date();

        // // Calculate the difference in milliseconds
        // const diffMilliseconds = today - ramadanStart;

        // // Convert milliseconds to days
        // const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));

        // // Display on page
        // document.querySelector("#days-past").innerText = "Days since 1st Ramadan: " + diffDays;

        // // Alert the result
        // alert("Days since 1st Ramadan: " + diffDays);


//10
   // Reference date: current date and time
        // const referenceDate = new Date();

        // // Beginning of 2015: January 1, 2015
        // const start2015 = new Date(2015, 0, 1); // Month 0 = January

        // // Calculate difference in milliseconds
        // const diffMilliseconds = referenceDate - start2015;

        // // Convert milliseconds to seconds
        // const diffSeconds = Math.floor(diffMilliseconds / 1000);

        // // Display in browser
        // document.querySelector("#seconds-elapsed").innerText = "Seconds elapsed since Jan 1, 2015: " + diffSeconds;

        // // Optional alert
        // alert("Seconds elapsed since Jan 1, 2015: " + diffSeconds);        
       
        
//11
  // Create a Date object for current date and time
        // let currentDate = new Date();

        // // Extract the current hours (0-23)
        // let currentHour = currentDate.getHours();
        // console.log("Current Hour:", currentHour); // Optional: for debugging

        // // Move the date object one hour ahead
        // currentDate.setHours(currentHour + 1);

        // // Display the updated date object in the browser
        // document.querySelector("#new-time").innerText = "One hour ahead: " + currentDate;

        // // Optional alert
        // alert("One hour ahead: " + currentDate);
       
 //12
        // Create a Date object for current date
        // let currentDate = new Date();

        // // Move the date 100 years back
        // currentDate.setFullYear(currentDate.getFullYear() - 100);

        // // Display the updated date in an alert
        // alert("Date 100 years back: " + currentDate);

        // // Also display it on the page
        // document.querySelector("#old-date").innerText = "Date 100 years back: " + currentDate;
    
 //13
        // Ask the user for their age
        // let age = prompt("Enter your age:");

        // // Convert the input to a number
        // age = Number(age);

        // // Get the current year
        // const currentYear = new Date().getFullYear();

        // // Calculate birth year
        // const birthYear = currentYear - age;

        // // Display birth year in the browser
        // document.querySelector("#birth-year").innerText = "Your birth year is: " + birthYear;

        // // Optional alert
        // alert("Your birth year is: " + birthYear);

 //14   
  // Customer details
        // const customerName = prompt("Enter Customer Name:");
        // const numberOfUnits = Number(prompt("Enter number of units:"));
        // const chargesPerUnit = Number(prompt("Enter charges per unit:"));
        // const latePaymentSurcharge = Number(prompt("Enter late payment surcharge:"));

        // // Current month
        // const currentMonth = new Date().toLocaleString('default', { month: 'long' });

        // // Calculations
        // const netAmount = Number((numberOfUnits * chargesPerUnit).toFixed(2));
        // const grossAmount = Number((netAmount + latePaymentSurcharge).toFixed(2));

        // // Display the bill
        // const billHTML = `
        //     <strong>Customer Name:</strong> ${customerName}<br>
        //     <strong>Month:</strong> ${currentMonth}<br>
        //     <strong>Number of Units:</strong> ${numberOfUnits}<br>
        //     <strong>Charges per Unit:</strong> $${chargesPerUnit.toFixed(2)}<br>
        //     <strong>Net Amount Payable (within Due Date):</strong> $${netAmount}<br>
        //     <strong>Late Payment Surcharge:</strong> $${latePaymentSurcharge.toFixed(2)}<br>
        //     <strong>Gross Amount Payable (after Due Date):</strong> $${grossAmount}
        // `;

        // document.querySelector("#bill").innerHTML = billHTML;