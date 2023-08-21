
// 'this' operator reffers current context 

const user = {
    username : "chinmay" ,
    price : 999 ,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`) ;
        console.log(this) ;
    }

}

// user.welcomeMessage() ;
// user.username = "chin" ;
// user.welcomeMessage() ;


// console.log(this)
// in node.js enviroment 'this' reffers to empty object in global context
// in browser 'this' reffers to global window object


//----------------------------arrow function ---------------------------------

// function chai(){
//     let username = "chinmay" ;
//     console.log(this) ;
//     console.log(this.username) ;
// }
// chai() ;


// arrow function
const chai = () => {
    let username = "chinmay" ;
    // console.log(this) ;
    // console.log(this.username) ;
}
// chai() ;



// const addTwo = (num1,num2) =>{
//     return num1+num2 ;
// }

//implpicite return (ek line cha code asel tar)
// const addTwo = (num1,num2) =>  num1+num2 ;

//we can also use  (jar tu curly braces use kele tar tula return keyword use karav lagel ani jar curve bracket use kele tar return key word nahi lihava lahel )
const addTwo = (num1,num2) =>  (num1+num2) ;
// console.log(addTwo(2,5)) ;

// how to return object in js 
const retObj = () => ({
    name : "chinmay" ,
    joberole : "developer" ,
    salary : 2000 
}) ;
// console.log(retObj()) ;
