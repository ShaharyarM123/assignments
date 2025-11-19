// ===== DATE AND TIME - 20 PROBLEMS (EASIEST WAY) =====
// Using: var, let, const

// ========== PROBLEM 1: CUSTOM DATE FORMATTER ==========
// Format: "Saturday, 9 August 2025"
// Explanation: Takes a date and displays it in a nice human-readable format
function problem1() {
    // var = function-scoped variable, can be redeclared
    // Create array of day names (0=Sunday, 1=Monday, ... 6=Saturday)
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Create array of month names (0=January, 1=February, ... 11=December)
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    // let = block-scoped variable, can be reassigned but not redeclared
    // new Date() creates a date object for August 9, 2025
    let date = new Date("August 9, 2025");
    
    // date.getDay() returns 0-6 (day of week). Use it to get name from array
    // For example: Saturday = 6, so dayNames[6] = "Saturday"
    let dayName = dayNames[date.getDay()];
    
    // date.getDate() returns 1-31 (day of month)
    // For example: August 9 returns 9
    let day = date.getDate();
    
    // date.getMonth() returns 0-11 (month number). Use it to get name from array
    // For example: August = 7, so monthNames[7] = "August"
    let monthName = monthNames[date.getMonth()];
    
    // date.getFullYear() returns the year (like 2025)
    let year = date.getFullYear();
    
    // const = block-scoped, cannot be reassigned or redeclared
    // Join all parts together with commas and spaces to make: "Saturday, 9 August 2025"
    const result = dayName + ", " + day + " " + monthName + " " + year;
    
    // Print the result to browser console
    console.log("1. Custom Date Formatter: " + result);
}
problem1();

// ========== PROBLEM 2: ELAPSED TIME IN MINUTES ==========
// Explanation: Calculate how many minutes have passed between two timestamps
function problem2() {
    // var = can redeclare and reassign
    // new Date().getTime() returns milliseconds since Jan 1, 1970
    // We're setting time1 to August 9, 2025 at 08:00 AM
    var time1 = new Date("August 9, 2025 08:00").getTime();
    
    // time2 is 5 minutes AFTER time1 (also August 9, 2025 at 08:05 AM)
    var time2 = new Date("August 9, 2025 08:05").getTime();
    
    // let = can reassign, cannot redeclare
    // Math.abs() gives absolute value (removes negative sign)
    // time2 - time1 = difference in milliseconds between the two times
    let timeDifference = Math.abs(time2 - time1);  // This equals 300,000 milliseconds
    
    // Convert milliseconds to minutes:
    // Divide by 1000 to get seconds, then divide by 60 to get minutes
    // Math.floor() rounds down to nearest whole number
    const minutesPassed = Math.floor(timeDifference / 1000 / 60);  // 300000 / 1000 / 60 = 5
    
    // Print result: "2. Elapsed Time: 5 minutes"
    console.log("2. Elapsed Time: " + minutesPassed + " minutes");
}
problem2();

// ========== PROBLEM 3: AGE CALCULATOR ==========
// Explanation: Calculate age in years, months, and days from a birthdate
function problem3() {
    // let = block-scoped, can reassign
    // Create a date object for birthdate: November 27, 2003
    let birthdate = new Date("2003-11-27");
    
    // Create a date object for today's date
    let today = new Date();
    
    // Calculate years difference:
    // Get current year (2025) and subtract birth year (2003)
    // Result: 2025 - 2003 = 22 years (approximately)
    let years = today.getFullYear() - birthdate.getFullYear();
    
    // Calculate months difference:
    // Get current month (11) and subtract birth month (10)
    // Note: getMonth() returns 0-11 (0=Jan, 11=Dec)
    let months = today.getMonth() - birthdate.getMonth();
    
    // Calculate days difference:
    // Get current day (19) and subtract birth day (27)
    let days = today.getDate() - birthdate.getDate();
    
    // Fix if days are negative:
    // If today's day is before birth day, we need to borrow a month
    if (days < 0) {
        // Subtract 1 month from months
        months = months - 1;
        // Add previous month's days to current days
        // (30 is simplified; real calculation would check actual month days)
        days = 30 + days;  // Simplified
    }
    
    // Fix if months are negative:
    // If we're before the birth month in the year, we need to borrow a year
    if (months < 0) {
        // Subtract 1 year from years
        years = years - 1;
        // Add 12 months to months
        months = 12 + months;
    }
    
    // const = cannot be reassigned
    // Combine all parts into readable text
    const ageText = years + " years, " + months + " months, " + days + " days";
    
    // Print result: "3. Age Calculator: 22 years, 11 months, 22 days"
    console.log("3. Age Calculator: " + ageText);
}
problem3();

