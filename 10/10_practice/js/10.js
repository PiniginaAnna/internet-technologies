"use strict";


const box = document.querySelector('.box'),
      wrapper = document.querySelector('.wrapper'),
      button = wrapper.querySelector('button'),
      buttons = wrapper.querySelectorAll('button')

box.style.display = 'none'

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName == 'BUTTON') {
//         event.target.nextElementSibling.classList.toggle('green')
//         event.target.classList.toggle('blue')
//         console.log(event.target.classList)
//     }
// })

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.green')) {
        event.target.nextElementSibling.classList.toggle('green')
        event.target.classList.toggle('blue')
        console.log(event.target.classList)
    }
})

// buttons[0].addEventListener('click', () => {
//     buttons[1].classList.toggle('blue')
// })

