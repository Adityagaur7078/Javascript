const name = "Aditya"
const repoCount = 10

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String(`aditya-gaur`)

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, -4)
console.log(anotherString);

const newStringOne = "     Aditya     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aditya.com/aditya%100gaur"

console.log(url.replace('%100', '-'))

console.log(url.includes('aditya'))