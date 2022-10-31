"use strict";


const box = document.querySelector('.box')

box.addEventListener('touchstart', (event) => {
    console.log('start')
    console.log(event)
    console.log(event.touches)
    console.log(event.targetTouches)
})

box.addEventListener('touchmove', (event) => {
    console.log('move')
    console.log(event.touches[0].pageX)
    console.log(event.changedTouches)
})

box.addEventListener('touchend', (event) => {
    console.log('end')
})


document.addEventListener('DOMContentLoaded', () => {
    // много кода
})
