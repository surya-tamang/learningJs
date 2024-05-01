console.log('')
console.log('**********************Number methods********************')
console.log('')

let x = 123.2453;

console.log(typeof (x))

console.log(typeof (x.toString()))   // converts to string


let expo = x.toFixed(); // only decimal

console.log(expo)

let precision = x.toPrecision(1);  // precision

console.log(precision)

let valueof = x.valueOf();  // value of

console.log(valueof)

let isNumber = Number.isInteger(x) //checks if it is number

console.log(isNumber)

console.log('')
console.log('**********************String methods********************')
console.log('')

let text = "Hello i is Surya";

let replaced = text.replace('is', 'am'); // replace methods
console.log(replaced)


let textToArray = text.split(" ");  // string to array
console.log(textToArray);

let subString = text.substring(0, 7);  // similar to slice
console.log(subString);

console.log(text.toUpperCase()); // to uppercase

console.log(text.toLowerCase()); // to lowercase

console.log('')
console.log('**********************Math methods********************')
console.log('')


console.log(Math.round(4.6)) //nearest integer
console.log(Math.ceil(4.6)) //up to its nearest integer
console.log(Math.floor(4.6)) //down to its nearest integer
console.log(Math.sqrt(4.6))  // square root
console.log(Math.min(1,2,3,1,2,20,9,3))  // smallest
console.log(Math.max(1,2,3,1,2,20,9,3))  // largest


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