const user = {
    username: "shadab",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // 'this' current context ko refer karta hai, this jo current value hai uski baat karta hai
    console.log(this);
    
    }
}

// user.welcomeMessage()
// user.username = "ayush"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "shadab"
//     console.log(this.username);  

//this object ke andar kaam kar paa raha hai function ke andar kaam nahi kar raha this

// }

// chai()


// const chai = function(){
//     let username = "shadab"
//         console.log(this.username);  
// }

const chai = () => {
    let username = "shadab"
        console.log(this);  
}


// chai()

// () => {}   //ye arrow function ka syntax hai

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }          //curli braces {} agar likhenge/use karenge to return keyword likhna hi padega

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2) //parenthisi likhe hain to return likhna nahi padega

// const addTwo = (num1, num2) => {username: "shadab"} is tarah se hum object ko return nahi kar sakte perenthesis use karna hai padega

const addTwo = (num1, num2) => ({username: "shadab"})

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(function () {})
// myArray.forEach( () => {})
// myArray.forEach( () => ())

    