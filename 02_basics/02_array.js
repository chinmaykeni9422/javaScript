const marvel_heros = ["thor","ironman","spiderman"] ;
const dc_heros = ["batman","superman","flash"] ;


// methods 

// marvel_heros.push(dc_heros) ;
// console.log(marvel_heros) ;
// console.log(marvel_heros[3][1]) ; // not a good practice

// concat method
let newArr = marvel_heros.concat(dc_heros) ;
// console.log(newArr) ;


// spread operator (...) (same work as concat operator)
const new_heros = [...marvel_heros, ...dc_heros] ;
// console.log(new_heros) ;


//flat() => Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const arr = [, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] ;
const A1 = arr.flat(Infinity /*depth*/) ;
const A2 = arr.flat(1/*depth*/) ;
const A3 = arr.flat(2/*depth*/) ;
// console.log(A1) ;
// console.log(A2) ;
// console.log(A3) ;


// isArray() => Returns true if the argument is an array, or false otherwise.
let A = [2,3,4,5] ;
let B = "chinmay" ;
// console.log(Array.isArray(A)) ;
// console.log(Array.isArray(B)) ;


// of() => Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
let ele1 = 1 ;
let ele2 = "chinmay" ;
let ele3 = true ;
let ele4 = [2,3,4] ;
let ele5 = {
    position : "developer" ,
    salary : 2300  
} ;
let NewA = Array.of(ele1,ele2,ele3,ele4,ele5) ;
// console.log(NewA) ;


// from() => Creates a new Array instance from an iterable or array-like object.
let str = "chinmay" ;
let str1 = "chinmay manoj keni" ;
let obj = {
    name : "hema" ,
    job : "developer" ,
    salary : 50000 
} ;

let NewArray = Array.from(str) ;
let NewArray1 = Array.from(str1) ;
let NewArray2 = Array.from(obj) ;

console.log(NewArray) ;
console.log(NewArray1) ;
console.log(NewArray2) ; // instresting case 



