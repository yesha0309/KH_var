/* The MAP Method 
    This is an Array prototype method that ingests an array, executes a fun for every element in that 
    array, and returns the newly created array
    eg:
        [1,2,3,4,5],.map((elem)=> elem*15);
    output   
        [15,30,45,60,75]

MAP Method-- returns a new array and does not modify the original one
*/

"use strict";

const citizens = [
  {
    id: 1,
    name: "John Smith",
    age: 65,
  },
  {
    id: 2,
    name: "Roger McShane",
    age: 68,
  },
  {
    id: 3,
    name: "Dolly McShane",
    age: 55,
  },
  {
    id: 4,
    name: "Joan Mockery",
    age: 61,
  },
];

const seniorCitizens = citizens.map(function (person) {
  person.isSeniorCitizen = person.age >= 60;
  return person;
});

console.log(seniorCitizens);
