// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // or let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 53435789



// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] // Array
let myObj = {
    name: "Aditya",
    age: 22,
}

 const myFunction = function(){
    console.log("Hello World")
 }

 console.log(typeof heros);

 // https://262.ecma-international.org/5.1/#sec-11.4.3



 // ++++++++++++++++++++++++++++++++++++++++++++++++++
 // ######### MEMORY
 // Stack (Primitive), Heap (Non-Primitive)

 let myYoutubename = "adityayoutuber"

 let anothername = myYoutubename
 anothername = "lucky"

 console.log(anothername);
 console.log(myYoutubename);

 let userOne = {
    email: "userjs@gmail.com",
    upi: "user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "me@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email);