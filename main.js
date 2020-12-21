
const numberOfFilms = +prompt("сколько фильмов вы уже просмотрели?",'');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false

};




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








console.log(personalMovieDB);

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