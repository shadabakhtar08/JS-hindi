//  singleton : constructor se banega to ye hoga 
// Object.create //isi ko kehte hain constructor method ke through

// object literals : object ko declare karne ka tarika hai
 //{} : cerly braces ka matlab hai object abhi khali hai to empty object hai

const mySym = Symbol("key1")

const JsUser = {
    name: "Shadab",
    "full name": "Shadab Akhtar",  //isko ab . dot use karke access nahi kar sakte
    [mySym]: "mykey1",
    age: 20,
    location: "Bhopal",
    email: "shadabakhtar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}    

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "akhtarshadab@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "akhtarshadab@microsoft.com"
// console.log(JsUser); 

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// to access value we generally use dot . but in some condition we have to use square bracket []