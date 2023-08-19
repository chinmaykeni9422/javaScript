// var c = 34 ;
let a = 9 ;

if(true){
    let a = 10 ;
    const b = 20 ;
    var c = 30 ;
    console.log(`INNER ${a}`) ;
}


console.log(a) ;  // error -> not define
// console.log(b) ;  // error -> not define
console.log(c) ; // no error