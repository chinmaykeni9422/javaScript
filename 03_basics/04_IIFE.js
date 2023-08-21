// immediatelt invoke function expression
//global scope ke variables se hone vale pollution ko avoid karne ke liye hum IIFE use karte he .

//function defination,function execution
//                 (),()


// normal functon declairtion and IIFE
// named IFEE
// (function chai(){
//     console.log("BD CONNECTED") ;
// })() ;


// arrow functon declairtion and IIFE
// unnamed IIFE
// ( () => {
//     console.log("BD CONNECTED TWO") ;
// } )() ;

//if you want to pass value in IIFE
// ( (name) => {
//     console.log(`BD CONNECTED TW ${name}`) ;
// } )('chinmay') ; //use only single quote


// ; terminator problem ;

(()=>{
    console.log("one") ;
})() ;

(function chai2(){
    console.log("two") ;
})()  ;

(function chai3(){
    console.log("three") ;
})()  