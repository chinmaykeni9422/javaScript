// object literal
const user = {
    username: "chinmay",
    loginCount: 3,
    signedIn: true,
    getUserDetails: function(){
        console.log("hello world") ;
    }
}


// constructor function 
function User(UserName, logInCount, isLoggedIn){
    this.UserName = UserName,
    this.logInCount = logInCount,
    this.isLoggedIn = isLoggedIn
}

const userOne = new User("chinmay", 6, true) ;
const userTwo = new User("babli", 6, false) ;

console.log(userOne)
console.log(userTwo)