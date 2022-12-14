/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


'use strict';


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// 1
const promo = document.getElementsByClassName('promo__adv');
console.log(promo)
promo[0].remove()


// 2
const genre = document.getElementsByClassName('promo__genre');
console.log(genre);
genre[0].innerText = 'ДРАМА';


// 3
const bg = document.querySelector('.promo__bg');
console.log(bg)
bg.style.background = 'url(img/bg.jpg)';


// 4, 5
const moviesList = document.querySelector('.promo__interactive-list');
let sortedMoviesList = movieDB.movies.sort()
console.log(moviesList)

for (let i = 0; i < moviesList.children.length; i++) {
    moviesList.children[i].innerText = `${i+1}. ${sortedMoviesList[i]}`;
}