// ========== PROBLEM 4: FIRST DAY OF CURRENT MONTH ==========
// Explanation: Find the date of the first day of the current month
function problem4() {
    // let = block-scoped, can reassign
    // Create today's date (November 19, 2025)
    let today = new Date();
    
    // const = cannot reassign
    // new Date(year, month, day) creates a specific date
    // today.getFullYear() = 2025
    // today.getMonth() = 10 (November, because 0=Jan, 10=Nov)
    // The third parameter is DAY = 1 (we want the 1st day)
    // So this creates: November 1, 2025
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    
    // toDateString() converts date to readable format: "Mon Nov 01 2025"
    console.log("4. First Day of Month: " + firstDay.toDateString());
}
problem4();

// ========== PROBLEM 5: LAST DAY OF CURRENT MONTH ==========
// Explanation: Find the last day of the current month
function problem5() {
    // let = block-scoped
    // Create today's date (November 19, 2025)
    let today = new Date();
    
    // const = cannot reassign
    // new Date(year, month, 0) is a trick to get the LAST day of previous month
    // If we use month + 1 = 11 (December) and day 0, we get last day of November!
    // today.getFullYear() = 2025
    // today.getMonth() + 1 = 11 (December, but we use day 0)
    // day 0 = one day before December 1 = November 30
    // So this creates: November 30, 2025
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    
    // toDateString() converts to readable format: "Sun Nov 30 2025"
    console.log("5. Last Day of Month: " + lastDay.toDateString());
}
problem5();

// ========== PROBLEM 6: TIME AGO ==========
// Explanation: Show time like "Just now", "5 minutes ago", "2 hours ago"
function problem6() {
    // var = can redeclare
    // Get current time in milliseconds
    var currentTime = new Date().getTime();
    
    // Get past time: current time MINUS 5 minutes (5*60*1000 milliseconds)
    // 5 * 60 * 1000 = 5 minutes in milliseconds
    var pastTime = new Date().getTime() - (5 * 60 * 1000);
    
    // let = can reassign, cannot redeclare
    // Calculate how many seconds have passed
    // Math.floor() rounds down to whole number
    let secondsAgo = Math.floor((currentTime - pastTime) / 1000);
    
    // let = declare result variable
    let result;
    
    // Check how long ago it was and set appropriate text:
    
    // If less than 10 seconds, say "Just now"
    if (secondsAgo < 10) {
        result = "Just now";
    } 
    // Else if less than 60 seconds, say number of seconds
    else if (secondsAgo < 60) {
        result = secondsAgo + " seconds ago";
    } 
    // Else if less than 3600 seconds (1 hour), convert to minutes
    else if (secondsAgo < 3600) {
        let minutesAgo = Math.floor(secondsAgo / 60);
        result = minutesAgo + " minutes ago";
    } 
    // Else if less than 86400 seconds (1 day), convert to hours
    else if (secondsAgo < 86400) {
        let hoursAgo = Math.floor(secondsAgo / 3600);
        result = hoursAgo + " hours ago";
    } 
    // Otherwise, convert to days
    else {
        let daysAgo = Math.floor(secondsAgo / 86400);
        result = daysAgo + " days ago";
    }
    
    // Print result (in this case, should print "5 minutes ago")
    console.log("6. Time Ago: " + result);
}
problem6();

