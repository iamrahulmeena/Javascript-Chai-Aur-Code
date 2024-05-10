const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //it push array into array but this array will be treat as a element,its not a right approach

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //just becouse this element have multipal value so value can be access by indexing

// const allHeros = marvel_heros.concat(dc_heros) //concat merge both arrays(in new array) ,only 2 array in one time
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros] //same as concat but can use for multiplal arrays in in one time
// console.log(all_new_heros);


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity) //when we have array under array then can use so convert it in only in singale array till give depth
// console.log(real_another_array);


console.log(Array.isArray("Hitesh")) //for check
console.log(Array.from("Hitesh"))  //to convert into an array
console.log(Array.from({name: "hitesh"})) // interesting -> gives a empty array becouse not able to understand that build an array with values or index key 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //can build an array using multipal variables (also can use for diffrent objects)