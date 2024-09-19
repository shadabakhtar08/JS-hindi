const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  //Combines two or more arrays. This method returns a new array without modifying any existing arrays

//concat naya array push karta hai

// console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros]  //dot-dot lagaye hain uska matlab ek ek value individual ho gaya hai array ka

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// flat: Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(Array.isArray("Shadab"))  //yahan puch rahe ki ye array hai ya nahi -> false

console.log(Array.from("Shadab")) //String se array main convert kar diya / value ka array ban gaya

console.log(Array.from({name: "Shadab"}))  //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //of: Returns a new array from a set of elements.
