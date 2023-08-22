// for in

const obj = {
    js : "javaScript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
} ;

for (const key in obj) {
    // console.log(key) ;
}

for (const key in obj) {
    // console.log(obj[key]) ;
}

for (const key in obj) {
    // console.log(`key is ${key} and value is ${obj[key]}`) ;
}

for (const [key,value] in obj) {
    // console.log(key,"->",value) ;
}

// array 
const programming = ["js","cpp","c","php","java"] ;
for (const key in programming) {
    // console.log(key) ;
}

for (const key in programming) {
    // console.log(programming[key]) ;
}

// map

const map = new Map() ;
map.set(1,"chinmay") ;
map.set(2,"utarsh") ;
map.set(3,"sunita") ;
map.set(4,"manoj") ;

// not working in map
for (const key in map) {
    // console.log(key)
}