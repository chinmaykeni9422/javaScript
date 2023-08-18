// two mwthod of creating object using constructor and literals 

// singletone
// swhen we create object using literals singleton are not created
// swhen we create object using constructor singleton are created


// object literals => method to declaire object

const mySym = Symbol("key1")

const obj = {
    name : "chinmay",
    "full name" : "chinmay manoj keni",
    age : 22,
    location : "dandi",
    email : "chinmaykeni@google.com" ,
    isLoggedIn : false,
    [mySym] : "mykey1"  
} ;


// how to acces the abject element ;
//1)
// console.log(obj.name) ; // but not the good practice

//2)
// console.log(obj["name"]) ; // good practice 

// console.log(obj.full name) ; // error
// console.log(obj["full name"]) ; // no error

// console.log(obj[mySym]) ;
// console.log(typeof obj[mySym]) ;



// freeze() => The Object.freeze() static method freezes an object. Freezing an object prevents
//extensions and makes existing properties non-writable and non-configurable. A frozen
//object can no longer be changed
const objAnother = {
    name : "chinmay",
    age : 22,
    location : "dandi",
    email : "chinmaykeni@google.com"
} ;
Object.freeze(objAnother) ;
objAnother["name"] = "utkarsh" ;
// console.log(objAnother) ;



// adding a function of name "greetings" in object 
const obj2 = {
    name : "chinmay",
    age : 22,
    location : "dandi",
    email : "chinmaykeni@google.com"
} ;

obj2.greetings = function(){
    console.log("hellow JS user") ;
}

// console.log(obj2.greetings()) ;
// console.log(obj2.greetings) ; // returns [Function (anonymous)]

//aading second function 
obj2.nameRef = function(){
    console.log(`hellow JS user ${this.name}`) ;
}

console.log(obj2.nameRef()) ;
console.log(obj2.nameRef) ;