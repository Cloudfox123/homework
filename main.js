
let numberOfFilms;

function start(){
    numberOfFilms = prompt("сколько фильмов вы уже просмотрели?",'');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt("сколько фильмов вы уже просмотрели?",'');
    }

}


start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false

};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt("Один из последних просмотреных фильмов",""),
              b = prompt("На сколько оцените его?",'');
            if (a != null && b != null && a != "" && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('done');
            }else{
                console.log("error");
                i--;
            }
              
    }
}

rememberMyFilms();



function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log("Просмотрено мало фильмов")
    }else if(personalMovieDB.count >= 10 && personalMovieDB < 30){
        console.log("Вы классический зритель");
    }else if(personalMovieDB.count >= 30){
        console.log("Вы киноман");
    }else{
        console.log('error');
    }
}


detectPersonalLevel();



// console.log(personalMovieDB);

// let a = () => {console.log(2)}
// a();
// const num = 50;
// (num === 50) ? console.log("ok"): console.log("error");


// switch (num){
//     case 49:
//         console.log("error")
//     break;
//     case 50:
//         console.log("ok")
//     break;
//     default:
//         console.log("1");
//         break;

// }
// let num = 50;
// while(num < 55){
//     console.log("hello");
//     num++;
// }
// let num = 50;


// for(let i = 1; i < 8; i++){
//     console.log(num);
//     num++;
// }