// ========== PROBLEM 7: COUNTDOWN TIMER ==========
// Explanation: Show days, hours, minutes, seconds until New Year 2026
function problem7() {
    // var = can redeclare
    // Get January 1, 2026 in milliseconds
    var futureDate = new Date("January 1, 2026").getTime();
    
    // Get today's date in milliseconds
    var today = new Date().getTime();
    
    // let = can reassign
    // Calculate how many milliseconds are left until the future date
    let timeLeft = futureDate - today;
    
    // Convert milliseconds to DAYS:
    // 1000 ms = 1 second
    // 60 seconds = 1 minute
    // 60 minutes = 1 hour
    // 24 hours = 1 day
    // So: 1000 * 60 * 60 * 24 = milliseconds in a day
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    
    // Convert remaining milliseconds to HOURS:
    // timeLeft % (1000 * 60 * 60 * 24) gives remaining milliseconds after removing full days
    // Then divide by milliseconds in an hour
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    // Convert remaining milliseconds to MINUTES:
    // Remove hours, then convert to minutes
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    
    // Convert remaining milliseconds to SECONDS:
    // Remove minutes, then convert to seconds
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // const = cannot reassign
    // Combine all parts: "43d 14h 26m 30s" (example format)
    const countdown = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    
    // Print result
    console.log("7. Countdown to 2026: " + countdown);
}
problem7();

// ========== PROBLEM 8: TIME DIFFERENCE IN HOURS AND MINUTES ==========
// Explanation: Calculate time difference between two dates in hours and minutes
function problem8() {
    // var = can redeclare
    // First date: August 9, 2025 at 08:00 AM, converted to milliseconds
    var date1 = new Date("August 9, 2025 08:00").getTime();
    
    // Second date: August 9, 2025 at 11:25 AM, converted to milliseconds
    var date2 = new Date("August 9, 2025 11:25").getTime();
    
    // let = can reassign
    // Calculate absolute difference (ignore which date is earlier/later)
    let diff = Math.abs(date2 - date1);
    
    // Convert milliseconds to hours:
    // Divide by 1000 to get seconds, then by 60 to get minutes, then by 60 to get hours
    // Math.floor() rounds down to nearest whole number
    let hours = Math.floor(diff / (1000 * 60 * 60));
    
    // Convert remaining milliseconds to minutes:
    // % (modulo) operator gives remainder after dividing
    // diff % (1000 * 60 * 60) gives milliseconds that are left after removing full hours
    // Then divide by milliseconds in a minute
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    // const = cannot reassign
    // Combine hours and minutes into readable format: "3 hours 25 minutes"
    const timeText = hours + " hours " + minutes + " minutes";
    
    // Print result
    console.log("8. Time Difference: " + timeText);
}
problem8();

// ========== PROBLEM 9: WEEKEND OR WEEKDAY ==========
// Explanation: Check if a date falls on weekend (Sat/Sun) or weekday (Mon-Fri)
function problem9() {
    // let = can reassign
    // String representing a date: "August 9, 2025" (which is a Saturday)
    let dateString = "August 9, 2025";
    
    // Create a date object from the string
    let date = new Date(dateString);
    
    // date.getDay() returns 0-6:
    // 0 = Sunday
    // 1 = Monday
    // 2 = Tuesday
    // 3 = Wednesday
    // 4 = Thursday
    // 5 = Friday
    // 6 = Saturday
    // For August 9, 2025 it returns 6 (Saturday)
    let dayNumber = date.getDay();
    
    // let = declare result variable
    let result;
    
    // Check if dayNumber is 0 (Sunday) or 6 (Saturday):
    // If true, it's a weekend
    if (dayNumber === 0 || dayNumber === 6) {
        result = "Weekend";
    } 
    // Otherwise, it's a weekday (Monday-Friday)
    else {
        result = "Weekday";
    }
    
    // Print result: "9. August 9, 2025 is: Weekend"
    console.log("9. August 9, 2025 is: " + result);
}
problem9();

