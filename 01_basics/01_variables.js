const accountId = 16865;
let accountEmail = "shubham@gmail.com";
var accountPassword = "876649";
accountCity = "mumbai";
let accountState;

// accountId = 2  NOT ALLOWED

accountEmail="shubham3453@google.com";
accountPassword="9765873";
accountCity= "pahalgam";

console.log(accountState);  //undefined

/*
prefer to not use Var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity]);