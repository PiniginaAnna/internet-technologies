'use strict';

console.log({} == true)
console.log([] + true)
console.log([] + false - null + true)
console.log([] + 2 + 3)


function createCounter() {
    let counter = 0;
    const myCounter = function() {
        counter++;
        return counter;
    }
    return myCounter;
}

let counter = createCounter();
let c1 = counter();
let c2 = counter();
let c3 = counter();

console.log(c1, c2, c3)

