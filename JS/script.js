'use strict';

const personalMovieDB = {
    count:0,
    movies:{},
    actors:{},
    genres:[],
    private:false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
        }
    },
    rememberMyFilms: () => {
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
    },
    detectPersonalLvl: () => {
        if(personalMovieDB.count < 10) {
            console.log('Посмотрели мало фильмов');
        } else if(personalMovieDB.count >= 10 && personalMovieDB < 30) {
            console.log('Вы классический зритель');
        } else if(personalMovieDB >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Error');
        }
    },
    showMyDB: (hidden) => {
        if(!hidden) console.log(personalMovieDB);
    },
    toggleVisibleMyDB: () => {
        if(personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            let genres = prompt('Ваш любимый жанр под номером ${i}');
            if( genres == null && genres === '') {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
            }
    
            if(i == 3) {
                personalMovieDB.genres.forEach((item, i) => {
                    console.log('Любимый жанр ${i + 1} - ${item}');
                });
            }
        }
    }
    

};
