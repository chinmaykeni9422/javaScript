const userEmail = []

if (userEmail) {
    // console.log("Got user email");
} else {
    // console.log("Don't have user email");
}


// falsy value 
// false, 0, -0, BigInt 0n, "", null, undefined, Nan  etc

// truthy value 
// "0", "false", " ", [], {}, function(){} etc

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
}


// Nullish Coalescing Operator (??) : null indefined

let val1 ;
// val1 = 5 ?? 10 ;
// val1 = null ?? 10 ;
// val1 = undefined ?? 10 ;
// val1 = null ?? 10 ?? 15 ;
// val1 = null ?? undefined // => o/p is undefined
val1 = undefined ?? null // => o/p is null
// console.log(val1) ;


// turnery operator 
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
