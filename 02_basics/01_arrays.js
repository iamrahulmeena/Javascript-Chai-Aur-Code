// array

const myArr = [0, 1, 2, 3, 4, 5]  //arrAY define
const myHeors = ["shaktiman", "naagraj"]


const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]); //access index value


// Array methods

console.log(myArr); //print array

myArr.push(6,8)  //Adds one or more elements to the end of an array
console.log(myArr);

myArr.push(7)
console.log(myArr);

myArr.pop()   //Removes the last element from an array
console.log(myArr);

myArr.unshift(9) //Adds one or more elements to the beginning of an array
console.log(myArr);

myArr.shift() //Removes the first element from array
console.log(myArr);

console.log(myArr.includes(9)); //check that a particular value is exit or not in array
console.log(myArr.indexOf(3)); //print value on an index

const newArr = myArr.join() //array convert into string

console.log(myArr);
console.log( newArr);
console.log(typeof(newArr));



// slice, splice

console.log("A ", myArr); 

const myn1 = myArr.slice(1, 3) //just took a subarray,end value not included and main array still remain same

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //end value also include and this one cut this subarray from main array and change main array
console.log("C ", myArr);
console.log(myn2);
