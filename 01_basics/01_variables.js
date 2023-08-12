const accountId = 122377 ;
let accountEmail = "chinmay00@gmail.com" ;
var accountPassword = "112345" ;
let accountState ;
accountCity = "Boisar" ;

// accountId = 2 ; not allowed
console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

accountEmail = "chinmay243@gmail.com" ;
accountPassword = "87765" ;
accountCity = "mumbai" ;

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);

