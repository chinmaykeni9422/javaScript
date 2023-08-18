// object declairation using constructor 

const tinderUser = new Object() ;
// console.log(tinderUser) ;    //{}

tinderUser.id = "123%^4" ;
tinderUser.name = "chinmay" ;
tinderUser.isloggedIn = true ;
// console.log(tinderUser) ; 


const regularUser = {
    email : "chinmay23@gmail.com" ,
    aboutUser : {
        fullName : {
            name : "utkarsh",
            lastName : "keni"
        },
        profession : {
            role : "developer" ,
            salary : 120000
        }
    } 
} ;

// console.log(regularUser) ;
// console.log(regularUser.aboutUser) ;
// console.log(regularUser.aboutUser.profession) ;
// console.log(regularUser.aboutUser.profession.salary) ;


// merging two object using Object.assign({},name of first obj , name second obj ) ;

const obj1 = {
    1 : "a",
    2 : "b",
    3 : "c" 
}

const obj2 = {
    4 : "d",
    5 : "e",
    6 : "f" 
}

// assign() method
const obj3 = Object.assign({},obj1,obj2) ;
// console.log(obj3) ;

//merging using spread method
const obj4 = {...obj1, ...obj2} ;
// console.log(obj4) ;





//----------------------------- array of object 
const user = [
    {
        id : 1,
        email : "chinmay@123"
    },
    {
        id : 2,
        email : "utkarsh@123"
    },
    {
        id : 3,
        email : "manoj@123"
    },
    {
        id : 4,
        email : "sunita@123"
    }
]
// user[1].email ;

// console.log(tinderUser) ;

// console.log(Object.keys(tinderUser)) ;
// console.log(Object.values(tinderUser)) ;

// entries() =>  returns an array of a given object's own enumerable string-keyed property key-value pairs.
// console.log(Object.entries(tinderUser)) ;


//hasOwnProperty() => returns true if the specified property is a direct property of the object — even if the value is null or undefined . The method returns false if the property is inherited, or has not been declared at all
console.log(tinderUser.hasOwnProperty('name')) ;
