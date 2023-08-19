function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


// function calculateCartPrice(num1){
//     return num1 ;
// }
// console.log(calculateCartPrice(2)) ;



//rest operator (it's actually a spread operator)
function calculateCartPrice(...num1){
    return num1 ;
}
// console.log(calculateCartPrice(20,23,45,true,"chinmay")) ;


function calculateCartPrice(val,val2,...num1){
    return num1 ;
}
// console.log(calculateCartPrice(20,23,45,true,"chinmay")) ;


//-- how to pass object in function 
const obj ={
    username : "chinmay" ,
    roll : 51 
} ;

function handleObject(anyobject){
    console.log(`name of user is ${anyobject.username} and roll number is ${anyobject.roll}`) ;
}

// handleObject(obj) ;

// or you can pass direct object 

// handleObject({
//     username : "chinmay" ,
//     roll : 51 
// }) ;


//-- how to pass array in function 

let myArr = [200,344,584,48] ;

function handleArray(anyArray){
    return anyArray[2] ;
}

// console.log(handleArray(myArr)) ; 

// or you can pass direct array
// console.log(handleArray([200,344,584,48])) ; 