// ========== PROBLEM 10: COMPARE BIRTHDATES ==========
// Explanation: Compare two people's ages and find who is older
function problem10() {
    // var = can redeclare
    // Name of first person
    var person1 = "Abdullah";
    
    // First person's birthdate converted to milliseconds
    // November 27, 1993
    var birth1 = new Date("1993-11-27").getTime();
    
    // Name of second person
    var person2 = "Aftab";
    
    // Second person's birthdate converted to milliseconds
    // August 4, 2004
    var birth2 = new Date("2004-08-04").getTime();
    
    // let = can reassign
    // Calculate absolute difference in milliseconds between the two birthdates
    // Math.abs() gives positive number (removes negative sign)
    let diff = Math.abs(birth1 - birth2);
    
    // Convert milliseconds to years:
    // Divide by 1000 (seconds), 60 (minutes), 60 (hours), 24 (days), 365 (days in year)
    // Math.floor() rounds down
    const yearsOlder = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    
    // let = declare result variable
    let result;
    
    // Check which date is earlier (older person):
    // If birth1 is earlier in time (smaller milliseconds), person1 is older
    if (birth1 < birth2) {
        result = person1 + " is older by " + yearsOlder + " years";
    } 
    // Otherwise, person2 is older
    else {
        result = person2 + " is older by " + yearsOlder + " years";
    }
    
    // Print result: "10. Age Comparison: Abdullah is older by 11 years"
    console.log("10. Age Comparison: " + result);
}
problem10();

// ========== PROBLEM 11: RECURRING ALARM CHECKER ==========
// Explanation: Check if current date and time matches a scheduled alarm
function problem11() {
    // var = can redeclare
    // Array of day names: index 0=Sunday, 1=Monday, ... 6=Saturday
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // The alarm is set for Thursday
    var alarmDay = "Thursday";
    
    // The alarm is set for 14:30 (2:30 PM)
    var alarmTime = "14:30";
    
    // let = can reassign
    // Create a date object for right now
    let now = new Date();
    
    // Get current day of week (0-6) and look up its name
    // now.getDay() returns 4 (if today is Thursday)
    // dayNames[4] returns "Thursday"
    let currentDay = dayNames[now.getDay()];
    
    // Get current time and format as hours + ":" + minutes
    // now.getHours() returns 14
    // now.getMinutes() returns 30
    // Result: "14:30"
    let currentTime = now.getHours() + ":" + now.getMinutes();
    
    // let = declare result variable
    let result;
    
    // Check if BOTH day AND time match the alarm:
    // && means AND (both conditions must be true)
    if (currentDay === alarmDay && currentTime === alarmTime) {
        result = "Alarm rings!";
    } 
    // If either day or time doesn't match, alarm doesn't ring
    else {
        result = "No alarm";
    }
    
    // Print result
    console.log("11. Alarm Check: " + result);
}
problem11();

// ========== PROBLEM 12: DATE VALIDATOR ==========
// Explanation: Check if a date string is valid (real date) or invalid (gibberish)
function problem12() {
    // var = can redeclare
    // Test date 1: valid date string in YYYY-MM-DD format
    var testDate1 = "2025-08-09";
    
    // Test date 2: invalid string that is not a date
    var testDate2 = "invalid-date";
    
    // let = can reassign
    // Try to convert testDate1 to a date object
    let date1 = new Date(testDate1);
    
    // Try to convert testDate2 to a date object
    // Even invalid strings become date objects, but with "Invalid Date"
    let date2 = new Date(testDate2);
    
    // Check if date1 is valid:
    // date1.getTime() returns milliseconds if date is valid
    // isNaN() checks if value is NOT a number
    // ! (exclamation) reverses true/false
    // So: !isNaN(date1.getTime()) = true if valid, false if invalid
    let isValid1 = !isNaN(date1.getTime());
    
    // Check if date2 is valid (same logic)
    let isValid2 = !isNaN(date2.getTime());
    
    // Print results:
    // testDate1 is valid, so prints: "12. Is '2025-08-09' valid? true"
    // testDate2 is invalid, so prints: "12. Is 'invalid-date' valid? false"
    console.log("12. Is '2025-08-09' valid? " + isValid1);
    console.log("12. Is 'invalid-date' valid? " + isValid2);
}
problem12();

