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

let text = "Text for basic string methods basic input";

let textLength = text.length;

let valid = text.includes("gmail", "yahoo", "hotmail");
console.log(valid);

let letter = text[7];

let string = text.substring(0, (text.length - 2)); // subString (start , end)


console.log(text); // prints the string stored in variable text

console.log(textLength); // prints the total number of letters of text variable
console.log(letter); // prints the letter
console.log(string)

let stringmatch = text.matchAll(/basic/gi);

console.log(Array.from(stringmatch));
let carName = "ford";

let carintro = `i hava a car named ${carName}`;

console.log(carintro);



//  creating and array 

const employess = ["ram", "shyam", "hari"];
console.log(employess[2]);

const cars = new Array("ford", "volvo", "toyoto");
cars.push("ferrari");
console.log(cars);

let list = "<ul>";
cars.forEach((value) => {
    list += "<li>" + value + "</li>";
})

list += "</ul>";

console.log(list);

// let arrayToString = cars.toString();
// console.log(arrayToString);



// javascript get date methods

let date = new Date();
let customDate = new Date();

customDate.setFullYear(2015, 1, 25); // own date



console.log(customDate);

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();

let fullyear = [year, month, day];

console.log(fullyear.toString());

if (date > customDate) {
    console.log("you are born");
} else {
    console.log("You are not born yet");
}

