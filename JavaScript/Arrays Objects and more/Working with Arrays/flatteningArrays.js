/*
FLATTENED ARRAYS: are nested arrays that are flattened into a single array
we use .flat() method for it----
-by default, flat method will unpack and spread all nested arrays down to one single and common level
- for deeply nested arrays: ie, arrays inside arrays, you can pass a number as the depth you need
        to collapse down the nested structure


FLATMAP() Method : is like a map() that is followed by a flat() but is more perfomant than using map() 
                   and flat() sperately. 
                  - flatMap() only works up to 1 level deep arrays.
                  - myArray.flatMap((elem) => elem); 

*/

//--------------------flattering deeply nested arrays----------------------

let coords_1 = [
  [4, 5],
  [7, 345],
  [78, 23],
  [22, 0],
  [53, 999],
  [
    [24, 65],
    [22, 11],
  ],
  [
    [77, 89],
    [23, 54.6],
  ],
];

let flatArr = coords_1.flat(2).filter((elem) => elem % 2 === 0);
//-- 2 is the level we want to go deep in nested arrays and filtering the even elements
console.log("Just using flat(): ", flatArr);

//----the output only flatters the arrays to 1 level deep.
//---- the deep nested arrays aren't flatterned
/* OUTPUT OF:
let flatArr = coords_1.flat();
console.log("Just using flat(): ", flatArr);

    Just using flat():  [
  4,          5,
  7,          345,
  78,         23,
  22,         0,
  53,         999,
  [ 24, 65 ], [ 22, 11 ],
  [ 77, 89 ], [ 23, 54.6 ]
]
*/

//--------------------------using flatMap() to calculate the distance between 2 point in arrays------------

var coords_2 = [
  [
    [2, 0],
    [764, 223],
  ],
  [
    [52, 86],
    [923, 11],
  ],
  [
    [23, 1],
    [9293, 5242],
  ],
];
var calDist = ([x1, y1], [x2, y2]) =>
  Number(Math.hypot(x2 - x1, y2 - y1).toPrecision(3)); //fix decimal points

const shortRoute = coords_2
    .flatMap(([p1, p2]) =>calDist(p1, p2))
    .filter((element2) => element2 < 900)
    .sort((a,b) => a-b);
console.log("shortRoute: ",shortRoute);
