// DataTypes are basically divided into two types:
// Primitive Type
// non-Primitive Type

// primitive :call by value

// ismain koi bhi change karenge to uske copy main change hoga 

//  7 types: String,Number,Boolean,null,undefined,Symbol,BigInt

 const score = 100;
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 12345678956234531n


// Reference Type / Non Primitive: call by reference

// Array,Objects,Functions

// non-primitive ka return type object hi aata hai

// function ka return ko object function bolte hain

const heros = ["shaktiman","iron man","thor"];

let myObj = {
    name: "shadab",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Saiko_Gaming"

let anothername = myYoutubename;
anothername = "chaiaurcode"
                             // ismain original value change nahi hoga kyunki change uske copy main ho raha hai original ke
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne;

userTwo.email = "shadab@google.com"

console.log(userOne.email);
console.log(userTwo.email);
