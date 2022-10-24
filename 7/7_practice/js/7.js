'use strict';


const body = document.querySelector('body')
body.insertAdjacentHTML('beforebegin', '<p>Inserted</p>')

const buttons = document.querySelectorAll('button');

const button = document.querySelector('button');

// button.onclick = function() {
//     alert('one clicked')
// }
// button.onclick = function() {
//     alert('twice clicked')
// }

// button.addEventListener('click', (event) => {
//     alert('again clicked')
//     console.log(event)
//     console.log(event.target)
//     event.target.style.backgroundColor = 'red'
// })

// buttons.forEach(i => {
//     i.addEventListener('click', (event) => {
//         // alert('again twice clicked')
//         event.target.style.backgroundColor = 'red'
//     })
// })

let counter = 0;
const changeColor = (event) => {
    if (counter % 2 == 0) {
        event.target.style.backgroundColor = 'red'
    }
    else {
        event.target.style.backgroundColor = 'green'
    }
    counter += 1
} 

button.addEventListener('click', changeColor)
// button.removeEventListener('click', changeColor)

buttons.forEach(i => i.addEventListener('click', changeColor))



