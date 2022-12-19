// typeof user; -- will show us the dataType used/declared in the var
var user = "john tim";
typeof user; // output --> 'string' the dataType

var designation = "test";
var con = "usa";
var city = "ss";
var loc = city + ", " + con;

console.log(loc);
//output ---> 'ss, usa'

// var fav = "To 'single' or " double""; //---> will give error as the double quote ends before double
var fav = "To 'single' or \" double\""; //will work -- known as ESCAPE Character, which treats "" as part of string sequence
console.log(fav);
//output --> `To 'single' or " double"`

// Multi-line data    --------------------
//newLine -- \n

var emp = "Name: " + user + "\n Designation:" + designation;
console.log(emp);
//output -->'Name: john tim
//           Designation: test'

// -------------Template Literals for creating multiline String -----------------
var user = "abc";
var desig = "desig";
var org = "org";
var loc = "loc";

//no need of \n or + for concating the strings or using newLine
var emp = `Name: ${user} 
Designation: ${desig}
Organization: ${org}
Location: ${loc}`;
console.log(emp);
/* output -------> 'Name: abc
                    Designation: desig
                    Organization: org
                    Location: loc' 
*/
var greeting =
  "Hi, my name is ${user} \u{1F642} and I work as ${desig} at ${org}. Here is a smiple example : 2 + 2 = ${2+2}";
console.log(greeting);
//Here is a smiple example : 2 + 2 = ${2+2}";
//will output 2 + 2 = 4

// Expression Syntex lets you run js INLINE

// Adding special characters in string, eg
// Adding tm in org var
var org = "org\u{2122}";
//output -->'org™'
