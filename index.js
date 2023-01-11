// a) Create an arrow function named “mySum”.
// Your function should accept an arbitrary number of arguments using the REST operator.
// Your function should return the sum of all of its inputs.

// b) Put this function in a different module and export it. Then, in this module,
//  import the module that contains your function and call it from this module.

export const mySum = (...args) => {
    let total = 0;
    for(const arg of args){
        total += arg;
    }
    return total;
}

import {result} from "./module.js";
console.log(result);

// c) Create an array of numbers named “myArr”. Your array may have any length (try different lengths to test it).
const myArr = [1,2,3,4]

// d) Call your function passing as arguments the members of myArr array using the SPREAD operator.
//  Assign the result to a “result” variable and console log it.
function fn(x) {
    const result = x;
    console.log(result);
}
fn(myArr)

// e) Create a new array named “mySecondArr”.
//    Map the contents of your myArr array to mySecondArr array using an anonymous function that multiplies each member of myArr by 2.

const mySecondArr = myArr.map(x=>x * 2)
console.log(mySecondArr);

// f) Filter the contents of your mySecondArr using an anonymous function that console logs the numbers
//    above average number (you’ll need to find the average first).

const total = mySecondArr.reduce(function(acc, cur){
    return acc + cur;
})

const ave = Math.round(total / mySecondArr.length);
const aboveAve = mySecondArr.filter((num) => {
    if(ave < num){
        return num;
    }
})
console.log(aboveAve);

// g) Use setTimeout() function. Pass it a callback function as a parameter that console logs “Goodbye” after 3 seconds.
setTimeout(() => {
    console.log('Goodbye');
}, 3000);


// h) Create an “Employee” object that has the following key-value pairs: “name”, “email”, “department” and “startDate”.
const Employee = {
    name: 'Jack',
    email: 'jack123@gmail.com',
    department: 'sales',
    startDate: '01/15/2020'
}

// i) Destructure your object to create a new object, called “Person”, that only has name and email keys (and the corresponding values).
const Person = {
    name: Employee.name,
    email: Employee.email
}

console.log(Employee, Person);
