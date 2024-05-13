// const tinderUser = new Object()  //both are same but this one is singleton objects.
const tinderUser = {}  //both are same but this one is non-singleton objects.

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


console.log(tinderUser);


const regularUser = {
    email: "sam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sammy",
            lastname: "choudhary"
        }
    }
}



console.log(regularUser.fullname.userfullname.firstname);