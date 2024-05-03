let score = "Rahul"

console.log(typeof score);   //both are right
console.log(typeof(score)); //both are right

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "52" => 52
// "45abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Rahul"
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


let someNumber = 52

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);  //work as 2 ki power 3
console.log(2/3);
console.log(2%3);


let str1 = "Hello"
let str2 = " Rahul"

let str3 = str1 + str2
console.log(str3);


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); //agar conversion ke time string pehle hai to rest sbko as string treat kiya jata hai aur agar string baad mai hai toh pehle ke sabhi ka conversion ho jayega aur usko same as string rakha jayega
console.log(1 + "2" + 2); 



console.log( 3 + 4 * 5 % 3);   //use bodmas but not good to write

console.log(+true); //true  //not good to write in code
console.log(+true); //1     //not good to write in code
console.log(+""); //0       //not good to write in code

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 //not good to write in code


let gameCounter = 100
++gameCounter;  //increment by 1
console.log(gameCounter); //will be 101


++gameCounter; //prefix => value change first and then use 
gameCounter++;//postfix => first use the variable for eqution and then increment





