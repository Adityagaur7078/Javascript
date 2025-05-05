// var c = 30
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Aditya"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);  // Give error because website is not declared outside the funtion 'two' . It's declared inside function 'two' .
    
    two()


}

// one()

if (true) {
    const username = "Aditya"
    if (username === "Aditya") {
        const website = "Youtube"
        // console.log(username + website); 
    }
}





+++++++++++++++++++ Intresting +++++++++++++++++++



console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}