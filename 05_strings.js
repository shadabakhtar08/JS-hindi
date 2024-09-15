const name = "shadab"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// string interpotation

const gameName = new String('shadab-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "     shadab     "
console.log(newStringOne);
console.log(newStringOne.trim());

// .trim() unwanted spaceing ko hata deta hai

const url = "https://shadab.com/shadab%20akhtar"

console.log(url.replace('%20', '-'));

console.log(url.includes('arqum'));

console.log(gameName.split('-'));
