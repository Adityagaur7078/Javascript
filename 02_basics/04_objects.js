// const tinderUser = new Object()  // This is Singleton Object
const tinderUser = {} // This is Non-Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Anuj Dhyani"
tinderUser.email = "anujdhyani@tinder.com"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "anujdhyani@tinder.com",
    fullname: {
        userfullname: {
            firstname: "Aditya",
            lastname: "Gaur"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor/

const {courseInstructor: Instructor} = course

console.log(Instructor);


// {
//     "name": "Aditya",
//     "coursename": "JS in Hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]