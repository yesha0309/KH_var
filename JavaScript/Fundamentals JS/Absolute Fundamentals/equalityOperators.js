var costOfToothbrush = 10;
var printedCost = "10";
var advertisedCost = 10.5;

console.log(
  "Are both costs same? (Equality Operator)",
  costOfToothbrush == printedCost
);

console.log(
  "Are both costs same? (Strict Equality Operator)",
  costOfToothbrush === printedCost
);

console.log(
  "The advertised cost is not the same as the actual cost: ",
  advertisedCost !== costOfToothbrush
);
