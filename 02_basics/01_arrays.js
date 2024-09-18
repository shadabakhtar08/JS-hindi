// array

const myArr = [0, 1, 2, 3, 4, 5]
// Array: storing a collection of multiple items under a single variable name
const myHeros = ["shadab", "Ayush"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

// pehla index 0 se start hota hai

// shallow copy:A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.

//Deep copy: A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.

// Array Methods

// myArr.push(6)
// myArr.push(7)  //existing array main add kardega 
// myArr.pop()   //last value ko remove kar dega

// myArr.unshift(9)  //first main push kar deta hai given array main
// myArr.shift()   //shift se starting wala hat jata hai

// console.log(myArr.includes(9));  //ye true/false main answer deta hai ki wo value hai ya nahi array main
// console.log(myArr.indexOf(3));  //kis index pe hai batata hai

// const newArr = myArr.join()  //.join(): array ko bind bhi kar diya hai  and convert bhi kar diya hai string main

// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //last range include nahi hua hai

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)   //original value ko manupulate karta hai
console.log("C ", myArr);
console.log(myn2);

