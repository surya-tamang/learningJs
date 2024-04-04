// Creating a function in JavaScript 

let interest = calculateSimpleInterest(5000, 5, 3);
let forfunction = myFunction(2, 3);
console.log(forfunction);
console.log("Simple Interest:", interest);

function myFunction(a, b) {
    return a + b;
}

function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

// creating an object 

const person = {
    firstName: "surya",
    lastName: "tamang",
    age: 20,

    fullName: function () {
        return "My name is " + this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName())


// basic string methods

let text = "Text for basic string methods";

let textLength = text.length;

let letter = text[7];

let string = text.substring(0, 14); // subString (start , end)


console.log(text); // prints the string stored in variable text

console.log(textLength); // prints the total number of letters of text variable
console.log(letter); // prints the letter
console.log(string) 