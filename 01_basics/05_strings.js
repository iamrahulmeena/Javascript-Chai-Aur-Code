const name = "Rahul"
const repoCount = 50

console.log(name + repoCount + " Value"); //not a good approch go with placeholders

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // the green brackets with $ sign called place holders

const gameName = new String('I am Rahul from Jaipur Rajasthan') // just an another way to declear string

console.log(gameName[0]); //access key value pair
console.log(gameName.__proto__); //In JavaScript, every object has a prototype (__proto__) property that allows you to access the prototype of that object.

console.log(gameName.length); //print length
console.log(gameName.toUpperCase()); //print into uppercase but not in main string
console.log(gameName.charAt(2)); //print at key value
console.log(gameName.indexOf('t')); //find out word key value

const newString = gameName.substring(0, 4) //last value not count
console.log(newString);


const anotherString = gameName.slice(-4, -1) //-ve start from last
console.log(anotherString);


const newStringOne = "   Rahul    "
console.log(newStringOne);
console.log(newStringOne.trim()); //remove start and ending spaces



const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))   //can replace 

console.log(url.includes('sundar')) //find something in string that its included or not

console.log(gameName.split(' ')); //can split thr string on basis of given perametar