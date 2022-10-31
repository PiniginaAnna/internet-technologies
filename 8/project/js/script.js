/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// Написать код для заполнения формы на странице, чтобы новый фильм добавлялся в список всех фильмов на странице. Он должен
// быть отсортирован

// Написать код для удаления фильма со страницы (и из базы данных) при нажатии "корзинки".


'use strict';


let movieDB = {
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

const createSortedMoviesList = function() {
    moviesList.innerHTML = '';
    movieDB.movies.sort();
    for (let i = 0; i < movieDB.movies.length; i++) {
        moviesList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${movieDB.movies[i]}
        <div class="delete"></div>
        </li>
        `;
    }
}
createSortedMoviesList();


const form = document.querySelector('.add'),
      input = form.querySelector('.adding__input'),
      submitButton = form.querySelector('button');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let newMovie = input.value.toUpperCase();
    if (newMovie) {
        movieDB.movies.push(newMovie);
        createSortedMoviesList();
    }
    form.reset();
})


const deleteButtons = document.querySelectorAll('.delete');

deleteButtons.forEach((deleteButton, i) => deleteButton.addEventListener('click', (event) => {
    let deletedMovieName = deleteButton.parentElement.innerText.slice(3);
    movieDB.movies.forEach((movieName, i) => {
        if (movieName.toUpperCase() == deletedMovieName) {
            movieDB.movies.splice(i, 1);
        }
    })
    deleteButton.parentElement.remove();
    deleteButton.remove();
}))
