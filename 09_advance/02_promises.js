// pending 
// fullfield
// rejected

// do an async task
//DB calls , cryptography , network


// promise 1
const promiseOne = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Async task is complete") ;
        resolve() ;
    },1000);
}) ;  

promiseOne.then(() => {
    console.log("promise consume") ;
}) ;    //then() connection is with resolve 