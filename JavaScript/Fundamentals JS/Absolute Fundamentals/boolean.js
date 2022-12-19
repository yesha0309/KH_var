// Convert a non boolean value to boolean

var message = "";
var showPost = false;

console.log("show post button : ${showPost}");
//output --> 'show post button : false'
// ----- show boolean value if message is empty or not
var message = "";
var showPost = !!message; //double Not operator-----> !!message --- means, message should be non empty

console.log(`Show Edit Button: ${showPost}`);
//output --> 'show post button : false'
// ----------------

var message = "hey";
var showPost = !!message; //double Not operator-----> !!message --- means, message should be non empty

console.log(`Show Edit Button: ${showButt}`);
//output --> 'show post button : true', as message is non empty

// ------------------for numbers---------------

var numOfChar = 0;
var showButt = !!numOfChar;
console.log(`Show Edit Button: ${showButt}`);
//output -----> false, as the numOfChar is 0
//          -->if numOfChar = 2; than output will be true

// ----------------- message.length-----------
var numOfChar = message.length; //will get the length for var message and set its value in numOfChar
var showButt = !!numOfChar;
console.log(`Show Edit Button: ${showButt}`);
