numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

lastMovie = prompt('Один из последних просмотренных фильмов?');
score = prompt('На сколько оцените его?');
personalMovieDB.movies[lastMovie] = score;

console.log(personalMovieDB)
