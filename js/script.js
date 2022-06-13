/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
// console.log(numberOfFilms);
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };
// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько оцените его?',''),
//       c = prompt('Один из последних просмотренных фильмов?',''),
//       d = prompt('На сколько оцените его?','');
//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}
start();
console.log(numberOfFilms);

function detectPersonalLevel(){
    if(numberOfFilms < 10){
        console.log('so little');
    }else if(numberOfFilms >= 10 && numberOfFilms <= 30){
        console.log('so good');
    }else if ( numberOfFilms > 30){
        console.log('excelent');
    } else {console.log('error');}
}
// detectPersonalLevel();
// ////////////////////////////////////////////////////////////////
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms(){
    for(let i = 0; i < 2; i ++){
        let a = prompt('Один из последних просмотренных фильмов?','');
        let b = prompt('На сколько оцените его?','');
        
        if(a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
        } else{
            i--;
            }
    }
}
function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
    
}
writeYourGenres();

// rememberMyFilms();
showMyDB(personalMovieDB.privat);






















// let i = 0;
// while(i < 2){
//     let a = prompt('Один из последних просмотренных фильмов?','');
//     let b = prompt('На сколько оцените его?','');
    
//     if(a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//     } else{
//         i--;
//         }
//         i++
// }

// do{
//     let a = prompt('Один из последних просмотренных фильмов?','');
//     let b = prompt('На сколько оцените его?','');
    
//     if(a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//     } else{
//         i--;
//         }
//         i++;
// }while(i < 2);
// console.log(personalMovieDB);