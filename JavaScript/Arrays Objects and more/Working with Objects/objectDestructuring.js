//var book = {// we can use destructuring opertor on this
var { title, publisher, author, cost } = {
  id: 1,
  title: "Frankenstine",
  author: [
    {
      authorCode: 210,
      name: "Steven D. Levitt",
    },
    {
      authorCode: 231,
      name: "Tim James",
    },
  ],
  publisher: "Harper Torch",
  isbn10: "0-06-123424-3",
  cost: 7.99,
};

// console.log(book.author);
// console.log(book["title"]);

console.log(author); // will give same output as above
console.log(title);
