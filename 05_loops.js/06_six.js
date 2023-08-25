// forEach loop dosen't return anything 

// const codding = ["cpp","js","SQL","python"] ;

// codding.forEach((item)=>{
//     console.log(item) ;
// }) ;


// ******* filter() method *********

const myNum = [1,2,3,4,5,6,7,8,9,10] ;

// const newNum = myNum.filter((num) => {
//    return num > 5 ;
// })
// console.log(newNum) ;

// if you want to do same work using for each 
// const newNum  = [] ;
// myNum.forEach((num) => {
//     if(num > 5){
//         newNum.push(num) ;
//     }
// }) ;

// console.log(newNum) ;



// example

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//1)  return books which have genre equal to history
//   const user = books.filter((bk) => {
//     return bk.genre === "History" ;
//   })

//   console.log(user) ;

//2)  return books which are publish after 2000
// const user = books.filter((bk) => {
//     return bk.publish > 2000 ;
// });

// console.log(user) ;

//3)  return books which are publish after 1995 and have genre equal to history
// const user = books.filter((bk) => {
//     return bk.publish > 1995 && bk.genre === "History" ;
// });

// console.log(user) ;



// ******* map() method *********

const myArr = [1,2,3,4,5,6,7,8,9,10] ;

// add 10 to each element and return it using forEach()
// const newArr = [] ;

// myArr.forEach((num) => {
//     newArr.push(num+10) ;
// });
// console.log(newArr) ;


// now we will do above same operation using map() function

// const Arr = myArr.map((num) => {
//     return num+10 ;
// }) ;

// console.log(Arr) ;


// ** chaining **
/*Method chaining, or simply chaining, in JavaScript can be defined 
as when one or more sequential methods get invoked from an object
without the introduction of unnecessary variables. The sole purpose 
of chaining is to make our code more readable and reduce the redundancy within.*/

// const myA = [1,2,3,4,5,6,7,8,9,10] ;

// const newA = myA
//             .map((num) => num*10 )
//             .map((num) => num+1)
//             .filter((num) => num >= 40) ;

// console.log(newA)  ;




// ******* reduce() method *********
//-------------------------------------
// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

// console.log(sumWithInitial);
// Expected output: 10
//-----------------------------------------

// using normal function
// const array1 = [1, 2, 3, 4];

// const initialValue = 0;
// const total = array1.reduce(function(acc,currVal){
//     return acc + currVal
// },0);
// console.log(total) ;


// using arrow function  //explicitly
// const array1 = [1, 2, 3, 4]; 
// const total = array1.reduce((acc,currVal) => (acc+currVal),0/*intial value*/) ; 
// console.log(total) ;


// using arrow function  // without explicitly
// const array1 = [1, 2, 3, 4]; 
// const total = array1.reduce((acc,currVal) => {
//     return acc+currVal
// },0/*intial value*/) ; 
// console.log(total) ;


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const total = shoppingCart.reduce((acc,obj) => {
    return acc+obj.price ;
},/*intial value*/0);

console.log(total) ;

