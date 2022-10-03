// Автоматизировать вопросы пользователю про фильмы при помощи цикла.

// Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки, отменить ответ или ввести название фильма 
// длинее, чем 50 символов. Если это происходит - возвращаем пользователя к вопросам опять.

// При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение "Просмотрено довольно мало 
// фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - "Вы киноман". А если не подошло ни к одному 
// варианту - "Произошла ошибка".

// Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции false - выводит в консоль 
// главный объект программы personalMovieDB.

// Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос "Ваш любимый жанр под номером 
// ${номер по порядку}". Каждый ответ записывается в массив данных genres.

// Сделать так, чтобы все функции стали методами объекта personalMovieDB.

// Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он переключает 
// его в true, если true - переключает в false. Протестировать вместе с showMyDB.

// В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. Если он это 
// сделал - возвращать его к этому же вопросу. После того, как все жанры введены - вывести в консоль сообщения в таком виде: 
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"


'use strict'


let numberOfFilms = '',
    lastMovie = '',
    score = ''
let flag = true;
while (flag) {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
    lastMovie = prompt('Один из последних просмотренных фильмов?');
    score = prompt('На сколько оцените его?');
    flag = checkAnswer(numberOfFilms) || checkAnswer(lastMovie) || checkAnswer(score);
    if (flag) {
        flag = confirm('Один из введенных ответов является недопустимым! Попробуйте еще раз?')
    }
}


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}
personalMovieDB.movies[lastMovie] = score;


if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов")
}
else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель")
}
else if (personalMovieDB.count > 30) {
    console.log("Вы киноман")
}
else {
    console.log("Произошла ошибка")
}


personalMovieDB.showMyDB = showMyDB
personalMovieDB.writeYourGenres = writeYourGenres
personalMovieDB.toggleVisibleMyDB = toggleVisibleMyDB

console.log(personalMovieDB.showMyDB())

personalMovieDB.writeYourGenres()

personalMovieDB.toggleVisibleMyDB()
console.log(personalMovieDB.showMyDB())


function checkAnswer(answer) {
    if (answer === '' || answer === null || answer.length > 50) {
        return true
    }
    return false
}


function showMyDB() {
    if (personalMovieDB.private === false) {
        return personalMovieDB
    }
}


function writeYourGenres() {
    let genres = []
    for (let i = 1; i < 4; i++) {
        let genres_flag = true;
        let genre = ''
        while (genres_flag) {
            genre = prompt(`Ваш любимый жанр под номером ${i}`);
            genres_flag = checkAnswer(genre)
        }      
        genres.push(genre)
    }
    for (let i = 0; i < 3; i++) {
        console.log(`Любимый жанр ${i + 1} - это ${genres[i]}`)
    }
    return genres
}


function toggleVisibleMyDB() {
    if (personalMovieDB.private === false) {
        personalMovieDB.private = true
    }
    else if (personalMovieDB.private === true) {
        personalMovieDB.private = false
    }
}
