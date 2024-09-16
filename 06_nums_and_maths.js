const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);  //length batata hai
// console.log(balance.toFixed(2));  //point ke baad utna digit fix kar deta hai

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3));  //roundoff kar deta hai

const hundreds = 1000000
// console.log(hundreds.toLocaleString());  //by default india main hai comma (en-US) ese likhenge to fir foren ki tarah comma lagayega 3-3 ke pair main

//++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++//

// console.log(Math);
// console.log(Math.abs(-4));   //negative value ko positive main change kar deta hai
// console.log(Math.round(4.6));  //round off kardeta hai
// console.log(Math.ceil(4.2));  //highest value ko leta hai thoda sa bhi badega point ke baad value to round off karke bada value print karega
// console.log(Math.floor(4.9));  //lowest value ko leta hai
// console.log(Math.sqrt(4));  //squarroot nikal deta hai
// console.log(Math.min(4, 3, 6, 8));  
// console.log(Math.max(4, 3, 6, 8)); 

console.log(Math.random()); //0-1 ke beech main random value deti hai
console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

