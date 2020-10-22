'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
    }
}

//start();

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Оддие из последних фильмов',''),
          b = prompt('На сколько оцените его?','');
        
        if( a != null && b != null && a != '' && b != '' && a.length > 50){
            personalMovieDB.movies[a] = b;
            console.log('Done!');
        } else{
            console.log('Error');
            i--;
        }
     
    }
}

//rememberMyFilms();



function detectPersonalLvl() {
    if(personalMovieDB.count < 10) {
        console.log('Посмотрели мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log('Вы классический зритель');
    } else if(personalMovieDB >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Error');
    }
}

//detectPersonalLvl();

function showMyDB(hidden) {
    if(!hidden) console.log(personalMovieDB);
}

showMyDB(personalMovieDB.private);

function writeYourGenres(params) {
    for (let i = 1; i <= 3; i++) {
        const genres = prompt('Ваш любимый жанр под номером ${i}');
        if( genres != null && genres != '') {
            personalMovieDB.genres[i - 1] = genres;
        } else {
            i--;
        }
    }
}

console.log(personalMovieDB);