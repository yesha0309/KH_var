// Get all list items
var listItems = document.getElementsByClassName("list-group-item");

// Get the sort button
var sortButton = document.querySelector("button");

// Add an event listener to the sort button
sortButton.addEventListener("click", function () {
  // Extract the values and store them in an array
  var values = [];
  for (var i = 0; i < listItems.length; i++) {
    var value = parseFloat(listItems[i].textContent.split("$")[1]); // parseFloat - retuns first number, or NaN
    values.push(value);
  }

  // Sort the values in ascending order
  values.sort(function (a, b) {
    return a - b;
  });

  // Update the HTML list to reflect the sorted values
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].textContent = "Javascript course $" + values[i];
  }
});

// // Get all list items
// var listItems = document.getElementsByClassName("list-group-item");

// // Extract the values and store them in an array
// var values = [];
// for (var i = 0; i < listItems.length; i++) {
//   var value = parseFloat(listItems[i].textContent.split("$")[1]);
//   values.push(value);
// }

// // Sort the values in ascending order
// values.sort(function(a, b) {
//   return a - b;
// });

// // Update the HTML list to reflect the sorted values
// for (var i = 0; i < listItems.length; i++) {
//   listItems[i].textContent = "$" + values[i];
// }
