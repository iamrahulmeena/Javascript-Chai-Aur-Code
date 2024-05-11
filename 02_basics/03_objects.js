//we have 2 types to declear objects -> 1. object literals            2. constructor

// singleton     -> ye apne tarh ka ek hi object hota hai (can create using constructor)
// Object.create  //constractor methot ->esse hamsa singleton banta hai



// object literals -> esme singleton nhi banta hai.

const mySym = Symbol("key1")


const JsUser = {
    name: "Rahul",
    "full name": "Rahul Meena",
    [mySym]: "mykey1", //squre brackets rewuired for a symbol otherwise its work like a string
    age: 20,
    location: "Jaipur",
    email: "Rahul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


console.log(JsUser.email)          
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])


JsUser.email = "Rahul@chatgpt.com"  //changes will be accepted
// Object.freeze(JsUser)   //object freeze means now we cant change the info
JsUser.email = "Rahul@microsoft.com" //due to above freeze these changes will not implement
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());