`use strict`;

//------------------------------split()-------------------------------------------------

const str = "house no 98, Philip Stree, Mangrove Drive, Timberville - 800123";
console.log("split: ", str.split(", "));

//------------------------------join()-------------------------------------------------
const greet = ["hello", "How are you?", "Its nice to meet you"];
console.log("join: ", greet.join(" "));

//------------------------------Palindrome using arrow fun and split() and join()-------------------------------------------------
const isPalindrome = (word) => word.split("").reverse().join("") === word;

console.log(
  "isPalindrome: ",
  isPalindrome(`hello`) ? `is a isPalindrome` : `Not a Palindrome`
);

//----------------------------convert csv file to array------------------------------------------------

const users = ` Lorem ipsum dolor sit amet consectetur adipisicing elit, 1,  Evenietassumenda, minus reiciendis voluptates, 2,  iusto dolorum quibusdam, voluptasminima harum aliquid expedita nostrum, 3, consectetur corporis veritatistotam illo architecto facere, 4,  perferendis rerum provident nobis quia.Architecto dignissimos expedita voluptates cum eligendi iure, culpaunde, 5,  quo sit magnam illo soluta quas quae? `;

const csvToArray = (csv) => {
  let output = [];
  for (const row of csv.split(`\n`)) {
    output.push(row.split(", "));
  }
  return output;
};
//console.log("csv to array: ", csvToArray(users));
console.table(csvToArray(users));

//--------------------------------prism-------------------------------------
'use strict';

const weapons = `1,Red Orbs,240
2,Green Orbs,194
3,Yellow Orbs,154
4,Kill Machine,80`;

const displayWeapons = function (str) {
    const breakByLine = str.split('\n');
    for (const item of breakByLine) {
      let elements = item.split(',');
      console.log(`${elements[0]}. ${elements[1]} -- $${elements[2]}`);
    }
  };
displayWeapons(weapons);
