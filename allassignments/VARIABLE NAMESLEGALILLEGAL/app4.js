//q1
var firstname = "john"
var Age = 25
var city = "New York"

//q2
var myName;
var _email;
var $phone;
var user123;
var MY_ADDRESS;
//q3


// var 123user;  // Cannot start with number
// var my-name;  // Cannot use hyphen
// var my name;  // Cannot have space
// var my@email; // Cannot use special characters
// var class;    // Reserved keywor


//q4
var body = document.querySelector("body");

body.innerHTML += "<h1>Rules for naming JS variables</h1>";
body.innerHTML += "<p>Variable names can only contain <strong>letters, numbers, $ and _</strong>. For example: <strong>$my_1stVariable</strong></p>";
body.innerHTML += "<p>Variables must begin with a <strong>letter, $ or _</strong>. For example: <strong>$name, _name or name</strong></p>";
body.innerHTML += "<p>Variable names are case <strong>sensitive</strong></p>";
body.innerHTML += "<p>Variable names should not be JS <strong>keywords</strong></p>";