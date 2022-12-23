`use strict`;

const isPalindrome = (word) => {
  let wordArr = [];
  let revWord = [];
  for (const w of word) {
    wordArr.push(w);
    revWord.push(w);
  }
  return wordArr.toString() === revWord.reverse().toString();
};
console.log(isPalindrome(`civ`) ? `is a palindrome` : `not a palindrome`);

//---------------------------------------prism-------------------------------------------------------------

("use strict");

const weapons = [
  {
    item: "Red Orbs",
    cost: 240,
  },
  {
    item: "Green Orbs",
    cost: 194,
  },
  {
    item: "Yellow Orbs",
    cost: 154,
  },
  {
    item: "Kill Machine",
    cost: 80,
  },
];

const displayWeapons = (arr) => {
  for (const elem of arr) {
    console.log(`${elem.item}:`, `$${elem.cost}`);
  }
};

displayWeapons(weapons.reverse());
