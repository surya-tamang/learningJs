/*            \ [Array.map]  /              */

const names = ['layla', 'miya', 'nana', 'kagura'];

let touppercase = names.map(str => str.toUpperCase());
console.log(names);

console.log(touppercase);


/*            \ [Array.filter]  /              */


const num = [1, 2, 3, 4, 5];

let onlyOdds = num.filter((el) => el % 2 != 0);

console.log(onlyOdds);


/*            \ [Array.Reduce]  /              */

let sum = num.reduce((acc, n) => acc + n, 0);
console.log(sum);

const strings = ['apple', 'banana', 'orange'];
const longestString = strings.reduce((accumulator, currentValue) => {
  return currentValue.length > accumulator.length ? currentValue : accumulator;
  // return accumulator + currentValue;
}, '');
console.log(longestString);


/*            \ [Array.Findindex]  /              */

const findarray = num[num.findIndex((el) => el < 2)];
console.log(findarray);

/*            \ [Array.pop && push and shift && unshift]  /              */

num.pop();  // removes the last element
console.log(num);

num.push(6); // add elements in last
console.log(num);

num.shift(); // removes the first element
console.log(num);

num.unshift(0); // add element in first
console.log(num);


/*            \ [Array.splice && slice]  /              */

num.splice(num.length - 1); // removes the element
console.log(num);

names.slice();
console.log(names);


const mySelf = {
  name: "Surya Tamang",
  education: "BCA",
  sex: "Male",
  address: "Saraswatingar, Kathmandu"
}

console.table(mySelf);
console.table(names);

console.clear();
console.error("You made a error")