// ========== PROBLEM 13: RELATIVE DATE FORMATTER ==========
// Explanation: Format date as "Today at 3:45 PM", "Yesterday", or "4 days ago"
function problem13() {
    // let = can reassign
    // Create a date object for right now
    let now = new Date();
    
    // Get current hours (0-23) and minutes (0-59)
    // now.getHours() returns 14
    // now.getMinutes() returns 30
    // Result: "14:30"
    let timeFormatted = now.getHours() + ":" + now.getMinutes();
    
    // const = cannot reassign
    // Create text showing today's time
    // Result: "Today at 14:30"
    const result = "Today at " + timeFormatted;
    
    // Print result
    console.log("13. Relative Date: " + result);
}
problem13();

// ========== PROBLEM 14: NEXT 7 DAYS ==========
// Explanation: Generate an array of dates for the next 7 days in DD-MM-YYYY format
function problem14() {
    // var = can redeclare
    // Create empty array to store dates
    var nextDates = [];
    
    // Loop 7 times (i goes from 0 to 6)
    for (let i = 0; i < 7; i++) {
        // let = can reassign (inside loop, i changes each time)
        // Create a new date object for today
        let date = new Date();
        
        // Add i days to the date
        // date.getDate() gets current day (e.g., 19)
        // date.getDate() + i moves forward by i days
        // Example: i=0 gives today, i=1 gives tomorrow, i=2 gives day after tomorrow
        date.setDate(date.getDate() + i);
        
        // Extract day from the new date (e.g., 19, 20, 21...)
        let day = date.getDate();
        
        // Extract month from the new date (e.g., 11 for November)
        // getMonth() returns 0-11, so add 1 to get 1-12
        let month = date.getMonth() + 1;
        
        // Extract year from the new date (e.g., 2025)
        let year = date.getFullYear();
        
        // Combine into DD-MM-YYYY format: "19-11-2025"
        // .push() adds this date to the nextDates array
        nextDates.push(day + "-" + month + "-" + year);
    }
    
    // .join() combines all dates in the array with ", " between them
    // Result: "19-11-2025, 20-11-2025, 21-11-2025, ..."
    console.log("14. Next 7 Days: " + nextDates.join(", "));
}
problem14();

// ========== PROBLEM 15: TIME SLOT GENERATOR ==========
// Explanation: Generate 30-minute time slots from 9 AM to 5 PM
function problem15() {
    // var = can redeclare
    // Create empty array to store time slots
    var timeSlots = [];
    
    // Outer loop: go through each hour from 9 to 16 (9 AM to 4 PM)
    // hour < 17 because we want to include 5 PM (17:00) slots
    for (let hour = 9; hour < 17; hour++) {
        // Inner loop: go through each 30-minute interval (0 and 30 minutes)
        // minute += 30 means: first iteration minute=0, second iteration minute=30
        for (let minute = 0; minute < 60; minute += 30) {
            // Combine hour and minute into time format: "9:0", "9:30", "10:0", etc.
            let time = hour + ":" + minute;
            
            // Add this time to the timeSlots array
            timeSlots.push(time);
        }
    }
    
    // .slice(0, 5) gets first 5 elements from the array
    // .join(", ") joins them with comma and space: "9:0, 9:30, 10:0, 10:30, 11:0"
    console.log("15. First 5 Time Slots: " + timeSlots.slice(0, 5).join(", "));
}
problem15();

