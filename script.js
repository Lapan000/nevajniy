'use strict'

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actorst: {},
    genres: [],
    private: false
};

function rememberMyFilms(){
    for(let i = 1; i <= 2; i++){
        const a= prompt('Один из последних просмотренных фильмов?', '');
        const b = prompt('На сколько его оцените?', '');
    
        if(a !=null && b !=null && a != '' && b != '' && a.length < 50 && b.length < 50){
            personalMovieDB.movies[a] = b;
        } else{
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count <= 10){
        console.log('prosmotrenno malo filmov');
    } else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
        console.log('vi klassniy zritel');
    } else if(personalMovieDB.count >= 30){
        console.log('vi kinoman');
    } else{
        console.log('proizoshla oshibka');
    }
}

detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB); 
    }
}

showMyDB(personalMovieDB.private)

function writeyourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`vash lubimiy film pod nomerom ${i}`);
    }
}

writeyourGenres();
