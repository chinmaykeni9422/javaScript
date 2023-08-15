// Array 
// JavaScript arrays are resizable and can contain a mix of different data types.

//JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
 
//shallow copies
// A shallow copy of an object is a copy whose properties share the same references .

// Deep copy
// A deep copy of an object is a copy whose properties do not share the same references

const myArr = [0,2,3,4,4] ;
const myArr2 = new Array(2,3,4,5) ; // another way 

// Array Method

// push 
myArr.push(6) ;
myArr.push("chinmay") ;
// console.log(myArr) ;

// pop // remove last value
myArr.pop() ;
// console.log(myArr) ;

//unshifit // insert value from front
myArr.unshift(0) ;
myArr.unshift("chinmay") ;
// console.log(myArr) ;

// shift // remove element from front
myArr.shift() ;
// console.log(myArr) ;


// includes() // check whether given value is present or not , return boleean value
let result = myArr.includes(4) ;
// console.log(result) ;

// indexof() ; // return index of element
let n = myArr.indexOf(2) ;
// console.log(n) ;

// join() -> join method is used to convert array into string ;
let conArr = myArr.join() ;
// console.log(conArr) ;
// console.log(myArr) ;
// console.log(typeof(conArr)) ;
// console.log(typeof(myArr)) ;


// slice and splice
// slice
const arr = [1,2,3,4,5,6,7] ;
const newA1 = arr.slice(1,3) ;

console.log("A" , arr) ;
console.log(newA1) ;

// splice

const newA2 = arr.splice(1,3) ;

console.log("B" , arr) ;
console.log(newA2) ;
