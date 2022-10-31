"use strict";


let a = 5,
    b = 8;

console.log(`${a} dfhsjkf ${b}`)


let str = '   jkljkl    ';
console.log(str.trim().length)


let str2 = '12hjhj34'
console.log(parseInt(str2))


function first (arg, callback) {
    console.log(`data ${arg}`);
    // setTimeout(console.log(`data ${arg}`), 500);
    callback();
}

function second() {
    console.log('data processed')
}

first('db', second);
