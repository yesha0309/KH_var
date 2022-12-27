// The SORT() Method, sorts and mutates the data in the original array.
//use sort() method to sort data based on a criteria that you can set
// the sort method converts elements to string and compares thier UNICode (UTF-16) code unit values

//sorts array in an accending order, default
// [11,24,63,1,0].sort() //----but this doesn't solve the problem
//So we use function()---

// [11, 24, 63, 1, 0].sort(function (a, b) {
//   return a - b;
// });
/* If the function returns -ve value, than 'a' comes before 'b' 
   If function returns +ve value, than 'b' comes before 'a'
   If function returns zero, than order of 'a' and 'b' are not changed
*/

//------------applying sorting on a numeric Array-----------------------

const numArray = [234, 65, 84, 11, 79, 0, 32];

let asc = numArray.sort((a, b) => a - b);
let des = numArray.sort((a, b) => b - a);

console.log("Asc: ", asc);
console.log("des: ", des);
// ---- output of both asc and des will be same as of the mutation of arrays using sort()
// to resolve this, we can use the SPREAD() method, that will clone the original array

const numArray2 = [234, 65, 84, 11, 79, 0, 32];

let asc2 = [...numArray].sort((a, b) => a - b);
let des2 = [...numArray].sort((a, b) => b - a); // ----------SPREAD()

console.log("Asc2: ", asc2);
console.log("des2: ", des2);
console.log("original: ", numArray2);

//------------------------- array sorting using objects---------------------------

var users = [
  {
    id: 1,
    name: "John",
    age: 34,
  },
  {
    id: 42,
    name: "Sarah",
    age: 99,
  },
  {
    id: 3,
    name: "Tony",
    age: 65,
  },
  {
    id: 4,
    name: "tim",
    type: "true",
    age: 23,
  },
];

//Display Function

// let displayList = (arr) => arr.forEach((element) => { ------------without sort, Original
//     console.log(`${element.id} | ${element.name} employee`)
// });

//-- adding sort() as an argument
let displayList = (arr, sortFn) =>
  sortFn([...arr]).forEach((element) => {
    console.log(`${element.id} | ${element.name} employee`);
  });

//creating a sorting fun to use in the fun displayList defined above
let byIdAsc = (arr) => arr.sort((a, b) => a.id - b.id);
let byAgeAsc = (arr) => arr.sort((a, b) => a.age - b.age);

//Sorting an OBJECT array, ALPHABETS arrays using a TERNIRAY operator
let byNameAsc = (arr) =>
  arr.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
/* This means,
            if(a.name > b.name){
                return -1;
            } else if(a.name > b.name){
                return 1;
            } else{
                return 0;
            }

             */

displayList(users, byIdAsc);
displayList(users, byAgeAsc);
displayList(users, byNameAsc);
//sorting this output on bases of ID or firstName, we can write the sort inside of displayList fun or outside
