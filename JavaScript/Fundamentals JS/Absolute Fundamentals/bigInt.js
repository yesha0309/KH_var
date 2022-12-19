console.log(Number.MAX_VALUE); //tells about the max limit value
console.log(Number.MIN_VALUE); // tells about the min limit value


console.log(Number.MAX_SAFE_INTEGER); // threshold limit
console.log(Number.MIN_SAFE_INTEGER);

var bigIntNum = BigInt(Number.MAX_SAFE_INTEGER); //BigInt(); is a constructor function
console.log(bigIntNum);
    // give ---> 9000824532423n, the n at last specifies it is a bigInt

//BigInt-- can only handle integers, it converts the fractions to whole numbers    
// We cannot mix normal number and BigInt numbers together. 
    //eg --> console.log(bigIntNum +1); 
    // will give error, as operation can only be done using other BigInt number
            //but will work on
            //---> console.log(bigIntNum +1n); 