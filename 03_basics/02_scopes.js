// var c = 34 ;
let a = 9 ;

if(true){
    let a = 10 ;
    const b = 20 ;
    var c = 30 ;
    // console.log(`INNER ${a}`) ;
}


// console.log(a) ;  // error -> not define
// console.log(b) ;  // error -> not define
// console.log(c) ; // no error



//-----------------------------------------------------------------------------

function one(){
    const username = "chinmay" ;
    function two(){
        const website = "youtube" ;
        console.log(username) ;
    }
    //console.log(website) ;
    two() ;
}

// one() ;


if(true){
    const user = "chinmay" ;
    if(true){
        const website = " youtube" ;
        //console.log(user+website) ;
    }
    // console.log(website) ;
}
// console.log(user) ;



//----------------intresting----------------------------------------------


console.log(addOne(5)) ;
function addOne(num){
    return num+1 ;
}


addTwo(8) ;
const addTwo = function(num){
    return num+1 ;
}
