// Dates
// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
let myDate = new Date()
console.log(myDate)       //Output : 2024-05-09T23:40:54.103Z
// We can use various methods to convert this date into more readable value.

console.log(myDate.toString())   //Output : Fri May 10 2024 05:10:54 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) //Output : Fri May 10 2024
console.log(myDate.toLocaleString()) // Output : 10/5/2024, 5:10:54 am
console.log(typeof myDate);     //object

//to creat a specific date
//months starts from 0
let myCreatedDate_a = new Date(2023, 0, 23)
let myCreatedDate_b = new Date(2023, 0, 23, 5, 3)
let myCreatedDate_c = new Date("2023-01-14")
let myCreatedDate_d = new Date("01-14-2023")
console.log(myCreatedDate_a.toLocaleString());
console.log(myCreatedDate_b.toLocaleString());
console.log(myCreatedDate_c.toLocaleString());
console.log(myCreatedDate_d.toLocaleString());


let myTimeStamp = Date.now() //miliseconds from 1st jan 1970
console.log(myTimeStamp);

console.log(myCreatedDate_a.getTime());//miliseconds from a date 
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

console.log(myDate.toLocaleDateString()) //Output : 10/5/2024
console.log(myDate.toLocaleTimeString()) // Output : 5:10:54 am
console.log(myDate.toTimeString()) // Output : 05:10:54 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()) // Output : 2024-05-09T23:40:54.103Z
console.log(myDate.toJSON()) //Output : 2024-05-09T23:40:54.103Z