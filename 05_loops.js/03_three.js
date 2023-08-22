// for of
// syntax
// for (const iterator of object) {
    
// }

// ["","",""]
// [{},{},{}]

const arr = [45,22,35,48,15,56] ;

for( const num of arr ){
    // console.log(num) ;
}

const greetings = "hello world" ;
for( const greet of greetings ){
    if(greet === " ")continue ;
    // console.log(`each char is -> ${greet}`) ;
}



// maps 
// store only only unique value 
const map = new Map() ;
map.set("maharashtra","vadapav") ;
map.set("Dilli","chhole bhature") ;
map.set("himachal","momo's") ;
map.set("heidrabad","biryani") ;

// console.log(map) ;

for(const str of map){
    //  console.log(str) ;
}

for(const [str,value] of map){
     console.log(str,'->',value) ;
}


// object
const myObj = {
    game1 : "pubg",
    game2 : "counterStrike",
    game3 : "candyCrush",
    game4 : "vector"
};

// not working in object 
// for (const [game,value] of myObj) {
//     console.log(game,value) ;
// }