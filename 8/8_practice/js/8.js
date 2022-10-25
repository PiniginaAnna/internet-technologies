'use strict';


const buttons = document.querySelectorAll('button');
const button = document.querySelector('button');

let counter = 0;
const changeColor = (event) => {
    event.stopPropagation()  // предотвращает всплытие
    console.log(event)
    if (counter % 2 == 0) {
        event.target.style.backgroundColor = 'red'
    }
    else {
        event.target.style.backgroundColor = 'green'
    }
    counter += 1
} 

button.addEventListener('click', changeColor)
// buttons.forEach(i => i.addEventListener('click', changeColor))

const overlay = document.querySelector('.overlay')
overlay.addEventListener('click', changeColor)

const form = document.querySelector('form'),
      input = form.querySelector('input'),
      js = document.getElementById('jsRate'),
      submitButton = form.querySelector('button');

submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    let value = input.value
    if (value) {
        js.innerText = value
    }
    form.reset()
    
})

console.log(document.body.childNodes)

const newDiv = document.querySelector('.new')
console.dir(newDiv)
newDiv.dataset['id'] = 10
