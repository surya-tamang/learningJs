
// function calculateVolume(l, b, h) {
//     let insidevalue = "Inside";
//     console.log(insidevalue);
//     return l * b * h;
// }

// console.log(calculateVolume(5, 6, 4));
// console.log(insidevalue);

console.log(" ");
console.log("************ Calculate volume *************")
console.log(" ");

let volume = (l, b, h) => l * b * h;

console.log(volume(8, 5, 3));

let color = "Blue";
let compare = 10 < 5;
let isRed = false;
console.log(color + " " + compare);

// creating an object

console.log(" ");
console.log("************ Creating object *************")
console.log(" ");

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

console.log(" ");
console.log("************ Using switch case *************")
console.log(" ");

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

console.log(" ");
console.log("************ for loop *************")
console.log(" ");

for (let i = 1; i <= 10; i++) {
    debugger
    if (i % 2 == 0) {
        console.log(i)
    }
}

//check prime number

console.log(" ");
console.log("************ Prime number *************")
console.log(" ");

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
        if (i == 11) {
            continue;
        }
        console.log(i);
    }
}


console.log(" ");
console.log("************ For in loop *************")
console.log(" ");

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
    console.log(object[j])
}

for (let k in letters) {
    console.log(k)
}
for (let i of bca) {
    console.log(i)
}

// for (let j of object) {
//     console.log(j)
// }

for (let k of letters) {
    console.log(k)
}


// while loop
console.log(" ");
console.log("************ while loop *************")
console.log(" ");

let wh = 0;

while (wh < 1) {
    console.log("while");
    console.log(x);
    wh++;
}


// do-while loop

do {
    console.log("Do whiile")
    console.log(wh);
    wh++;
} while (wh < 1)




// anonymous function

var where = function () {
    console.log("i'm here");
}

where();


// rest parameter 
console.log(" ");
console.log("************ rest parameters *************")
console.log(" ");

function fun(...c) {
    // console.log(a, 'and', b);
    for (let i of c) {
        console.log(i);
    }
}

fun('Stark', 'Rogers', 'surya', 'Banner', 'Barton', 'Roamnoff', 'hello')


// self executing function

console.log(" ");
console.log("************ self executing function *************")
console.log(" ");


(function () {
    console.log("3,2,1,...BOOMMMMMM");
})();

// nested function

function first(a) {
    function second(b) {
        return a + b;
    }

    return second;
}

console.log(first(5)(6));



// recursive function
console.log(" ");
console.log("************ Recursive function *************")
console.log(" ");

let onetoten = (n) => {
    if (n != 11) {
        console.log(n);
        n++;
        return onetoten(n);

    } else {

        return false;
    }
}

onetoten(11);

function checkEven(num) {
    if (num === 0) {
        console.log('It is even');
    } else if (num === 1) {
        console.log('It is odd')
    } else {
        return checkEven(num - 2);
    }

}

checkEven(11);

console.log(" ");
console.log("************ Javascript class *************")
console.log(" ");

class Bca {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    fullInfo() {
        console.log("my name is ", this.name)
        console.log("my age is ", this.age)
    }

    static getName() {
        console.log('his name is ', this.name)
    }
}

const student = new Bca("surya", 20);

// student.birthday();

//array

console.log(" ");
console.log("************ Array and methods *************")
console.log(" ");

const arr = [1, 2, 3, 4, 5, 6];
let sumArray = 0;
console.log("the total array element is " + arr.length);

arr.forEach((i) => sumArray += i);
console.log(sumArray);

// let isInclude = arr.includes(4);
const anotherArr = ["hello", "world", "java", "javascript"]
console.log(anotherArr.includes("world", 1))
anotherArr.push("surya")
console.log(anotherArr);

// anotherArr.pop();
// console.log(anotherArr);

console.log(anotherArr.slice(1, 3));
console.log(anotherArr.splice(2, 1, "bibek"));
console.log(anotherArr);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);

console.log(fruit);

fruits.shift();

console.log(fruits);

fruits.unshift("Lemon");
console.log(fruits);

delete fruits[0];
console.log(fruits);


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);

console.log(myChildren);

console.log(Array.isArray(num));


// student.getName();

Bca.getName();

// dom [document object model]






















