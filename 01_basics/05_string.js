const name = "chinmay " ;
const repoCount = 2 ;

// length => 	Returns the length of a string

// console.log(name + repoCount + " keni");  --> too old 

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// anothe way to declare string
const gameName = new String("counter-strike") ;
// console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf(m));

const newStr = gameName.substring(0,4) ;
// console.log(newStr); 

// const anotherstr = gameName.slice(0,4) ;
// const anotherstr = gameName.slice(-2,4) ; we can take negative value too in slice 
// console.log(anotherstr) ;

const newstring = "      chinmay      " ;
// console.log(newstring);
// console.log(newstring.trim());

const url = "https://chinmay.com/chinmaykeni" ;
// console.log(url.replace('chinmay' , 'chin') ) ;
// console.log(url.includes('chinmay')) ;

const word = "chinmay/is/having/bad/day" ; 
// console.log(word.split('/'));  // you can use any thing to seperate like " " , "," ,"." or anything ;


// returns constructor 
let txt = word.constructor ;
// console.log(txt) ;

// endsWith() => Returns if a string ends with a specified value
// console.log(word.endsWith('day')) ; 

//fromCharCode() => Returns Unicode values as characters
const text = String.fromCharCode(65,66,67,68) ;
// console.log(text) ;

// indexOf() => 	Returns the index (position) of the first occurrence of a value in a string
// lastIndexOf() => Returns the index (position) of the last occurrence of a value in a string
// console.log(word.indexOf('/')) ;


// prototype() => Allows you to add properties and methods to an object

// repeat() => Returns a new string with a number of copies of a string