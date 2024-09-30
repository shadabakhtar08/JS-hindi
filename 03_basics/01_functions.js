function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("D");
    console.log("A");
    console.log("B");
}

// sayMyName()  
// ()  perenthesis laga diye to uska matlab hai aap usko execution kar rahe 
//jub aap function ki definition banate hai to jo bhi input lenge wo  kehlata hai parameters  👇
// function addTwoNumbers(number1, number2){
//   console.log(  number1 + number2);
// }

// function addTwoNumbers(number1, number2){

// let result = number1 + number2
// return result
//     return number1 + number2    
//   }

//jub function ko call karte hain tub jo values pass karte hain usko arguments kehte hain 👇
//   addTwoNumbers(5, 4)
// const result = addTwoNumbers(5, 4)

// console.log("Result: ",result);

//console print karne ka matlab ye nahi ki wo function wo value return bhi kar raha hai console sirf console print karta hai

function loginUserMessage(username = "sam") {

    // if (username === undefined) {
    //     console.log("please enter a username");
    //     return
    // }

// other way to write the code

    if (!username) {
        console.log("please enter a username");
        return
    }

    return `${username} just logged in`
}
// console.log(loginUserMessage("shadab"));
console.log(loginUserMessage("shadab"));  //agar koi value hi nahi denge to wo undefined output dega

