"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
};

const a = prompt('Оддие из последних фильмов',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Оддие из последних фильмов',''),
      d = prompt('На сколько оцените его?','');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);