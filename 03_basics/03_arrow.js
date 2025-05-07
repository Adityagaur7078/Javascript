const user = {
    username: "Aditya",
    price: 999,

    WelcomeMessage: function() {
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
    }

}

// user.WelcomeMessage()
// user.username = "Anuj"
// user.WelcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Aditya"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Aditya"
//     console.log(this.username);
// }

// chai()


const chai = () => {
    let username = "Aditya"
    console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Aditya"})

console.log(addTwo(9, 23));
