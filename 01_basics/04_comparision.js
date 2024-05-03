console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);   //the answer will be true but try to take smae type variables for comparision always
console.log("02" > 1);  //the answer will be true but try to take smae type variables for comparision always

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0);  //this will true due to inner working of comparision

// try to avoid these type (null or undefined) comparisions

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);



// ===  => strict check (it is also check data type with the value)

console.log("2" == 2);  // true => here 2 will convert and 2=2 will become true
console.log("2" === 2); // false => it also check data type eith the value so string != integar, and thats why it give false


