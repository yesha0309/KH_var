// reduce() : adds the total of all elements in an array

const numArray = [1,2,3,4,5];
let reducedNum = numArray.reduce((a ,b)=> a +b ,0);
//here a is kind of a bucket, where we store the total computed result
// b is the current value from the array it is taking
// zero at the end is the initial value
console.log(reducedNum);