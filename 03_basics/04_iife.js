// Immediately Invoked Function Expressions (IIFE)


// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// doo IIFE ko saath main likhne ke liye pehle IIFE ke last main semicolen lagate hain ';'
((name) => {
    // simple IIFE
    console.log(`DB CONNECTED Two ${name}`);
})('shadab')


// () ()
// first perenthesis wo jagah hai jahan hum function ki definition likhenge 
// secontd wala parenthesis exectution ke liye likhte hain

// Global Scope ke pollution se problem hoti hai kai baar to us global scope ke variables hain/ jo bhi wahan ke declarations hai uske pollution ko hatane ke liye IIFE ka use karte hain 