// ========== PROBLEM 16: MONTHLY CALENDAR ==========
// Explanation: Get all dates in the current month and display them
function problem16() {
    // var = can redeclare
    // Create empty array to store all dates in the month
    var allDates = [];
    
    // let = can reassign
    // Create a date object for today
    let today = new Date();
    
    // Get the current year (e.g., 2025)
    let year = today.getFullYear();
    
    // Get the current month (0-11, so 10 for November)
    let month = today.getMonth();
    
    // Get the last day of the month:
    // new Date(year, month + 1, 0) gives last day of current month
    // .getDate() returns the day number (e.g., 30 for November)
    let lastDate = new Date(year, month + 1, 0).getDate();
    
    // Loop from day 1 to the last day of the month
    for (let day = 1; day <= lastDate; day++) {
        // Format: "1-11-2025", "2-11-2025", etc.
        allDates.push(day + "-" + (month + 1) + "-" + year);
    }
    
    // .slice(0, 5) gets first 5 dates
    // .join(", ") joins them with comma: "1-11-2025, 2-11-2025, 3-11-2025, 4-11-2025, 5-11-2025"
    console.log("16. Dates in Month (first 5): " + allDates.slice(0, 5).join(", "));
}
problem16();

// ========== PROBLEM 17: UTC TO LOCAL TIME ==========
// Explanation: Convert a UTC date/time to local time zone
function problem17() {
    // var = can redeclare
    // UTC date string: "2025-08-09T12:00:00Z"
    // T = separator between date and time
    // Z = indicates UTC time (Zulu time)
    var utcDate = "2025-08-09T12:00:00Z";
    
    // let = can reassign
    // new Date(utcDate) automatically converts UTC to local time
    // JavaScript knows to interpret the Z as UTC
    let date = new Date(utcDate);
    
    // const = cannot reassign
    // .toString() converts the date to a readable string in local time
    // Automatically accounts for your time zone
    const localTime = date.toString();
    
    // Print result: "Fri Aug 09 2025 07:00:00 GMT-0500 (Eastern Daylight Time)"
    // (actual output depends on your time zone)
    console.log("17. UTC to Local: " + localTime);
}
problem17();

// ========== PROBLEM 18: EXECUTION TIME ==========
// Explanation: Measure how long it takes a function or loop to execute
function problem18() {
    // var = can redeclare
    // Date.now() returns current time in milliseconds since Jan 1, 1970
    // This records the START time
    var startTime = Date.now();
    
    // Simulate some work: loop 1 million times and calculate square root
    // This loop takes time to execute (usually 10-200 milliseconds)
    for (let i = 0; i < 1000000; i++) {
        // Math.sqrt(i) calculates the square root of i
        // Just doing calculation, not storing result
        Math.sqrt(i);
    }
    
    // Record the END time (after loop finishes)
    var endTime = Date.now();
    
    // const = cannot reassign
    // Subtract start time from end time to get total milliseconds elapsed
    // Example: 1000000 iterations might take 152 milliseconds
    const executionTime = endTime - startTime;
    
    // Print result: "18. Execution Time: 152 milliseconds"
    console.log("18. Execution Time: " + executionTime + " milliseconds");
}
problem18();

// ========== PROBLEM 19: ISO FORMAT (YYYY-MM-DD) ==========
// Explanation: Format today's date as YYYY-MM-DD without the time part
function problem19() {
    // let = can reassign
    // Create date object for today
    let today = new Date();
    
    // Get the full year (e.g., 2025)
    let year = today.getFullYear();
    
    // Get the month (0-11, so add 1 to get 1-12)
    // We want November, so month = 10, add 1 = 11
    let month = today.getMonth() + 1;
    
    // Get the day of month (e.g., 19)
    let day = today.getDate();
    
    // const = cannot reassign
    // Combine into ISO format: "2025-11-19"
    // This format is good for databases and APIs
    const isoDate = year + "-" + month + "-" + day;
    
    // Print result: "19. ISO Format: 2025-11-19"
    console.log("19. ISO Format: " + isoDate);
}
problem19();

