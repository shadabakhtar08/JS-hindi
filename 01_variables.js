const accountId = 144553
let accountEmail = "shadabakhtar2611@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  not allowed


accountEmail = "abc@c.com"
accountPassword = "32514636"
accountCity = "Delhi"

console.log(accountId);


/* 
prefer not to use var
becaus eof issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
