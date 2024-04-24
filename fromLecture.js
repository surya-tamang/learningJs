
// function calculateVolume(l, b, h) {
//     let insidevalue = "Inside";
//     console.log(insidevalue);
//     return l * b * h;
// }

// console.log(calculateVolume(5, 6, 4));
// console.log(insidevalue);

let volume = (l, b, h) => l * b * h;

console.log(volume(8, 5, 3));

let color = "Blue";
let compare = 10 < 5;
let isRed = false;
console.log(color + " " + compare);

// creating an object

const person = {
    fname: "Surya",
    lname: "Tamang"
}

let fullName = person.fname + " " + person.lname;

console.log(fullName);

console.log('operator: ', "0" == 0);
console.log('operator: ', "0" === 0);

let x = true;
console.log('negotiation of x ', !x);

if (typeof (x) == 'boolean') {
    console.log('x is boolean')
} else {
    console.log('not declared')
}



// odd or even

let num = 21;

if (num % 2 == 0) {
    console.log('it is even');
} else {
    console.log('it is odd');
}

let t = 1;
console.log('Post increment', t++);
console.log('After Post increment', t);

let s = 1;
console.log('Pre increment', ++s);
console.log('after Pre increment', s);

// pass by value pass by refernce

let a = 10;
let b = a;
a = 30;

console.log(a);
console.log(b);

let obj1 = {
    value: 10
}

let obj2 = obj1;

obj2.value = 30;

console.log(obj1.value);
console.log(obj2.value);


// switch case statement

let switchNum = 2;
s
switch (switchNum) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;

    default:
        console.log("This is default");

}

console.log(day);

//for loop

for (let i = 1; i <= 10; i++) {
    debugger
    if (i % 2 == 0) {
        console.log(i)
    }
}

//check prime number

let k = 2;

let isPrime = true;
for (let i = 2; i < k; i++) {

    if (k % i == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log('prime ' + k)
} else {
    console.log('not prime ' + k)
}


// print prime number

let range = 50;

for (let i = 2; i <= range; i++) {

    let isPrime = true;

    for (let j = 2; j <= i - 1; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}


let bca = [4, 8, 9];

const object = {
    fname: 'john',
    lname: 'cena',
    age: 20
}

let letters = "string"

for (let i in bca) {
    console.log(i)
}

for (let j in object) {
    console.log(j)
}

for (let k in letters) {
    console.log(k)
}
for (let i of bca) {
    console.log(i)
}

for (let j of object) {
    console.log(j)
}

for (let k of letters) {
    console.log(k)
}