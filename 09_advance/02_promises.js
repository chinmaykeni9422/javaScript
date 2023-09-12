// pending 
// fullfield
// rejected

// do an async task
//DB calls , cryptography , network


// promise 1
const promiseOne = new Promise((resolve,reject) => {
    setTimeout(() => {
        // console.log(  "Async task is complete") ;
        resolve() ;
    },1000);
}) ;  

promiseOne.then(() => {
    // console.log("promise consume") ;
}) ;    //then() connection is with resolve 


// promise 2

new Promise((resolve,reject) => {
    setTimeout(() => {
        // console.log("Async task 2") ;
        resolve() ;
    },1000)
}).then(() => {
    // console.log("Async 2 resolve") ;
}) ;


// third promise 

const promiseThree = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({username: "chinmay",email:"chinmay.google"})
    },1000)
}) ;

promiseThree.then((userData) => {
    // console.log(userData) ;
}) ;


// promise four 

// const promiseFour = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let error = true ;
//         if(!error){
//             resolve({username: "utkarsh" , password: "234"}) ;
//         }
//         else{
//             reject("ERROR: Something Went Wrong") ;
//         }
//     }, 1000);
// }) ;

// promiseFour
// .then((userData) => {
//     // console.log(userData)
//     return userData.username ;
// })
// .then((myUserName) => {
//     // console.log(myUserName) ;
// })
// .catch((error) => {
//     // console.log(error) ;
// })
// .finally(() => {
//     // console.log("Finally The Promise Either Resolved or Rejected")
// }) ;


// promise five (by Async Await) ( connot handle errors(reject) )
// const promiseFive = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let error = true ;
//         if(!error){
//             resolve({username: "utkarsh" , password: "234"}) ;
//         }
//         else{
//             reject("ERROR: JS Went Wrong") ;
//         }
//     },1000)
// }) ;

// in this below function errors are not gacefully handled
// async function consumePromiseFive(){
//     const respose = await promiseFive
//     console.log(respose) ;
// }

// to handle errors in Async Await we use bellow syntax
// async function consumePromiseFive(){
//     try {
//         const respose = await promiseFive
//         // console.log(respose) ;
//     } catch (error) {
//         // console.log(error) ;
//     }
// }

// consumePromiseFive() ;



// -----------------------------------
// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users") ;
//         const data = await response.json() ;
//         console.log(data) ;
//     } catch (error) {
//         console.log("E: ",error) ;
//     }
// }

// getAllUsers() ;


//-----------------------------------
// using then()
fetch("https://jsonplaceholder.typicode.com/users") 
.then((response) => {
    return response.json() ;
})
.then((data) => {
    console.log(data) ;
})
.catch((error) => {
    console.log(error) ;
})
.finally(() => {
    console.log("Finally Response is Printed ") ;
}) ;