//SLICE(), used to chop the arrays
/* 
    numArray = [1,2,6,8,0]
    numArray.slice(2); //2 is the index number
    output --- [6,8,0] -- shallow clone, new array

    Start and end number, which will create a clone of the with the start number and one less than the end number
    the start item is inluced and the last index is not included
    [1,6,8,3,8] 
    numArray.slice(1,3) // index number
    output --- [6,8]
*/

//-----------------------SPLICE()-------------------------------------
// splice() method a mutator method that can remove elements from anywhere in the array and 
        //optionally replace or insert new elements
/*
[11,45,87,32, 4].splice(1,2 , 9000)
output --- [11, 9000, 32,4]

splice() takes 2 parameters: (1, 2, 9000) 
                            '1'- start 
                            '2' - Number of items to remove 
                            '9000'-optional elements to insert

If no elements are to be removed, then the new items are instered at the given location, 
            pushing existing elements further down into the array                            
 */                    

//---------------------prism--------------------------------
'use strict';

const hollywoodDirectors = [
  'Martin Scorsese',
  'David Dhawan',
  'Steven Spielberg',
  'Christopher Nolan',
  'Quentin Tarantino',
  'James Cameron',
];
const removeAndInsert = (arr, elem, newElem) => {
    const findElem = arr.findIndex((e) => e === elem);
    const tempArray = [...arr];
    tempArray.splice(findElem, 1, newElem);
    return tempArray;
  };
  const topThree = (arr) => arr.slice(0, 3);
  const revisedList = removeAndInsert(
    hollywoodDirectors,
    'David Dhawan',
    'David Lean'
  );
  const directors = topThree(revisedList);
console.log(`Hollywood Masterclass featuring ${directors}`);
