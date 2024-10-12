//  if

// if (condition) {  } 
//condition ki jagah true honi cahiye tub uske andar ka code run hoga agar false hua to andar ka code kuch nahi chalega.

// const isUserloggedIn = true
// const temperature = 41

// if (temperature === 40) {
//     console.log("less than 50");
// } else{
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");


//  < less then,
//  > greater then, 
//  <= less than equal to, 
//  >= greater than equal to, 
//  == double equal to, 
//  != not equal to, 
//  === triple equal to, 
//  !== not double equual too

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);   
// }
// console.log(`User power: ${power}`);  //ye bahar access nahi ho sakta scope ki wajah se 

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); //donot write code in this format

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const isUserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserloggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
    
}
