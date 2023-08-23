// for(let i = 1 ; i <= 10 ; i++){
//     console.log(2*i) ;
// }

// let i = 1 ;
// while(i<=10){
//     console.log(2*i) ;
//     i++ ;
// } ;

const myArr = [11,2,3,4,] ;
const myObj = {
    name : "chinmay" ,
    role : 51,
    job : "developer"
}

// for (const key of myObj){
//     console.log(key) ;
// }

for (const key in myObj) {
    console.log(myObj[key]) ;
}