/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const advertising = document.querySelector('.promo__adv'),
        advertisingDelete = advertising.querySelectorAll('img'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addMovie = addForm.querySelector('.adding__input').value,
        likeFilm = addForm.querySelector('[type = "checkbox"]');

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newFilm  = addMovie,
              checkFilm = likeFilm.checked;
        if(newFilm.lenght > 21) newFilm.slice(0, 21) + '...';
        if(checkFilm) console.log('adding favorite movie');

        movieDB.movies.push(newFilm);

        sortArr(movieDB.movies);

        createMovieList(movieDB.movies, movieList);

        e.target.reset();

    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        document.querySelector('.promo__genre').textContent = 'ДРАМА';
        document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };
      
    function createMovieList(films, parent) {
        parent.innerHTML = '';
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });
    }

    createMovieList(movieDB.movies, movieList);
    deleteAdv(advertisingDelete);
    sortArr(movieDB.movies);
    makeChanges();

});
