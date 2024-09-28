// const tinderUser = new Object()  //single turn object hai
const tinderUser = {}   //non-single turn object hai

tinderUser.id = "123abc"
tinderUser.name = "shadab"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "shadab@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shadab",
            lastname: "akhtar",                         
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "akhtar@gmail.com"
    },
    {
        id: 1,
        email: "akhtar@gmail.com"
    },
    {
        id: 1,
        email: "akhtar@gmail.com"
    },
]

users[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //ye batata hai ki uske paas ye wala property hai ya nahi hai
