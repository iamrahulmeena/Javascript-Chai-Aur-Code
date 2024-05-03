const accountId =12345 //const type ka data change nhi kiya jaa skta
let userEmail = "Rahul@google.com" //let type data ko change kiya jaa skta hai
var accountPassword=556699 //var ko pehle use kiya jata tha but scope ke issue ki vjh se let ko introduce kiya gya so we should use let , not var
accoumtState = "rajasthan" //bina type btaye bhi variable bnaya jaa skta hai but its not a good choice
let accountDistrict  //value assign nhi kri hai toh ye undifind print krega

//signal item print krne ke liye -> console.log("variable name jisko print krna hai")

// console.log(accountId);


// accountId=558  -> NOT allowed becouse accountid const type variable hai
userEmail="rahul@gamil.com" //allowed becouse its let type 
accountPassword=123456789
accoumtState="Jammu"



//multipal variable print in table format
console.table([accountId,userEmail,accountPassword,accoumtState,accountDistrict])