// Creating a function in JavaScript 

let interest = calculateSimpleInterest(5000, 5, 3);
let forfunction = myFunction(2, 3);
document.write(forfunction);
document.write("Simple Interest:", interest);

function myFunction(a, b) {
    return a + b;
}

function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

// creating an object 

const person = {
    firstName : "surya",
    lastName : "tamang",
    age : 20,

    fullName : function(){
        return "My name is " + this.firstName + " " + this.lastName;
    }
}


document.write(person.fullName())