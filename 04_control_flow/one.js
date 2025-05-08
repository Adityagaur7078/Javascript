// if
const isUserloggedIn = true;
const temperature = 23;

// if (temperature < 40) {
//     console.log("Temperature is less than 50");
// } else {
//     console.log("Temperature is greater than 50"); // This will execute only when the if statement is false
// }

// console.log("Temperature is greater than 50"); // This will execute in every situation, whether the if statement is true or false
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200;

// if (score > 100) {
//     let power = "fly";
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard   ) {
    console.log("Allow to buy Course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in")
}