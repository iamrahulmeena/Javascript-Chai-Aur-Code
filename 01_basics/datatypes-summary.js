// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//dataTypes 2 tarah ke hote hai 
//1.Primitive datatypes                 //2.Reference (Non primitive)

//  1. Primitive datatypes:- ye 7 type ke hote hai
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt



const score = 100    
const scoreValue = 100.3  //number (js mai decimal data ke liye koi diffrent dataType nhi hota)

const isLoggedIn = false 
const outsideTemp = null 
let userEmail;

const id = Symbol('123')  
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


//2.Reference (Non primitive) =>
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Rahul",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);




// <<<<------  Return type of variables in JavaScript -------->>>>>

// 
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object