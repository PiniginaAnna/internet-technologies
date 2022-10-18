'use strict';


const box = document.getElementById('box');
console.log(box);

const table = document.getElementsByTagName('table');
console.log(table);

const buttons = document.querySelectorAll('button');
console.log(buttons);

const button = document.querySelector('button');
console.log(button);

button.style.backgroundColor = 'blue';

// for (let i = 0; i < bu) {
//     i.style.backgroundColor = 'blue';
// }

buttons.forEach(i => {i.style.backgroundColor = 'green';})

const js = document.getElementById('jsRate');
js.innerText = '***'

button.remove()

const body = document.querySelector('body')
console.log(body)
const div = document.createElement('div')
div.backgroundColor = 'blue'
div.classList.add('box')
body.append(div)


