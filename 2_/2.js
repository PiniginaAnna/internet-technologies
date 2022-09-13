"use strict";

console.log(1 + 2 ** 2);

console.log('a' + 54);

console.log(5 / 0);


const checkAge = confirm('18?');
console.log(checkAge);

const age = prompt('Tell me your age', '18');
console.log(age);


const num = 50;
if (num < 50) {
    console.log('malo')
}
else if (num >= 50) {
    console.log('good')
}
else {
    console.log('error')
};

num < 50 ? console.log('malo') : num >= 50 ? console.log('good') : console.log('error');

switch (num) {
    case 50:
        console.log('good')
        break;
    case 20:
        console.log('malo')
        break;
    default:
        break;
};


let number = 0;
while (number < 5) {
    number++;
    console.log(number);
};

do {
    console.log(number);
    number++;
}
while (number < 7);


for (let i = 1; i < 10; i++) {
    console.log(i);
    number++;
}


let list = [];
list.push(1, 'ghjgj', 3);
list[54] = '54';
list.unshift(9);

list.shift();
list.pop();

console.log(list)