// ========== PROBLEM 20: DAYS IN ANY MONTH ==========
// Explanation: Calculate how many days are in a specific month (handles leap years)
function problem20() {
    // function = define a reusable function
    // Takes two parameters: month (1-12) and year (e.g., 2024)
    function getDaysInMonth(month, year) {
        // new Date(year, month, 0) trick:
        // month = which month (but JavaScript uses 0-11, so we pass what user gives)
        // 0 = last day of previous month
        // So if month=2 (March) and day=0, we get last day of February
        // If February 2024 (leap year), we get 29
        // If February 2025 (normal year), we get 28
        return new Date(year, month, 0).getDate();
    }
    
    // Test 1: How many days in February 2024?
    // 2024 is a leap year (divisible by 4), so February has 29 days
    // getDaysInMonth(2, 2024) returns 29
    let daysInFeb2024 = getDaysInMonth(2, 2024);
    
    // Test 2: How many days in August 2025?
    // August always has 31 days
    // getDaysInMonth(8, 2025) returns 31
    let daysInAug2025 = getDaysInMonth(8, 2025);
    
    // Print results:
    // "20. Days in Feb 2024 (leap year): 29"
    // "20. Days in Aug 2025: 31"
    console.log("20. Days in Feb 2024 (leap year): " + daysInFeb2024);
    console.log("20. Days in Aug 2025: " + daysInAug2025);
}
problem20();

// ========== VAR, LET, CONST CONCEPTS ==========
console.log("\n===== VAR, LET, CONST CONCEPTS =====\n");

// ========== VAR EXPLANATION ==========
console.log("--- VAR (can reassign and redeclare) ---");

// var = function-scoped variable
// "function-scoped" = exists throughout the entire function, not just in the block
// can be reassigned (value changed)
// can be redeclared (declared again with same name)
var username = "Abdullah";
console.log("var username = " + username);

// Reassign: change the value to something else
// This is allowed with var
username = "Usman";
console.log("After reassign: " + username);

// Redeclare: declare the variable again with a new value
// This is allowed with var (it's the main difference from let)
var username = "Ammar";
console.log("After redeclare: " + username);

// ========== LET EXPLANATION ==========
console.log("\n--- LET (can reassign, cannot redeclare) ---");

// let = block-scoped variable
// "block-scoped" = exists only within { } block, not outside
// can be reassigned (value changed)
// CANNOT be redeclared (if you try, you get an error)
let age = 21;
console.log("let age = " + age);

// Reassign: change the value
// This is allowed with let
age = 22;
console.log("After reassign: " + age);

// TRY redeclare (this would cause ERROR if uncommented):
// let age = 23;  // ERROR! SyntaxError: Identifier 'age' has already been declared
// This error shows that you cannot redeclare with let

// ========== CONST EXPLANATION ==========
console.log("\n--- CONST (cannot reassign or redeclare) ---");

// const = block-scoped constant
// "constant" = value cannot change after assignment
// CANNOT be reassigned (if you try, you get an error)
// CANNOT be redeclared (if you try, you get an error)
const city = "Quetta";
console.log("const city = " + city);

// TRY reassign (this would cause ERROR if uncommented):
// city = "Karachi";  // ERROR! TypeError: Assignment to constant variable

// TRY redeclare (this would cause ERROR if uncommented):
// const city = "Peshawar";  // ERROR! SyntaxError: Identifier 'city' has already been declared

// ========== QUICK COMPARISON ==========
console.log("\n--- QUICK COMPARISON ---");
console.log("var:   can reassign ✓, can redeclare ✓, scope: function");
console.log("let:   can reassign ✓, can redeclare ✗, scope: block");
console.log("const: can reassign ✗, can redeclare ✗, scope: block");
console.log("\nBest Practice: Use const by default, let when you need to reassign, avoid var");


