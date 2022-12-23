// used in react, this structure

let restaurants = [
    {
        name: "The Bao Boat" ,
        category: "Oriental",
        city: "New York",
    },
    {
        name: "Imperial Diner",
        category: "Continental",
        city: "LA",
    },
    {
        name: "Maharaja",
        category: "Indian",
        city: "New Jersey",
    }
];

let findDetails = (name) => {
    let findPlace = restaurants.find((elem) => elem.name === name);
    return findPlace ? [findPlace.category , findPlace.city] : [];
};

let [category, city] = findDetails("The Bao Boat");
console.log(`Category: ${category}, City: ${city}`);



//------------------rest operator-------------
// to find/display remaining items of an array

let fruits = ["apple", "banana", "kiwi", "peach", "mango"];
let [pie, smoothie ,...rest] = fruits;

console.log("pie: ", pie);
console.log("smoothie: ", smoothie);
console.log("rest - remaining: ", rest); //---this outputs as array
console.log(`remaining fruits: ${rest}`); //---this outputs as string

//-------------prism-------------
'use strict';

const weapons = `1,Red Orbs,240
2,Green Orbs,194
3,Yellow Orbs,154
4,Kill Machine,80`;

const displayWeapons = function (str) {
  const breakByLine = str.split('\n');
  for (const item of breakByLine) {
    const [id, weapon, cost] = item.split(',');
    console.log(`${weapon} costs $${cost}`);
  }
};

displayWeapons(weapons);
