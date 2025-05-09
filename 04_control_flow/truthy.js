const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email")
}

// Falsy values in JavaScript:
// false
// 0
// -0
// 0n       // BigInt zero
// ""       // Empty string
// null
// undefined
// NaN


// Truthy values in JavaScript:
// "0"
// 'false'
// true
// 1
// -5
// "hello"
// []
// {}
// function() {}
// " "      // even a string with a space is truthy!


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);



// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");