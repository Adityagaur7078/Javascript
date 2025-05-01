// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 1, 09) //In this ( 0 for Jan ) then ( 1 for Feb ) then .....
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2025, 0, 09, 5, 3)
let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('dafault', {
    weekday: "long"
})

