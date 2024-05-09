const score = 400   //by defult it define as number
console.log(score);

const balance = new Number(100) //but we can define it specially as a number
console.log(balance);

console.log(balance.toString()); //to convert into string
console.log(balance.toString().length); //after convert we can use all the properties of string
console.log(balance.toFixed(1));  //for fix the number of digits after decimal

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); //round of start from given key value


const hundreds = 1000000

console.log(hundreds.toLocaleString()); //useing for comas(,) but by defult it follow us standard (system dependent)
console.log(hundreds.toLocaleString('en-IN')); //for use indian standards
console.log(hundreds.toLocaleString('en-US')); //for use specially us standards




// +++++++++++++ Maths +++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4)); //absolute value -> convert into +ve
console.log(Math.round(4.6)); //round-off
console.log(Math.ceil(4.2)); //always round-off above value
console.log(Math.floor(4.9)); ////always round-off lower value
console.log(Math.min(4, 3, 6, 8)); //find minimum
console.log(Math.max(4, 3, 6, 8)); //find maximum



console.log(Math.random()); //select a random value between 0 to 1 in decimals
console.log((Math.random()*10) + 1); //type of folmula can be used to gate value out of box (can say more then 0 to 1)
console.log(Math.floor(Math.random()*10) + 1);



const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //just a formula to get random values between a and b
