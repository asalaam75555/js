const accountId = 14343
let accountEmail = "abd@gmail.com"
var accoutnPassword = "34kas"
accountCity = "Chennai"
let accountState;

//accountId = 2 // not allowed
accountEmail = "astu@gmail.com"
accoutnPassword = " ACC"
accountCity = "Mecca"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accoutnPassword,accountCity,accountState])
