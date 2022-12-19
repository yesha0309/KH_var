// Structural data type -- ARRAY
//Array are list of values and belong to Object structural data type

var test = [1, 4, "hi", "stry"]; //Array can hold multiple type of objects together

var fruits = ["apple", "banana", "kiwi", "orange"];
console.log(fruits.length); //ouput--->4
console.log(`i don't like fruit ${fruits[1]}`);
//output------> "i don't like fruit banana"

fruits.push("Avocado"); // push at the end of array
fruits.push("test");
fruits.pop(); // removes the last item from an array
fruits[4] = "Avocad0"; // this will add the element to the the specified index.
fruits[2] = "twwt"; // will replace the existing element on that location

fruits[10] = "long range"; // will create empty elements between the numbers provided
//output---> [ 'apple', 'banana', 'twwt', 'orange', 'Avocad0', <5 empty items>, 'long range' ]

// ----------------------------NESTED ARRAYS--------------------------------------------------
var users = [
  [1, "john"],
  [2, "mike"],
  [3, "Tina"],
  [4, "Fox"],
];
console.log(users[1][1]); // calling 2 element and than 2nd element inside the nested arrays --- mike

// ------------- NESTED ARRAY OF OBJECTS--------------------------
var users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Sarah",
  },
  {
    id: 3,
    name: "Tony",
  },
  {
    id: 4,
    name: "tim",
    type: "true",
  },
];
console.log(users[2]["name"]); // --- will get Tony

// when copy an array, it is not copied or cloned. It is just refrenced.

var admin = users;
admin[1] = { id: 10, name: "Rich" };
console.log(admin);
/*output -------> 
                    [
                        { id: 1, name: 'John' },
                        { id: 10, name: 'Rich' }, ----updated/overridden
                        { id: 3, name: 'Tony' },
                        { id: 4, name: 'tim', type: 'true' }
                    ]
*/
//SHALLOW CLONE AN ARRAY

var admins = [...users]; //user.slices(); does the same
admins[1] = { id: 10, name: "Rich" };
console.log(users[1]);
console.log(admins[1]);
